const header = document.querySelector(".site-header");
const showreelLinks = document.querySelectorAll(".js-showreel");
const modal = document.querySelector(".showreel-modal");
const modalFrame = modal?.querySelector("iframe");
const modalClose = modal?.querySelector(".modal-close");

const setHeaderState = () => {
  if (window.scrollY > 24) {
    header.style.background = "rgba(11, 11, 11, 0.92)";
    header.style.backdropFilter = "blur(18px)";
  } else {
    header.style.background = "linear-gradient(180deg, rgba(11, 11, 11, 0.92), rgba(11, 11, 11, 0))";
    header.style.backdropFilter = "none";
  }
};

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

const openShowreel = () => {
  if (!modal || !modalFrame) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  modalFrame.src = modalFrame.dataset.src;
  document.body.style.overflow = "hidden";
  modalClose?.focus();
};

const closeShowreel = () => {
  if (!modal || !modalFrame) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalFrame.removeAttribute("src");
  document.body.style.overflow = "";
};

showreelLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openShowreel();
  });
});

modalClose?.addEventListener("click", closeShowreel);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeShowreel();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeShowreel();
  }
});
