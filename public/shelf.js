(() => {
  "use strict";

  const input = document.querySelector("#tool-search");
  const cards = [...document.querySelectorAll(".tool-card")];
  const filters = [...document.querySelectorAll("[data-filter]")];
  const count = document.querySelector("#tool-count");
  const empty = document.querySelector("#empty-result");
  const sessionKey = "tool-shelf:session:v1";
  const visitKey = "tool-shelf:last-visit:v1";
  const today = new Date().toISOString().slice(0, 10);
  const automatedQa =
    new URLSearchParams(window.location.search).get("qa") === "1" || navigator.webdriver === true;
  let activeFilter = "all";

  const normalize = (value) =>
    value.normalize("NFKC").toLocaleLowerCase("ja").replaceAll(/\s+/g, " ").trim();

  const render = () => {
    const query = input instanceof HTMLInputElement ? normalize(input.value) : "";
    let visible = 0;

    cards.forEach((card) => {
      if (!(card instanceof HTMLElement)) {
        return;
      }
      const categories = new Set((card.dataset.categories ?? "").split(" "));
      const categoryMatches = activeFilter === "all" || categories.has(activeFilter);
      const textMatches = !query || normalize(card.dataset.search ?? "").includes(query);
      card.hidden = !(categoryMatches && textMatches);
      if (!card.hidden) {
        visible += 1;
      }
    });

    if (count instanceof HTMLOutputElement) {
      count.textContent = `${visible}件`;
    }
    if (empty instanceof HTMLElement) {
      empty.hidden = visible !== 0;
    }
  };

  if (input instanceof HTMLInputElement) {
    input.addEventListener("input", render);
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      if (!(filter instanceof HTMLButtonElement)) {
        return;
      }
      activeFilter = filter.dataset.filter ?? "all";
      filters.forEach((button) => {
        button.setAttribute("aria-pressed", String(button === filter));
      });
      render();
    });
  });

  const makeSessionId = () =>
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll(/[xy]/g, (character) => {
          const random = Math.floor(Math.random() * 16);
          const value = character === "x" ? random : (random & 0x3) | 0x8;
          return value.toString(16);
        });

  let sessionId = "";
  let lastVisit = "";
  try {
    sessionId = localStorage.getItem(sessionKey) ?? "";
    if (!sessionId) {
      sessionId = makeSessionId();
      localStorage.setItem(sessionKey, sessionId);
    }
    lastVisit = localStorage.getItem(visitKey) ?? "";
    localStorage.setItem(visitKey, today);
  } catch {
    sessionId = makeSessionId();
  }

  const track = (name, tool = "") => {
    if (automatedQa) {
      return;
    }

    void fetch("/api/events", {
      body: JSON.stringify({ name, sessionId, tool }),
      headers: { "content-type": "application/json" },
      keepalive: true,
      method: "POST",
    }).catch(() => undefined);
  };

  track("visited");
  if (lastVisit && lastVisit !== today) {
    track("returned");
  }

  document.querySelectorAll("[data-tool]").forEach((link) => {
    link.addEventListener("click", () => {
      if (link instanceof HTMLAnchorElement) {
        track("opened", link.dataset.tool ?? "");
      }
    });
  });

  render();
})();
