const tabs = document.querySelectorAll(".tab-button");
const content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")});
            tab.classList.add("active");

    content.forEach(cont => {
        cont.classList.remove("active")});
    content[index].classList.add("active");
    })
})