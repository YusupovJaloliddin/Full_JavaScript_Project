import tabs from "./modules/tabs";
import accordion from "./modules/accordion";
import cards from "./modules/cards";
import data from "./modules/data";
import loader from "./modules/loader";
import modal from "./modules/modal";
import slider from "./modules/slider";
import form from "./modules/form";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => openModal(".modal", modalTimer), 5000);

  tabs();
  accordion();
  cards();
  data();
  loader();
  modal("[data-modal]", ".modal", modalTimer);
  slider();
  form(modalTimer);
});

// ``
