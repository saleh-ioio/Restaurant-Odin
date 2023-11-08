const menuContainer = (function () {
  const mainHolder = document.createElement("div");
  mainHolder.classList.add("mainCont");

  const menuTextarr = [
    "kababpizza ..................10 jod",
    "hummus ......................05 jod",
    "shawema kabab ...............07 jod",
    "kabab 1kg ...................10 jod",
    "sheesh tawooq 1kg ...........15 jod",
    "shaneena 1kg ................03 jod",
    "orange joice 1 kg ...........04 jod",
    "falafel sanwich .............01 jod",
  ];

  for (let index = 0; index < menuTextarr.length; index++) {
    const element = menuTextarr[index];

    const menuItemNode = document.createElement("h3");
    menuItemNode.textContent = element;

    mainHolder.append(menuItemNode);
  }
  return { mainHolder };
})();

const menu = menuContainer.mainHolder;

export { menu };
