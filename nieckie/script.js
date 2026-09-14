
// ==============================
// PAGE NAVIGATION
// ==============================

const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");

function showPage(pageName) {

    pages.forEach(function(page) {

        page.classList.remove("active-page");

    });


    const selectedPage =
        document.getElementById(pageName);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + pageName
        ) {

            link.classList.add("active");

        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==============================
// WHEN CLICKING NAVIGATION
// ==============================

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pageName =
            link.getAttribute("href").substring(1);

        showPage(pageName);

        navMenu.classList.remove("open");

    });

});


// ==============================
// BUTTONS THAT USE #ABOUT,
// #SKILLS, #CONTACT
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target =
            link.getAttribute("href").substring(1);

        const targetPage =
            document.getElementById(target);

        if (targetPage) {

            event.preventDefault();

            showPage(target);

            navMenu.classList.remove("open");

        }

    });

});


// ==============================
// MOBILE MENU
// ==============================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("nav");


menuBtn.addEventListener("click", function() {

    navMenu.classList.toggle("open");

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received. ♡";

    contactForm.reset();

});


// ==============================
// OPEN PAGE BASED ON URL
// ==============================

function loadPage() {

    let pageName =
        window.location.hash.substring(1);

    if (
        !pageName ||
        !document.getElementById(pageName)
    ) {

        pageName = "home";

    }

    showPage(pageName);

}


window.addEventListener("load", loadPage);


// ==============================
// BROWSER BACK/FORWARD
// ==============================

window.addEventListener("hashchange", function() {

    loadPage();

});