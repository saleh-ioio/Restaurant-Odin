const homeContTab = (function () {
  const mainHolder = document.createElement("div");
  mainHolder.classList.add("mainCont");

  const restName = document.createElement("h1");
  restName.textContent = "sayed kabab";

  const copy1 = document.createElement("h3");
  copy1.textContent = "Best kabab in Asia";

  const copy2 = document.createElement("h3");
  copy2.textContent = "Made with Meat since 1400 AH";

  const restImg = document.createElement("img");
  restImg.setAttribute(
    "src",
    "../src/1000_F_251515285_jLPnXbwAmxw0Xj6hfsWgVWBdKpNPi4NH.jpg"
  );
  restImg.setAttribute("width", "400px");
  restImg.setAttribute("height", "400px");

  const copy3 = document.createElement("h3");
  copy3.textContent = "Visit Us!";

  mainHolder.append(restName);
  mainHolder.append(copy1);
  mainHolder.append(copy2);
  mainHolder.append(restImg);
  mainHolder.append(copy3);
  return { mainHolder };
})();
const home = homeContTab.mainHolder;
export { home };
