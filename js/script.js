// function replaceNama() {
//     let nama = prompt("Halo, Masukkan Nama Anda !", "");
//     document.getElementById("nama").innerHTML = nama;
// }

// document.getElementById('tombol').addEventListener("click", function() {
//     replaceNama()
// })

function validateForm() {
    const namaLengkap  = document.forms["message-form"]["namaLengkap"].value;
    const tglLahir  = document.forms["message-form"]["tglLahir"].value;
    const jenis  = document.forms["message-form"]["jenis"].value;
    const pesan  = document.forms["message-form"]["pesan"].value;

    if (namaLengkap == "" || tglLahir == "" || jenis == "" || pesan == "") {
        alert("Form Harus Dipenuhi");
        return false;
    }

    dataPengirim(namaLengkap, tglLahir, jenis, pesan);

    return false;
}

function dataPengirim(namaLengkap, tglLahir, jenis, pesan) {
    document.getElementById("namaHeader").innerHTML = namaLengkap;
    document.getElementById("namaPengirim").innerHTML = namaLengkap;
    document.getElementById("tglLahirPengirim").innerHTML = tglLahir;
    document.getElementById("jenisPengirim").innerHTML = jenis;
    document.getElementById("pesanPengirim").innerHTML = pesan;
}