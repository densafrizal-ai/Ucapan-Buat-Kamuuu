/* =========================================================
   BIRTHDAY WEBSITE V5.2
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const loader = document.getElementById("loader");

    const pages = [
        document.getElementById("page1"),
        document.getElementById("page2"),
        document.getElementById("page3"),
        document.getElementById("page4"),
        document.getElementById("page5"),
        document.getElementById("page6"),
        document.getElementById("page7"),
        document.getElementById("page8")
    ];

    const music = document.getElementById("music");
    const musicButton = document.getElementById("musicButton");

    const startButton = document.getElementById("startButton");
    const toEnvelope = document.getElementById("toEnvelope");

    const envelope = document.getElementById("envelope");
    const envelopeHint = document.getElementById("envelopeHint");

    const toPhotos = document.getElementById("toPhotos");
    const toReasons = document.getElementById("toReasons");

    const secretButton =
        document.getElementById("secretButton");

    const birthdayButton =
        document.getElementById("birthdayButton");

    const restartButton =
        document.getElementById("restartButton");

    const hearts =
        document.getElementById("hearts");

    const stars =
        document.getElementById("stars");

    const confetti =
        document.getElementById("confetti");


    /* =====================================================
       STATE
    ===================================================== */

    let currentPage = 0;
    let musicPlaying = false;
    let envelopeOpened = false;
    let photoIndex = 0;


    /* =====================================================
       LOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hide");
            }

        }, 1600);

    });


    /* =====================================================
       PAGE NAVIGATION
    ===================================================== */

    function goToPage(index) {

        if (
            index < 0 ||
            index >= pages.length
        ) {
            return;
        }

        const current = pages[currentPage];
        const next = pages[index];

        if (!current || !next) return;

        if (current === next) return;

        /*
         * Hapus active dari halaman lama
         */
        current.classList.remove("active");

        /*
         * Aktifkan halaman baru
         */
        next.classList.add("active");

        /*
         * Update halaman sekarang
         */
        currentPage = index;

        /*
         * Scroll instan supaya tidak terasa delay
         */
        window.scrollTo(0, 0);

    }


    /* =====================================================
       START
    ===================================================== */

    startButton.addEventListener("click", () => {

        startMusic();

        goToPage(1);

    });


    /* =====================================================
       INTRO → ENVELOPE
    ===================================================== */

    toEnvelope.addEventListener("click", () => {

        goToPage(2);

    });


    /* =====================================================
       ENVELOPE
    ===================================================== */

    function openEnvelope() {

        if (envelopeOpened) return;

        envelopeOpened = true;

        envelope.classList.add("open");

        envelopeHint.textContent =
            "SURAT TERBUKA ❤️";

        createHeartBurst(18);

        /*
         * Tunggu animasi amplop selesai
         */
        setTimeout(() => {

            goToPage(3);

        }, 850);

    }


    /*
     * pointerup bekerja untuk:
     * - HP
     * - tablet
     * - mouse
     * - touchscreen
     */

    envelope.addEventListener(
        "pointerup",
        (event) => {

            event.preventDefault();

            openEnvelope();

        }
    );


    /*
     * Keyboard accessibility
     */

    envelope.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openEnvelope();

            }

        }
    );


    /* =====================================================
       LETTER → PHOTOS
    ===================================================== */

    toPhotos.addEventListener("click", () => {

        goToPage(4);

    });


    /* =====================================================
       PHOTO DATA
    ===================================================== */

    const photos = [

    {
        src: "images/foto1.jpg",

        title: "Awal dari sebuah cerita",

        description:
            "Dari sekian banyak hal yang terjadi, ada beberapa momen yang rasanya pantas untuk disimpan lebih lama."
    },

    {
        src: "images/foto2.jpg",

        title: "Senyum yang sederhana",

        description:
            "Mungkin buat lu ini cuma senyum biasa. Tapi entah kenapa, ada sesuatu yang selalu terasa berbeda ketika melihatnya."
    },

    {
        src: "images/foto3.jpg",

        title: "Momen kecil",

        description:
            "Nggak semua kebahagiaan harus datang dari sesuatu yang besar. Kadang, satu momen kecil aja sudah cukup untuk menjadi kenangan."
    },

    {
        src: "images/foto4.jpg",

        title: "Tentang kamu",

        description:
            "Ada banyak orang yang kita temui dalam hidup. Tapi hanya beberapa yang berhasil meninggalkan cerita yang sulit dilupakan."
    },

    {
        src: "images/foto5.jpg",

        title: "Yang ingin disimpan",

        description:
            "Kalau suatu hari nanti waktu membawa kita ke tempat yang berbeda, semoga momen-momen seperti ini tetap menjadi bagian yang indah untuk dikenang."
    },

    {
        src: "images/foto6.jpg",

        title: "Belum selesai",

        description:
            "Dan mungkin ini bukan akhir dari ceritanya. Masih ada hari-hari baru, tawa baru, dan kenangan baru yang menunggu untuk dibuat."
    }

    ];


    /* =====================================================
       PHOTO ELEMENTS
    ===================================================== */

    const mainPhoto =
        document.getElementById("mainPhoto");

    const photoCounter =
        document.getElementById("photoCounter");

    const photoTitle =
        document.getElementById("photoTitle");

    const photoDescription =
    document.getElementById("photoDescription");

    const photoViewer =
        document.getElementById("photoViewer");

    const zoomButton =
        document.getElementById("zoomButton");

    const thumbnails =
        document.querySelectorAll(".photo-thumb");


    /* =====================================================
       SHOW PHOTO
    ===================================================== */

    function showPhoto(index) {

        if (
            index < 0 ||
            index >= photos.length
        ) {
            return;
        }

        photoIndex = index;

        const photo = photos[index];

        /*
         * Fade sedikit
         */
        mainPhoto.style.opacity = "0";

        setTimeout(() => {

            mainPhoto.src = photo.src;

            mainPhoto.alt = photo.title;

            photoTitle.textContent =
                photo.title;

            photoDescription.textContent =
                 photo.description;

            photoCounter.textContent =
                String(index + 1).padStart(2, "0") +
                " / " +
                String(photos.length).padStart(2, "0");

            mainPhoto.style.opacity = "1";

        }, 120);


        /*
         * Active thumbnail
         */

        thumbnails.forEach(
            (thumb, i) => {

                thumb.classList.toggle(
                    "active",
                    i === index
                );

            }
        );

    }


    /* =====================================================
       THUMBNAILS
    ===================================================== */

    thumbnails.forEach(
        (thumbnail, index) => {

            thumbnail.addEventListener(
                "click",
                () => {

                    showPhoto(index);

                }
            );

        }
    );


    /* =====================================================
       PHOTO LIGHTBOX
    ===================================================== */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxCounter =
        document.getElementById("lightboxCounter");

    const lightboxTitle =
        document.getElementById("lightboxTitle");

    const lightboxDescription =
    document.getElementById("lightboxDescription");

    const closeLightbox =
        document.getElementById("closeLightbox");

    const prevPhoto =
        document.getElementById("prevPhoto");

    const nextPhoto =
        document.getElementById("nextPhoto");


    function openLightbox(index) {

        photoIndex = index;

        const photo =
            photos[index];

        lightboxImage.src =
            photo.src;

        lightboxImage.alt =
            photo.title;

        lightboxCounter.textContent =
            String(index + 1).padStart(2, "0") +
            " / " +
            String(photos.length).padStart(2, "0");

        lightboxTitle.textContent =
            photo.title;

        lightboxDescription.textContent =
             photo.description;

        lightbox.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }


    function closeLightboxFunction() {

        lightbox.classList.remove("show");

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       OPEN PHOTO
    ===================================================== */

    photoViewer.addEventListener(
        "click",
        () => {

            openLightbox(photoIndex);

        }
    );


    zoomButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            openLightbox(photoIndex);

        }
    );


    /* =====================================================
       CLOSE LIGHTBOX
    ===================================================== */

    closeLightbox.addEventListener(
        "click",
        closeLightboxFunction
    );


    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeLightboxFunction();

            }

        }
    );


    /* =====================================================
       PREVIOUS PHOTO
    ===================================================== */

    prevPhoto.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            let index =
                photoIndex - 1;

            if (index < 0) {
                index =
                    photos.length - 1;
            }

            showPhoto(index);

            openLightbox(index);

        }
    );


    /* =====================================================
       NEXT PHOTO
    ===================================================== */

    nextPhoto.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            let index =
                photoIndex + 1;

            if (
                index >= photos.length
            ) {
                index = 0;
            }

            showPhoto(index);

            openLightbox(index);

        }
    );


    /* =====================================================
       KEYBOARD PHOTO
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !lightbox.classList.contains("show")
            ) {
                return;
            }

            if (event.key === "Escape") {

                closeLightboxFunction();

            }

            if (event.key === "ArrowLeft") {

                prevPhoto.click();

            }

            if (event.key === "ArrowRight") {

                nextPhoto.click();

            }

        }
    );


    /* =====================================================
       MOBILE SWIPE
    ===================================================== */

    let touchStartX = 0;

    lightbox.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    lightbox.addEventListener(
        "touchend",
        (event) => {

            const touchEndX =
                event.changedTouches[0].screenX;

            const difference =
                touchStartX - touchEndX;

            if (
                Math.abs(difference) < 50
            ) {
                return;
            }

            if (difference > 0) {

                nextPhoto.click();

            } else {

                prevPhoto.click();

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       PHOTOS → REASONS
    ===================================================== */

    toReasons.addEventListener(
        "click",
        () => {

            goToPage(5);

        }
    );


    /* =====================================================
       SECRET BUTTON
    ===================================================== */

    secretButton.addEventListener(
        "click",
        () => {

            secretButton.innerHTML = `
                <span>
                    Gue bilang jangan klik 😭❤️
                </span>
                <small>
                    tapi gapapa...
                </small>
            `;

            createHeartBurst(25);

            setTimeout(() => {

                goToPage(6);

            }, 900);

        }
    );


    /* =====================================================
       BIRTHDAY BUTTON
    ===================================================== */

    birthdayButton.addEventListener(
        "click",
        () => {

            goToPage(7);

            setTimeout(() => {

                createConfetti();

                createHeartBurst(70);

            }, 200);

        }
    );


    /* =====================================================
       RESTART
    ===================================================== */

    restartButton.addEventListener(
        "click",
        () => {

            /*
             * Reset semuanya
             */

            envelopeOpened = false;

            envelope.classList.remove("open");

            envelopeHint.textContent =
                "TAP THE ENVELOPE";

            showPhoto(0);

            secretButton.innerHTML = `
                <span>
                    Jangan klik ini.
                </span>

                <small>
                    seriously...
                </small>
            `;

            goToPage(0);

            /*
             * Kembali ke atas
             */

            window.scrollTo(
                0,
                0
            );

        }
    );


    /* =====================================================
       MUSIC
    ===================================================== */

    async function startMusic() {

        if (musicPlaying) return;

        try {

            await music.play();

            musicPlaying = true;

            musicButton.classList.add(
                "playing"
            );

            musicButton.textContent = "♫";

        } catch (error) {

            console.log(
                "Browser menunggu interaksi user."
            );

        }

    }


    musicButton.addEventListener(
        "click",
        async () => {

            if (music.paused) {

                try {

                    await music.play();

                    musicPlaying = true;

                    musicButton.classList.add(
                        "playing"
                    );

                } catch (error) {

                    console.log(error);

                }

            } else {

                music.pause();

                musicPlaying = false;

                musicButton.classList.remove(
                    "playing"
                );

            }

        }
    );


    /* =====================================================
       CREATE STARS
    ===================================================== */

    function createStars() {

        const amount =
            window.innerWidth < 600
                ? 60
                : 110;

        for (let i = 0; i < amount; i++) {

            const star =
                document.createElement("span");

            star.className = "star";

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            star.style.animationDelay =
                Math.random() * 3 + "s";

            star.style.animationDuration =
                2 + Math.random() * 4 + "s";

            const size =
                1 + Math.random() * 2;

            star.style.width =
                size + "px";

            star.style.height =
                size + "px";

            stars.appendChild(star);

        }

    }

    createStars();


    /* =====================================================
       CREATE FLOATING HEART
    ===================================================== */

    function createFloatingHeart() {

        const heart =
            document.createElement("span");

        heart.className = "heart";

        heart.textContent =
            Math.random() > .5
                ? "♥"
                : "♡";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            10 + Math.random() * 14 + "px";

        heart.style.animationDuration =
            6 + Math.random() * 5 + "s";

        hearts.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 12000);

    }


    /*
     * Jangan terlalu banyak supaya HP tetap ringan
     */

    setInterval(
        createFloatingHeart,
        1800
    );


    /* =====================================================
       HEART BURST
    ===================================================== */

    function createHeartBurst(amount = 20) {

        for (let i = 0; i < amount; i++) {

            const heart =
                document.createElement("span");

            heart.className = "heart";

            heart.textContent =
                Math.random() > .3
                    ? "♥"
                    : "♡";

            heart.style.left =
                50 +
                (Math.random() * 40 - 20) +
                "%";

            heart.style.bottom =
                35 +
                Math.random() * 20 +
                "%";

            heart.style.fontSize =
                10 +
                Math.random() * 20 +
                "px";

            heart.style.animationDuration =
                3 +
                Math.random() * 3 +
                "s";

            heart.style.animationDelay =
                Math.random() * .5 +
                "s";

            hearts.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 8000);

        }

    }


    /* =====================================================
       CONFETTI
    ===================================================== */

    function createConfetti() {

        confetti.innerHTML = "";

        const amount =
            window.innerWidth < 600
                ? 80
                : 140;

        for (let i = 0; i < amount; i++) {

            const piece =
                document.createElement("span");

            piece.className =
                "confetti-piece";

            piece.style.left =
                Math.random() * 100 + "%";

            piece.style.animationDuration =
                3 +
                Math.random() * 4 +
                "s";

            piece.style.animationDelay =
                Math.random() * 2 +
                "s";

            const width =
                4 +
                Math.random() * 6;

            const height =
                7 +
                Math.random() * 10;

            piece.style.width =
                width + "px";

            piece.style.height =
                height + "px";

            piece.style.background =
                [
                    "#ff6f9d",
                    "#ffc0d4",
                    "#e8c58b",
                    "#ffffff",
                    "#b83b68"
                ][
                    Math.floor(
                        Math.random() * 5
                    )
                ];

            confetti.appendChild(piece);

        }

    }


    /* =====================================================
       IMAGE ERROR CHECK
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach((image) => {

            image.addEventListener(
                "error",
                () => {

                    console.warn(
                        "Gagal menemukan gambar:",
                        image.src
                    );

                }
            );

        });


    /* =====================================================
       PREVENT IMAGE DRAG
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach((image) => {

            image.addEventListener(
                "dragstart",
                (event) => {

                    event.preventDefault();

                }
            );

        });


    /* =====================================================
       INITIALIZE
    ===================================================== */

    pages.forEach((page, index) => {

        if (index === 0) {

            page.classList.add("active");

        } else {

            page.classList.remove("active");

        }

    });

    showPhoto(0);

});