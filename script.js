let passwordInput = document.getElementById('password'); // INPUT PASSWORD //
let icon = document.getElementById('input-icon'); // INPUT ICON //

function togglePassword() { 
  if (passwordInput.type === 'password') {  // INPUT PASSWORD //
   passwordInput.type = 'text'; // INPUT TEKS //
   icon.classList.add("ri-eye-line");  // MENAMBAHKAN RI-EYE-LINE //
   icon.classList.remove("ri-eye-off-line");  // MENGHAPUS RI-EYE-LINE //

  } else {
   passwordInput.type = 'password'; // INPUT PASSWORD //
   icon.classList.add("ri-eye-off-line"); // MENAMBAHKAN RI-EYE-LINE //
   icon.classList.remove("ri-eye-line");  // MENGHAPUS RI-EYE-LINE //
  } 
} 

icon.addEventListener('click', togglePassword); // MENGIKUTI PERINTAH PADA SAAT DITEKAN //

Swal.fire({
title: " Elbert Nathaniel Lim 11/11 ", // MENAMPILKAN JUDUL //
text: " Majestas, Dignity ", // MENAMPILKAN TEKS //
imageUrl: " ELBERT.jpg ", // MENAMPILKAN GAMBAR //
imageWidth: 350, // MELEBARKAN GAMBAR//
imageHeight: 400, // MENINGGIKAN GAMBAR//
confirmButtonText: "Tutup", // MENAMPILKAN KONFIRMASI BUTTON //
showCloseButton: true,  // MENAMPILKAN CLOSE BUTTON //
});

