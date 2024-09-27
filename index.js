function showSection(sectionId) {
    var contents = document.querySelectorAll(".content");
    contents.forEach(function (content) {
        content.classList.remove("active");
    });

    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    showSection("html1");
});