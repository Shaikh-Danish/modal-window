let modalButton = document.querySelectorAll(".btn");
let closeModal = document.querySelector(".modal__close");
let modalWindow = document.querySelector(".modal-window");

modalButton.forEach(e => {
				e.addEventListener("click", () => {
								modalWindow.classList.remove("hidden");		
				});
});

closeModal.addEventListener("click", () => {
				modalWindow.classList.add("hidden");			
});

document.body.addEventListener("input", (e) => {
				if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
								modalWindow.classList.add("hidden")
				}
});

modalWindow.addEventListener("click", function () {
				modalWindow.classList.add("hidden");
})