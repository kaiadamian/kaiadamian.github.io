// function toggleLayout() {
//     const mainLg = document.getElementById("main-lg");
//     const mainSm = document.getElementById("main-sm");

//     if (window.innerWidth <= 768) {
//         if (mainLg) mainLg.style.display = "none";
//         if (mainSm) mainSm.style.display = "block";
//     } else {
//         if (mainLg) mainLg.style.display = "block";
//         if (mainSm) mainSm.style.display = "none";
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     toggleLayout();
//     window.addEventListener("resize", toggleLayout);
// });

function toggleLayout() {
    const mainLgElements = document.querySelectorAll(".main-lg");
    const mainSmElements = document.querySelectorAll(".main-sm");

    if (window.innerWidth <= 768) {
        mainLgElements.forEach(el => el.style.display = "none");
        mainSmElements.forEach(el => el.style.display = "block");
    } else {
        mainLgElements.forEach(el => el.style.display = "block");
        mainSmElements.forEach(el => el.style.display = "none");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    toggleLayout();
    window.addEventListener("resize", toggleLayout);
});
