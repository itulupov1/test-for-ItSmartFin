// Preloader
const preLoader = () => {
	const	moreBtn = document.querySelector('.content-main__more-btn'),
		mainItems = document.querySelectorAll('.content-main__item'),
		preloaderElement = document.getElementById('preloader');
	const loadData = () => new Promise((resolve, reject) => {
		preloaderElement.classList.remove('preloader_hidden');
		setTimeout(() => {
			mainItems.forEach(item => {
				if (item.classList.contains('content-main__item_hidden')) {
					item.classList.remove('content-main__item_hidden');
				}
			});
			resolve();
		}, 1800);
		moreBtn.style.display = 'none';
	});
	moreBtn.addEventListener('click', () => {
		loadData()
			.then(() => {
				preloaderElement.classList.add('preloader_hidden');
				preloaderElement.classList.remove('preloader_visible');
			});
		moreBtn.removeEventListener('click', () => {});
	});
};

export default preLoader;