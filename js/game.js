let game = {
	start: function (){
		let canvas = document.getElementById('mycanvas');
		//контекст, позволяет рисовать графику
		let ctx = canvas.getContext('2d')

		//получение изображения для отрисовки
		let background = new Image()
		background.src = 'img/background.png';

		background.addEventListener('load', () => {
			//выполнение перерисовки кадра анимации (рендер графики)
			window.requestAnimationFrame(() => {
				//вывод изображения на экран
				//графика запланированная для перерисовки
				ctx.drawImage(background, 0, 0);
			});
		})




	}
};

game.start();
