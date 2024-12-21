var d = new Date();
document.getElementById("day").innerHTML = d.getDate();

var month = new Array();
month[0] = "Januari";
month[1] = "Februari";
month[2] = "Maret";
month[3] = "April";
month[4] = "Mei";
month[5] = "Juni";
month[6] = "Juli";
month[7] = "Agustus";
month[8] = "September";
month[9] = "Oktober";
month[10] = "November";
month[11] = "Desember";
document.getElementById("month").innerHTML = month[d.getMonth()];
