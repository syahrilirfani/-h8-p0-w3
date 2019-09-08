/**

	Directions
	contoh output
	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
	Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

	Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

	["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
	Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.

	Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
	Format tanggal pada data adalah dd-mm-YYYY
	Misal angka bulan 01, tuliskan "Januari"
	Gunakan switch case untuk menuliskan bulan di atas.
	Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

	Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

	Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

*/
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2(inputArray) {
	inputArray.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
	inputArray.splice(4, 1, "Pria", "SMA International Metro");
	console.log(inputArray);
	var tanggal = inputArray[3].split('/');
	var tanggalLain = tanggal.slice(); //copy the array
	switch (Number(tanggal[1])) {
		case 1:
			console.log("Januari");
			break;
		case 2:
			console.log("Februari");
			break;
		case 3:
			console.log("Maret");
			break;
		case 4:
			console.log("April");
			break;
		case 5:
			console.log("Mei");
			break;
		case 6:
			console.log("Juni");
			break;
		case 7:
			console.log("Juli");
			break;
		case 8:
			console.log("Agustus");
			break;
		case 9:
			console.log("September");
			break;
		case 10:
			console.log("Oktober");
			break;
		case 11:
			console.log("November");
			break;
		case 12:
			console.log("Desember");
			break;
	}

	tanggal.sort(function (a, b) {
		return b - a
	});
	console.log(tanggal);
	console.log(tanggalLain.join("-"));
	console.log(inputArray[1].slice(0, 15));
}