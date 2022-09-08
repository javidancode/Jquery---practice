let headers = document.querySelectorAll(".tab-menu .tab-header div");
let contents = document.querySelectorAll(".tab-menu .tab-body div");
headers.forEach(header => {
    header.addEventListener("click", function () {
        let activeElem = document.querySelector(".active");
        activeElem.classList.remove("active");
        this.classList.add("active");
        contents.forEach(content => {
            if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
                content.classList.remove("d-none")
            } else {
                content.classList.add("d-none")
            }
        });
    })
});