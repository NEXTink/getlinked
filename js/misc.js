document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");


    const menuBtns = document.querySelectorAll(".menu-nav");
    const menu = document.getElementById('side-menu');

    accordionItems.forEach((item) => {
        const title = item.querySelector(".accordion-title");
        const content = item.querySelector(".accordion-content");


        title.addEventListener("click", () => {

            if (content.classList.contains("hidden")) {
                content.classList.remove('hidden');

            } else {
                content.classList.add('hidden');
            }
        });
    });




    menuBtns.forEach((item) => {
        item.addEventListener('click', () => {
            if (menu.classList.contains("hidden")) {
                menu.classList.remove('hidden');

            } else {
                menu.classList.add('hidden');
            }
        })
    })
});

