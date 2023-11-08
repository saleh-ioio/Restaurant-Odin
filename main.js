/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutCont.js":
/*!**************************!*\
  !*** ./src/aboutCont.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   about: () => (/* binding */ about)
/* harmony export */ });
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




/***/ }),

/***/ "./src/homeCont.js":
/*!*************************!*\
  !*** ./src/homeCont.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
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



/***/ }),

/***/ "./src/menuCont.js":
/*!*************************!*\
  !*** ./src/menuCont.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeCont__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeCont */ "./src/homeCont.js");
/* harmony import */ var _menuCont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuCont */ "./src/menuCont.js");
/* harmony import */ var _aboutCont__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutCont */ "./src/aboutCont.js");




const contentHolder = document.querySelector("#content");

let tabsCreationContent = function () {
  let currentactiveTab = 0;
  const tabsArr = ["Home", "Menu", "About"];
  const tabsContArr = [_homeCont__WEBPACK_IMPORTED_MODULE_0__.home, _menuCont__WEBPACK_IMPORTED_MODULE_1__.menu, _aboutCont__WEBPACK_IMPORTED_MODULE_2__.about];
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
  contentHolder.append(_homeCont__WEBPACK_IMPORTED_MODULE_0__.home);
};

tabsCreationContent();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRDs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ2hDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7O0FBRUQ7O0FBRWdCOzs7Ozs7O1VDNUJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDQTtBQUNFOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQUksRUFBRSwyQ0FBSSxFQUFFLDZDQUFLO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLHdCQUF3QjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkNBQUk7QUFDM0I7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9zcmMvYWJvdXRDb250LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9ob21lQ29udC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9zcmMvbWVudUNvbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0Q29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWFpbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Ib2xkZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250XCIpO1xuXG4gIGNvbnN0IGxvY2F0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbG9jYXRpb25Ob2RlLnRleHRDb250ZW50ID0gXCJvdXIgbG9jYXRpb24gOiBhbW1hbiAvIG1hdGFyIGNpcmNsZSA3OFwiO1xuXG4gIGNvbnN0IHBob25lTnVtTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgcGhvbmVOdW1Ob2RlLnRleHRDb250ZW50ID0gXCIwNzggNTU2NjU1NjZcIjtcblxuICBjb25zdCBpbWdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nTm9kZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9zcmMvSU1HLTE0ODAud2VicFwiKTtcbiAgaW1nTm9kZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjQwMHB4XCIpO1xuXG4gIG1haW5Ib2xkZXIuYXBwZW5kKGxvY2F0aW9uTm9kZSk7XG4gIG1haW5Ib2xkZXIuYXBwZW5kKHBob25lTnVtTm9kZSk7XG4gIG1haW5Ib2xkZXIuYXBwZW5kKGltZ05vZGUpO1xuXG4gIHJldHVybiB7IG1haW5Ib2xkZXIgfTtcbn0pKCk7XG5cbmNvbnN0IGFib3V0ID0gYWJvdXRDb250YWluZXIubWFpbkhvbGRlcjtcblxuZXhwb3J0IHsgYWJvdXQgfTtcbiIsImNvbnN0IGhvbWVDb250VGFiID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWFpbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Ib2xkZXIuY2xhc3NMaXN0LmFkZChcIm1haW5Db250XCIpO1xuXG4gIGNvbnN0IHJlc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICByZXN0TmFtZS50ZXh0Q29udGVudCA9IFwic2F5ZWQga2FiYWJcIjtcblxuICBjb25zdCBjb3B5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29weTEudGV4dENvbnRlbnQgPSBcIkJlc3Qga2FiYWIgaW4gQXNpYVwiO1xuXG4gIGNvbnN0IGNvcHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb3B5Mi50ZXh0Q29udGVudCA9IFwiTWFkZSB3aXRoIE1lYXQgc2luY2UgMTQwMCBBSFwiO1xuXG4gIGNvbnN0IHJlc3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICByZXN0SW1nLnNldEF0dHJpYnV0ZShcbiAgICBcInNyY1wiLFxuICAgIFwiLi4vc3JjLzEwMDBfRl8yNTE1MTUyODVfakxQblhid0FteHcwWGo2aGZzV2dWV0JkS3BOUGk0TkguanBnXCJcbiAgKTtcbiAgcmVzdEltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjQwMHB4XCIpO1xuICByZXN0SW1nLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjQwMHB4XCIpO1xuXG4gIGNvbnN0IGNvcHkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb3B5My50ZXh0Q29udGVudCA9IFwiVmlzaXQgVXMhXCI7XG5cbiAgbWFpbkhvbGRlci5hcHBlbmQocmVzdE5hbWUpO1xuICBtYWluSG9sZGVyLmFwcGVuZChjb3B5MSk7XG4gIG1haW5Ib2xkZXIuYXBwZW5kKGNvcHkyKTtcbiAgbWFpbkhvbGRlci5hcHBlbmQocmVzdEltZyk7XG4gIG1haW5Ib2xkZXIuYXBwZW5kKGNvcHkzKTtcbiAgcmV0dXJuIHsgbWFpbkhvbGRlciB9O1xufSkoKTtcbmNvbnN0IGhvbWUgPSBob21lQ29udFRhYi5tYWluSG9sZGVyO1xuZXhwb3J0IHsgaG9tZSB9O1xuIiwiY29uc3QgbWVudUNvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1haW5Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udFwiKTtcblxuICBjb25zdCBtZW51VGV4dGFyciA9IFtcbiAgICBcImthYmFicGl6emEgLi4uLi4uLi4uLi4uLi4uLi4uMTAgam9kXCIsXG4gICAgXCJodW1tdXMgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjA1IGpvZFwiLFxuICAgIFwic2hhd2VtYSBrYWJhYiAuLi4uLi4uLi4uLi4uLi4wNyBqb2RcIixcbiAgICBcImthYmFiIDFrZyAuLi4uLi4uLi4uLi4uLi4uLi4uMTAgam9kXCIsXG4gICAgXCJzaGVlc2ggdGF3b29xIDFrZyAuLi4uLi4uLi4uLjE1IGpvZFwiLFxuICAgIFwic2hhbmVlbmEgMWtnIC4uLi4uLi4uLi4uLi4uLi4wMyBqb2RcIixcbiAgICBcIm9yYW5nZSBqb2ljZSAxIGtnIC4uLi4uLi4uLi4uMDQgam9kXCIsXG4gICAgXCJmYWxhZmVsIHNhbndpY2ggLi4uLi4uLi4uLi4uLjAxIGpvZFwiLFxuICBdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZW51VGV4dGFyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbWVudVRleHRhcnJbaW5kZXhdO1xuXG4gICAgY29uc3QgbWVudUl0ZW1Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIG1lbnVJdGVtTm9kZS50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG5cbiAgICBtYWluSG9sZGVyLmFwcGVuZChtZW51SXRlbU5vZGUpO1xuICB9XG4gIHJldHVybiB7IG1haW5Ib2xkZXIgfTtcbn0pKCk7XG5cbmNvbnN0IG1lbnUgPSBtZW51Q29udGFpbmVyLm1haW5Ib2xkZXI7XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVDb250XCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudUNvbnRcIjtcbmltcG9ydCB7IGFib3V0IH0gZnJvbSBcIi4vYWJvdXRDb250XCI7XG5cbmNvbnN0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmxldCB0YWJzQ3JlYXRpb25Db250ZW50ID0gZnVuY3Rpb24gKCkge1xuICBsZXQgY3VycmVudGFjdGl2ZVRhYiA9IDA7XG4gIGNvbnN0IHRhYnNBcnIgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkFib3V0XCJdO1xuICBjb25zdCB0YWJzQ29udEFyciA9IFtob21lLCBtZW51LCBhYm91dF07XG4gIGNvbnN0IHRhYk5PZGVzQXJyID0gW107XG5cbiAgY29uc3QgdGFiQ29udE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJDb250Tm9kZS5jbGFzc0xpc3QgKz0gXCJoZWFkZXJcIjtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFic0Fyci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGFic0FycltpbmRleF07XG5cbiAgICBjb25zb2xlLmxvZyh0YWJOT2Rlc0Fycik7XG4gICAgY29uc3QgdGFiTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFiTm9kZS5jbGFzc0xpc3QgKz0gXCIgYnRuXCI7XG4gICAgdGFiTk9kZXNBcnIucHVzaCh0YWJOb2RlKTtcblxuICAgIHRhYk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGluZGV4cyA9IGluZGV4O1xuICAgICAgdGFiTk9kZXNBcnJbY3VycmVudGFjdGl2ZVRhYl0uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICB0YWJOb2RlLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgY29udGVudEhvbGRlci5yZW1vdmVDaGlsZChjb250ZW50SG9sZGVyLmxhc3RDaGlsZCk7XG4gICAgICBjb250ZW50SG9sZGVyLmFwcGVuZCh0YWJzQ29udEFycltpbmRleHNdKTtcbiAgICAgIGN1cnJlbnRhY3RpdmVUYWIgPSBpbmRleHM7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IGVsZW1lbnQ7XG5cbiAgICB0YWJOb2RlLmFwcGVuZCh0ZXh0Tm9kZSk7XG4gICAgdGFiQ29udE5vZGUuYXBwZW5kKHRhYk5vZGUpO1xuICB9XG5cbiAgY29udGVudEhvbGRlci5hcHBlbmQodGFiQ29udE5vZGUpO1xuICBjb250ZW50SG9sZGVyLmFwcGVuZChob21lKTtcbn07XG5cbnRhYnNDcmVhdGlvbkNvbnRlbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==