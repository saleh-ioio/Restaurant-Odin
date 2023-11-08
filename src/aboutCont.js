const aboutContainer = (function () {
  const mainHolder = document.createElement("div");
  mainHolder.classList.add("mainCont");

  const locationNode = document.createElement("h3");
  locationNode.textContent = "our location : amman / matar circle 78";

  const phoneNumNode = document.createElement("h3");
  phoneNumNode.textContent = "078 55665566";

  const imgNode = document.createElement("img");
  imgNode.setAttribute("src", "../src/IMG-1480.webp");
  imgNode.setAttribute("width", "400px");

  mainHolder.append(locationNode);
  mainHolder.append(phoneNumNode);
  mainHolder.append(imgNode);

  return { mainHolder };
})();

const about = aboutContainer.mainHolder;

export { about };
