/**
   Directions
   Buatlah sebuah fungsi dengan nama balikString. 
   Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya. 
 */
function balikString(InputString) {
	var buffer = [];

	for (var i = InputString.length - 1; i >= 0; i--) {
		buffer.push(InputString[i]);
	}

	return buffer.join('');
}

console.log(balikString("YOI"));