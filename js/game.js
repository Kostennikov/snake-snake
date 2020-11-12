let game = {
	canvas: null,
	ctx: null,
	sprites: {
		background: null,
		cell: null,
	},

	start() {
		this.canvas = document.getElementById('mycanvas');
		// контекст, позволяет рисовать графику
		this.ctx = this.canvas.getContext('2d');


		this.preload(() => {
			this.run()
		});
	},
	preload(callback){
		let loaded = 0;
		let required = 2;
		let onAssetLoad = () => {
			++loaded;

			if (loaded >= required) {
				// когда все спрайты загружены:
				callback();
			}
		}

		for (let key in this.sprites){
			// получение изображения для отрисовки
			this.sprites[key] = new Image();
			this.sprites[key].src = 'img/' + key + '.png';
			// запуск при полной загрузке страницы
			this.sprites[key].addEventListener('load', onAssetLoad);
		}

	},
	// запуск игры
	run() {
		// выполнение перерисовки кадра анимации (рендер графики)
		window.requestAnimationFrame(() => {
			// вывод изображения на экран
			// графика запланированная для перерисовки
			this.ctx.drawImage(this.sprites.background, 0, 0);
			this.ctx.drawImage(this.sprites.cell, 320, 180);
		});
	}
};

game.start();
