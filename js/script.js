// Через 5 секунд після відкриття сторінки вивести на екран повідомлення "5 seconds!".

(function task1(){

	setTimeout(function(){
		alert('5 seconds!');
	}, 5000);

})();

// Зробити таймер, що починає відлік з 3:30,
// рахує посекундно у зворотньому напрямку і після досягнення значення 0:00 замість цифр видає текст "BOOM!!!"
// (прим.: тероризм - це погано).

(function task2(){

	let m = 3;
	let s = 30;
	let t = setInterval(countSecondsBeforeTheExplosion, 1000);
	function countSecondsBeforeTheExplosion(){
		s--;
		if(s===-1){
			m--;
			s=59;
		}

		boom.innerText = addZero(m)+':'+addZero(s);
		
		if(m===0&&s===0){
			boom.innerText = "BOOM!!!";
			clearTimeout(t);
			boom.fontSize = '150px';
		}
	}

})();

// Виправте код, щоб у консолі видавало цифри 1, 2, 3, 4, 5:
// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i + 1);
//   }, i * 1000);
// }

(function task3(){

	(function(){

		for (let i = 0; i < 5; i++){
			setTimeout(function(){
			console.log(i + 1);
			if (i === 4) bbb();
		}, i * 1000);
		}

	})();

// Переробіть цей код так, щоб у ньому була рекурсія.

	function bbb(){

		function recursion(a){
			console.log(a);
			if(a<5){
				setTimeout(recursion, 1000, a+1);	
			} else ccc();
		}
		recursion(1);

	};

// Спробуйте застосувати setInterval.

	function ccc(){

		let k = 1;
		let n = setInterval(fun, 1000);
		function fun(){
			console.log(k++);
			if (k>5){
				clearInterval(n);
			}
		}
	};	

})();

// Зробити годинник, що відображає в браузері поточні дату та час - день,
// місяць, рік, день тижня, години, хвилини, секунди.
// Синхронізацію проводити 1 раз на 5 хвилин.
// Рекомендації до виконання: раціонально створити масив змінних [Y, M, D, d, h, m, s]
// та 3 функції: синхронізацію з годинником комп’ютера; функцію, що повертає оформлену
// строку з датою та часом та функцію, яка буде робити розрахунки додавання секунди та перевірки хвилин,
// годин і т.п. на перевищення допустимих значень. В таймері setInterval потрібно зробити додавання секунди,
// виведення строки та 1 раз на 300 циклів проводити синхронізацію.
// Зауваження. Можна щосекунди брати системний час та виводити його
// вбудованими функціями, типу .toString(), .toLocaleString() і т.п.,
// але перед нами стоїть задача навчитися оперувати складовими дати та часу.

(function task4(){
	const dayOfWeek = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п`ятниця', 'субота'];
	let i = 0;
	let arr = getDate();

	setInterval(showTime, 1000);

	function showTime(){
		i++;
		arr[6]++;
		if(arr[6]===60){
			arr[6] = 0;
			arr[5]++;
		}
		if(arr[5]===60){
			arr[5] = 0;
			arr[4]++;
		}
		if(i%300===0){
			arr = getDate();
		}

		let s = arr[0] + '-' + arr[1] + '-' + arr[2] + ' ' + dayOfWeek[arr[3]] + ' ' + addZero(arr[4]) + ':' + addZero(arr[5]) + ':' + addZero(arr[6]) ;
		clock.innerText = s;
	}

	function getDate(){
		let arrDate = [];
		let date = new Date();
		arrDate[0] = date.getFullYear();
		arrDate[1] = date.getMonth()+1;
		arrDate[2] = date.getDate();
		arrDate[3] = date.getDay();
		arrDate[4] = date.getHours();
		arrDate[5] = date.getMinutes();
		arrDate[6] = date.getSeconds();

		return arrDate;
	}

	

})();

function addZero(n){
		return n<10?'0'+n : n;
	}