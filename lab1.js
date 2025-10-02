document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const searchButton = document.getElementById("searchButton");
    const butterflyItems = document.querySelectorAll(".butterfly");

    searchButton.addEventListener("click", () => {
        const query = searchBox.value.trim().toLowerCase();

        if (query === "") {
            alert("Please enter a butterfly name.");
            return;
        }

        let found = false;
        butterflyItems.forEach(item => {
            const name = item.querySelector("h4").textContent.toLowerCase();
            if (name.includes(query)) {
                item.style.display = "block";
                found = true;
            } else {
                item.style.display = "none";
            }
        });

        if (!found) {
            alert("No butterflies found.");
        }
    });
});