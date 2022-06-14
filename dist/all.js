
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
	popup.addEventListener("click", (e) => {
		 const target = e.target;
		 if (target.classList.contains("popup__wrapper") || target.classList.contains("popup__close")) {
			popupClosest();
		 }
	});


