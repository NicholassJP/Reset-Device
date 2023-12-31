$("#resetPIN").on("click", function (e) {
    Swal.fire({
        icon: "success",
        title: "Horee..<br>Reset Device ID Berhasil!!",
        color: "#003F57",
        text: "Silahkan login kembali Aplikasi Human Capital diperangkat Anda",
        confirmButtonColor: "#2254A6",
    }).then(function() {
        registerDevice();
    });
});

function registerDevice() {
    if (
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i)
    ) {
        window.open(
            "https://apps.apple.com/id/app/human-capital-application/id6449690655?l=id",
            "_blank"
        );
    } else if (navigator.userAgent.match(/Android/i)) {
        window.open(
            "https://play.google.com/store/apps/details?id=com.alfamart.humancapitalapp&hl=en_SG&gl=US",
            "_blank"
        );
    } else {
    }
}
