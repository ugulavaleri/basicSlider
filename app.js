const imageDiv = document.querySelectorAll(".imageDiv");
const dot = document.querySelectorAll(".dot");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const checkBox = document.getElementById("checkBox");

var index = 0;

prevBtn.addEventListener("click", () => {
    index -= 1;
    moveSlide();
});
nextBtn.addEventListener("click", () => {
    index += 1;
    moveSlide();
});

const moveSlide = () => {
    for (let i = 0; i < imageDiv.length; i++) {
        imageDiv[i].style.display = "none";
        dot[i].classList.remove("active");
    }
    if (index > imageDiv.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = imageDiv.length - 1;
    }
    imageDiv[index].style.display = "inline-block";
    dot[index].classList.add("active");
};

var autoplayCount = 1;
var gugu;
const autoPlay = () => {
    gugu = setInterval(() => {
        imageDiv[autoplayCount].style.display = "inline-block";
        dot[autoplayCount].classList.add("active");
        imageDiv.forEach((element) => {
            if (element != imageDiv[autoplayCount]) {
                element.style.display = "none";
            }
        });
        dot.forEach((e, ind) => {
            if (
                dot[ind] != dot[autoplayCount] &&
                e.classList.contains("active")
            ) {
                e.classList.remove("active");
            }
        });
        autoplayCount++;
        ++index;
        if (autoplayCount > imageDiv.length - 1) {
            autoplayCount = 0;
            index = 1;
        }
        if (autoplayCount < 0) {
            autoplayCount = imageDiv.length - 1;
            index = imageDiv.length - 1;
        }
    }, 2000);
};

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        autoPlay();
    } else {
        clearInterval(gugu);
        console.log("lri");
    }
});

/// another slide

const BannerBox = document.querySelectorAll(".BannerBox");
const spanBullet = document.querySelectorAll(".spanBullet");
var no = 0;
let interval;

const clone = [...BannerBox];

setInterval(() => {
    no++;
    BannerBox.forEach((e, ind) => {
        if (no > BannerBox.length - 1) {
            no = 0;
        }
        if (no < 0) {
            no = BannerBox.length;
        }
        e.style.transform = `translateX(-${no * 100}%)`;

        // if (BannerBox[no] != BannerBox[ind]) {
        //     e.removeAttribute("style");
        // }
    });
    spanBullet.forEach((e, ind) => {
        e.classList.add("backgroundBlack");
        if (e != spanBullet[no]) {
            e.classList.remove("backgroundBlack");
        }
    });
}, 2000);
