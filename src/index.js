import { home } from "./homeCont";
import { menu } from "./menuCont";
import { about } from "./aboutCont";
import "./style.css";
import github from "./github.png";
const contentHolder = document.querySelector("#content");

let tabsCreationContent = function () {
  let currentactiveTab = 0;
  const tabsArr = ["Home", "Menu", "About"];
  const tabsContArr = [home, menu, about];
  const tabNOdesArr = [];

  const tabContNode = document.createElement("div");
  tabContNode.classList += "header";

  for (let index = 0; index < tabsArr.length; index++) {
    const element = tabsArr[index];

    console.log(tabNOdesArr);
    const tabNode = document.createElement("div");
    tabNode.classList += " btn";
    tabNOdesArr.push(tabNode);

    tabNode.addEventListener("click", function () {
      const indexs = index;
      tabNOdesArr[currentactiveTab].classList.remove("clicked");
      tabNode.classList.add("clicked");
      contentHolder.removeChild(contentHolder.lastChild);
      contentHolder.append(tabsContArr[indexs]);
      currentactiveTab = indexs;
    });

    const textNode = document.createElement("h3");
    textNode.textContent = element;

    tabNode.append(textNode);
    tabContNode.append(tabNode);
  }

  contentHolder.append(tabContNode);
  contentHolder.append(home);
};

tabsCreationContent();
