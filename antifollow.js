document.addEventListener('DOMContentLoaded', function () {
    // Menangani peristiwa klik pada tombol "Submit"
    var submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function (event) {
        // Mencegah tindakan default dari tombol "Submit"
        event.preventDefault();
        
        // Lakukan pengiriman formulir atau tindakan lain di sini
        // Anda bisa menambahkan kode pengiriman AJAX atau sesuai dengan kebutuhan Anda
        // Setelah selesai, Anda bisa menampilkan pesan sukses atau kesalahan
        // di dalam elemen <div id="form-messages"> seperti yang telah Anda lakukan sebelumnya
    });
});
