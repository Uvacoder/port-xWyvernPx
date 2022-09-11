import "./style.css";
// import * as SimpleMDE from "simplemde";
const path = window.location.pathname;

if (path === "/") {
  const primaryLoader = document.querySelector(".primary-loader");
  const progressLoader = document.querySelector(".progress-loader");
  primaryLoader.classList.add("active");
  progressLoader.classList.add("active");
  setTimeout(() => {
    primaryLoader.classList.remove("active");
    progressLoader.classList.remove("active");
  }, 2500);
}
import { LandingPage } from "./landing";
import { BlogPage } from "./blogPage";

// import {} from "./";
// import * as SimpleMDE from "simplemde";
import { ModalActive, modalInit } from "./components/Modal";
import { BlogCreateForm } from "./components/BlogCreateForm";
const body = document.querySelector("body");
const themeButton = document.querySelector(".theme_toggle_btn");
const icon = document.createElement("i");

icon.classList.add("fa-solid", "fa-lightbulb");
// themeButton?

console.log(body, themeButton);
themeButton?.appendChild(icon);
themeButton?.addEventListener("click", () => {
  body?.classList.toggle("dark");
  icon.className = "";
  if (body?.classList.contains("dark")) {
    icon.className = "fa-solid fa-lightbulb";
  } else {
    icon.className = "fa-solid fa-moon";
  }
});

const createButton = document.querySelector(".blog-create-button");
createButton?.addEventListener("click", () => {
  const credential = sessionStorage.getItem("access_token");
  // TODO : API get me
  if (credential) {
    ModalActive(document.createElement("div"));
  } else {
    setTimeout(() => ModalActive(BlogCreateForm()), 0);
  }
});

// body?.addEventListener("load")
switch (path) {
  case "/":
    LandingPage();
    break;
  case "/blogs":
    BlogPage();
    break;
}

modalInit();

// const simplemde = new SimpleMDE();
