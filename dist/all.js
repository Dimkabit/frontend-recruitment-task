(() => {
	"use strict";
	function isWebp() {
		 function testWebP(callback) {
			  let webP = new Image;
			  webP.onload = webP.onerror = function() {
					callback(2 == webP.height);
			  };
			  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
		 }
		 testWebP((function(support) {
			  let className = true === support ? "webp" : "no-webp";
			  document.documentElement.classList.add(className);
		 }));
	}
	let addWindowScrollEvent = false;
	setTimeout((() => {
		 if (addWindowScrollEvent) {
			  let windowScroll = new Event("windowScroll");
			  window.addEventListener("scroll", (function(e) {
					document.dispatchEvent(windowScroll);
			  }));
		 }
	}), 0);

	//Zadanie rekrutacyjne GravityGlobal na frontend developera
	const mainPageButton = document.querySelector(".main-page__button");
	const popupClose = document.querySelector(".popup__close");
	const bodyDocument = document.querySelector(".body");
	const popupCount = document.querySelector(".popup__count");
	const popup = document.querySelector(".popup");
	const popupReset = document.querySelector(".popup__reset");
	function clickCounter() {
		 if (localStorage.clickcount) localStorage.clickcount = Number(localStorage.clickcount) + 1; else localStorage.clickcount = 1;
		 popupCount.innerText = ` ${localStorage.clickcount} times`;
	}
	const isBigInt = () => {
		 if (localStorage.clickcount >= 5) {
			  popupReset.classList.remove("popup__reset");
			  popupReset.classList.add("popup__reset-active");
		 } else {
			  popupReset.classList.remove("popup__reset-active");
			  popupReset.classList.add("popup__reset");
		 }
	};
	const popupOpen = e => {
		 popup.classList.add("popup_show");
		 bodyDocument.classList.add("lock");
		 clickCounter();
		 isBigInt();
	};
	const popupClosest = () => {
		 popup.classList.remove("popup_show");
		 bodyDocument.classList.remove("lock");
	};
	const popupResets = () => {
		 popup.classList.remove("popup_show");
		 bodyDocument.classList.remove("lock");
		 localStorage.clear();
	};
	mainPageButton.addEventListener("click", popupOpen);
	popupClose.addEventListener("click", popupClosest);
	popupReset.addEventListener("click", popupResets);
	popup.addEventListener("click", (e => {
		 const target = e.target;
		 if (target.classList.contains("popup__wrapper") || target.classList.contains("popup__close")) popupClosest();
	}));

	//Zadanie rekrutacyjne GravityGlobal na frontend developera
	isWebp();
})();