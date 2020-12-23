// JavaScript Document
function logout() {
	var yakin = confirm("are you sure to logout from my heart?");
	if (yakin) {
		document.write("Anda Berhasil Keluar");
		window.location = "index.html";
	} else {
		document.write("Baiklah, Stay Here Please :)");
		window.location = "home.html"
	}
}