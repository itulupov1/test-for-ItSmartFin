//Анимация слайда элементов в фильтре
const animateSlide = () => {
	const sidebar = document.querySelector('.main__sidebar');

	const animate = (target) => {
		target.closest('.sidebar-item__header').parentNode.querySelector(
			'.sidebar-item__content').classList.toggle('curr');
		target.closest('.sidebar-item__header').classList.toggle('curr');
	};

	sidebar.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('.sidebar-item__header')) {
			animate(target);
		}
	});
};

export default animateSlide;