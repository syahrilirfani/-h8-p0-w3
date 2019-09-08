/**
	Problem
	Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
	var target = [];
	if (arr.indexOf('x') !== -1 && arr.indexOf('o') !== -1) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] !== ' ') {
				if (target.length == 0) {
					target.push(arr[i]);
					target.push(i);
				} else if (arr[i] !== target[0]) {
					return Math.abs(i - target[1]);
				} else {
					target[1] = i;
				}
			}
		}
	} else {
		return 0;
	}
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2