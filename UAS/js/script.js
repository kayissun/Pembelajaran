// script untuk login
function loginBerhasil() {
  // memanggil fungsi pada button
  Swal.fire({
    // query untukmenampilkan pop up
    title: "Login Berhasil!", // judul yang akan muncul
    text: "Selamat datang di dashboard.", // kata pembantu
    icon: "success", // menambahkan ikon succes/centang/berhasil
    confirmButtonText: "OK", // menambahkan buuton OK, ketika diklik  makan akan pindah ke halaman lain
    confirmButtonColor: "#3085d6", // warna button
  }).then((result) => {
    // syntax then untuk menambahkan hasil ketika di klik
    if (result.isConfirmed) {
      // jika mengklik OK
      window.location.href = "dashboard.html"; // maka akan ditujukan ke halaman Panel Admin
    }
  });
}

// script untuk register
function pembuatanakunBerhasil() {
  // memanggil fungsi pada button
  Swal.fire({
    // query untukmenampilkan pop up
    title: "Pembuatan Akun Berhasil!", // judul yang akan muncul
    text: "Silakan melakukan login ulang.", // kata pembantu
    icon: "success", // menambahkan ikon succes/centang/berhasil
    confirmButtonText: "OK", // menambahkan buuton OK, ketika diklik  makan akan pindah ke halaman lain
    confirmButtonColor: "#3085d6", // warna button
  }).then((result) => {
    // syntax then untuk menambahkan hasil ketika di klik
    if (result.isConfirmed) {
      // jika mengklik OK
      window.location.href = "login.html"; // maka akan diarahkan kembali ke halaman login
    }
  });
}

// script untuk keluar
function keluar() {
  // memanggil fungsi pada button
  Swal.fire({
    // query untukmenampilkan pop up
    title: "Apakah Anda Yakin?", // judul yang akan muncul
    text: "Kamu akan dialihkan ke halaman Beranda.", // kata pembantu
    icon: "warning", // menambahkan ikon warning/tanda seru/peringatan
    showCancelButton: "true", // menampilkan 2 pilihan
    confirmButtonText: "Ya, Keluar", // menambahkan buton OK, ketika diklik  maka data akan terhapus
    cancelButtonText: "Batal", // menambahkan buuton Batal, ketika di klik maka data tidak akan dihapus
    confirmButtonColor: "#3085d6", // warna button confirm
  }).then((result) => {
    // syntax then untuk menambahkan hasil ketika di klik
    if (result.isConfirmed) {
      // jika mengklik OK
      window.location.href = "landing.html"; // maka akan diarahkan kembali ke halaman Beranda
    }
  });
}

// script untuk input
function simpan() {
  // memanggil fungsi pada button
  Swal.fire({
    // query untukmenampilkan pop up
    title: "Data Berhasil di Simpan!", // judul yang akan muncul
    text: "Silakan cek kembali.", // kata pembantu
    icon: "success", // menambahkan ikon succes/centang/berhasil
    confirmButtonText: "OK", // menambahkan buuton OK, ketika diklik  makan akan pindah ke halaman lain
    confirmButtonColor: "#3085d6", // warna button
  }).then((result) => {
    // syntax then untuk menambahkan hasil ketika di klik
    if (result.isConfirmed) {
      // jika mengklik OK
      window.location.href = "data.html"; // maka akan diarahkan kembali ke halaman data
    }
  });
}

// script untuk hapus
function hapus() {
  // memanggil fungsi pada button
  Swal.fire({
    // query untukmenampilkan pop up
    title: "Apakah Anda Yakin?", // judul yang akan muncul
    text: "Perintah tersebut akan menghapus permanen.", // kata pembantu
    icon: "warning", // menambahkan ikon warning/tanda seru/peringatan
    showCancelButton: "true", // menampilkan 2 pilihan
    confirmButtonText: "Ya, Hapus", // menambahkan buton OK, ketika diklik  maka data akan terhapus
    cancelButtonText: "Batal", // menambahkan buuton Batal, ketika di klik maka data tidak akan dihapus
    confirmButtonColor: "#3085d6", // warna button confirm
  }).then((result) => {
    // syntax then untuk menambahkan hasil ketika di klik
    if (result.isConfirmed) {
      // jika mengklik OK
      window.location.href = "data.html"; // maka akan diarahkan kembali ke halaman data
    }
  });
}

// script untuk semua edit
function simpanPerubahan() {
  // memanggil fungsi pada button
  Swal.fire({
    // query untukmenampilkan pop up
    title: "Data Berhasil di Ubah!", // judul yang akan muncul
    text: "Silakan cek kembali.", // kata pembantu
    icon: "success", // menambahkan ikon succes/centang/berhasil
    confirmButtonText: "OK", // menambahkan buuton OK, ketika diklik  makan akan pindah ke halaman lain
    confirmButtonColor: "#3085d6", // warna button
  }).then((result) => {
    // syntax then untuk menambahkan hasil ketika di klik
    if (result.isConfirmed) {
      // jika mengklik OK
      window.location.href = "data.html"; // maka akan diarahkan kembali ke halaman data
    }
  });
}
