
const innerOverlay = document.getElementById("innerDream");
const innerClose = document.querySelector(".inner-dream-close");
const innerToggles = document.querySelectorAll(".inner-dream-toggle");
const innerBody = document.getElementById("innerDreamBody");


const innerDreamContentByStage = {
  1: `
    <p class="quote">
      “At first, his dreams were chaotic; somewhat later, they were of a dialectical nature.”
      — Jorge Luis Borges, <em>The Circular Ruins</em>
    </p>
    <p class="quote-explain">
      Growth begins in a chaotic state, where desires and possibilities are messy and hard to name.
    </p>
  `,
  2: `
    <p class="quote">
      “Every night he perceived it more clearly. He did not touch it; he only permitted himself
      to witness it, to observe it, and occasionally to rectify it with a glance.”
      — Jorge Luis Borges, <em>The Circular Ruins</em>
    </p>
    <p class="quote-explain">
      Growth here is slow, precise work: watching carefully, correcting small details, and
      building a body piece by piece.
    </p>
    <p class="quote">
      “Within a year he reached the skeleton, the eyelids. The innumerable hair was perhaps
      the most difficult task.”
      — Jorge Luis Borges
    </p>
    <p class="quote-explain">
      Bone, eyelids, and countless tiny lines are patiently constructed before anyone can see them.
    </p>
  `,
  3: `
    <p class="quote">
      “He dreamed a complete man… but this youth could not rise, he could not speak,
      and his eyes were closed. Night after night, the man dreamed him asleep.”
      — Jorge Luis Borges, <em>The Circular Ruins</em>
    </p>
    <p class="quote-explain">
      Growth has created a full form, but it is not yet awake; it waits between possibility
      and reality for the moment to move.
    </p>
  `,
  4: `
    <p class="quote">
      “Gradually, he accustomed him to reality… He tried other analogous experiments,
      each time more audacious. With a certain bitterness, he understood that his son was
      ready to be born—and perhaps impatient.”
      — Jorge Luis Borges, <em>The Circular Ruins</em>
    </p>
    <p class="quote-explain">
      Growth becomes fulfillment when the created being can move in the world, test itself,
      and feel ready to be born.
    </p>
    <p class="quote">
      “With relief, with humiliation, with terror, he understood that he too was a mere appearance,
      dreamt by another.”
      — Jorge Luis Borges, <em>The Circular Ruins</em>
    </p>
    <p class="quote-explain">
      At the end of growth, fulfillment also means recognizing that we are part of a larger dream,
      shaped by forces beyond ourselves.
    </p>
  `
};


innerToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const stage = btn.dataset.stage;
    if (innerDreamContentByStage[stage]) {
      innerBody.innerHTML = innerDreamContentByStage[stage];
    }
    innerOverlay.classList.add("active");
  });
});

if (innerClose && innerOverlay) {
  innerClose.addEventListener("click", () => {
    innerOverlay.classList.remove("active");
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    innerOverlay?.classList.remove("active");
  }
});


const branchButtons = document.querySelectorAll(".branch-btn");
const sleepQuote = document.querySelector(".branch-quote-sleep");
const wakeQuote = document.querySelector(".branch-quote-wake");

branchButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const branch = btn.dataset.branch;

    if (branch === "sleep") {
      sleepQuote.classList.add("active");
      wakeQuote.classList.remove("active");
    } else if (branch === "wake") {
      wakeQuote.classList.add("active");
      sleepQuote.classList.remove("active");
    }

    history.pushState({ branch }, "", `#branch-${branch}`);
  });
});


window.addEventListener("popstate", () => {
  sleepQuote?.classList.remove("active");
  wakeQuote?.classList.remove("active");
});
