const navbar = document.querySelector(".navigation__list");
const navbarToggle = document.querySelector(".navigation__toggle");

navbarToggle.addEventListener("click", () => {
    const visibility = navbar.getAttribute("data-visible");

    if(visibility == "false"){
        navbar.setAttribute("data-visible", true);
        navbarToggle.setAttribute("aria-expanded", true);
    }
    else if(visibility == "true"){
        navbar.setAttribute("data-visible", false);
        navbarToggle.setAttribute("aria-expanded", false);
    }
});