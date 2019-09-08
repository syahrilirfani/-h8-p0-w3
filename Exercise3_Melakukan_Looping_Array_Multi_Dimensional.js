/**
	Directions
	Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n. Contoh input dapat dilihat dibawah:
*/
var input = [

	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
	["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
	["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
	["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]

];


function dataHandling(PersonArray) {
	for (var i = 0; i < PersonArray.length; i++) {
		console.log("Nomor ID: " + PersonArray[i][0] +
			"\nNama Lengkap: " + PersonArray[i][1] +
			"\nTTL: " + PersonArray[i][2] + " " + PersonArray[i][3] +
			"\nHobi: " + PersonArray[i][4] + "\n");
	}

}

dataHandling(input);