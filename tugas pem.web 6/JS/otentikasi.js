//Javascript Doucment
function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert('Username / Password Tidak Boleh Kosong');
		return false;
	}
	else if (pass.length < 4){
		alert('Password Kurang Dari 4');
		return false;
	}
	else if (user == "my boo" && pass == "my boo"){
		alert('congratulation you come into my heart');
		window.location = "home.html";
		return false;
	}else{
		alert("Username / Password Anda Salah, Coba Lagi");
	}
		
}