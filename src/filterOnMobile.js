//Filter for mobile
const filterOnMobile = () => {
	const filterBtn = document.querySelector(".content-main__btn-filter"),
		filterLinkCloseBtn = document.querySelector(".sidebar-topbar__close-btn"),
		sidebarBody = document.querySelector(".main__sidebar"),
		body = document.querySelector("body");
	if (filterBtn) {
		filterBtn.addEventListener("click", function () {
			filterBtn.classList.toggle("active");
			body.classList.toggle("lock");
			sidebarBody.classList.toggle("active");
		});
		filterLinkCloseBtn.addEventListener("click", function () {
			filterBtn.classList.toggle("active");
			body.classList.toggle("lock");
			sidebarBody.classList.toggle("active");
		});
	}
};
export default filterOnMobile;