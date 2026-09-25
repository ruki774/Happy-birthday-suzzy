// ================================
// TYPING EFFECT
// ================================

const typingText = document.getElementById("typing");

const message = "Happy Birthday, Beautiful ❤️";

let index = 0;

function typeText() {
    if (index < message.length) {
        typingText.textContent += message.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();


// ================================
// PHOTO SLIDESHOW
// ================================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide() {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
}

if (slides.length > 0) {
    setInterval(showSlide, 4000);
}


// ================================
// MUSIC BUTTON
// ================================

const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

if (musicBtn && birthdayMusic) {

    musicBtn.addEventListener("click", () => {

        if (birthdayMusic.paused) {

            birthdayMusic.play();

            musicBtn.textContent = "⏸ Pause Song";

        } else {

            birthdayMusic.pause();

            musicBtn.textContent = "▶ Play Your Song 🎶";

        }

    });

}

// ================================
// SURPRISE GIFT BOX
// ================================

const surpriseBox = document.getElementById("surpriseBox");
const giftBox = document.querySelector(".gift-box");

if (surpriseBox && giftBox) {

    giftBox.addEventListener("click", () => {

        const giftLid = document.querySelector(".gift-lid");
        const giftBow = document.querySelector(".gift-bow");

        // Open the gift
        giftLid.style.transform =
            "translateY(-75px) rotate(-8deg)";

        giftLid.style.top = "0";

        giftBow.style.transform =
            "translateX(-50%) translateY(-70px) rotate(10deg)";


        // ✨ Create magical sparkles
        const sparkleSymbols = ["✨", "💖", "🌸", "⭐", "💗"];

        for (let i = 0; i < 35; i++) {

            const sparkle = document.createElement("div");

            sparkle.className = "gift-sparkle";

            sparkle.textContent =
                sparkleSymbols[
                    Math.floor(Math.random() * sparkleSymbols.length)
                ];

            sparkle.style.left = "50%";
            sparkle.style.top = "45%";

            sparkle.style.setProperty(
                "--x",
                (Math.random() * 500 - 250) + "px"
            );

            sparkle.style.setProperty(
                "--y",
                (Math.random() * 500 - 250) + "px"
            );

            document.body.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 1200);
        }


        // 🔔 Magical glitter sound

try {

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    const audioContext = new AudioContext();

    function sparkleSound(frequency, startTime, volume) {

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "triangle";

        oscillator.frequency.setValueAtTime(
            frequency,
            startTime
        );

        gain.gain.setValueAtTime(
            0.001,
            startTime
        );

        gain.gain.exponentialRampToValueAtTime(
            volume,
            startTime + 0.02
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            startTime + 0.45
        );

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + 0.5);
    }


    const now = audioContext.currentTime;

    // ✨ Tiny glittering sounds
    sparkleSound(1318.51, now, 0.12);
    sparkleSound(1567.98, now + 0.12, 0.10);
    sparkleSound(1975.53, now + 0.24, 0.08);
    sparkleSound(2349.32, now + 0.36, 0.06);

} catch (error) {

    console.log("Glitter sound could not play.");

}


        // 💗 Reveal birthday website
        setTimeout(() => {

            surpriseBox.classList.add("hide-surprise");
        }, 1200);

    });

}



// ================================
// CONFETTI BUTTON
// ================================

const confettiBtn = document.getElementById("confettiBtn");

if (confettiBtn) {

    confettiBtn.addEventListener("click", () => {

        for (let i = 0; i < 60; i++) {

            const confetti = document.createElement("div");

            confetti.innerHTML = "🎉";

            confetti.style.position = "fixed";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = "-20px";
            confetti.style.fontSize = Math.random() * 20 + 15 + "px";
            confetti.style.zIndex = "9999";
            confetti.style.pointerEvents = "none";

            document.body.appendChild(confetti);

            const fallDuration = Math.random() * 3 + 2;

            confetti.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform:
                            "translateY(110vh) rotate(720deg)",
                        opacity: 0
                    }
                ],
                {
                    duration: fallDuration * 1000,
                    easing: "ease-out"
                }
            );

            setTimeout(() => {
                confetti.remove();
            }, fallDuration * 1000);
        }

    });

}

// ================================
// MONEY SURPRISE
// ================================

const surpriseBtn = document.getElementById("surpriseBtn");
const moneySurprise = document.getElementById("moneySurprise");
const closeMoneySurprise = document.getElementById("closeMoneySurprise");

if (surpriseBtn && moneySurprise) {

    surpriseBtn.addEventListener("click", () => {

        moneySurprise.classList.add("show");

    });

}

if (closeMoneySurprise && moneySurprise) {

    closeMoneySurprise.addEventListener("click", () => {

        moneySurprise.classList.remove("show");

    });

}// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll("section");

const revealOnScroll = () => {

    revealElements.forEach((section) => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }

    });

};

revealElements.forEach((section) => {
    section.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// LOVE CARDS ANIMATION
// ================================

const loveCards = document.querySelectorAll(".card");

const showLoveCards = () => {

    loveCards.forEach((card, index) => {

        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 80) {
            setTimeout(() => {
                card.classList.add("show");
            }, index * 100);
        }

    });

};

window.addEventListener("scroll", showLoveCards);

showLoveCards();                                                                                                                                                                                                                                                                                                                                                                                    