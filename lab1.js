document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const searchBtn = document.getElementById("searchBtn");
    const dynamicContainer = document.getElementById("dynamicResultsContainer");
    const checkboxes = document.querySelectorAll(".type-checkbox");
    const validationMsg = document.getElementById("validationMsg");

    const butterflies = [
        {
            common: "Monarch",
            scientific: "Danaus plexippus",
            description: "3 1/2-4\" (89-102 mm). Very large, with FW long and drawn out. Above, bright, burnt-orange with black veins and black margins sprinkled with white dots; FW tip broadly black interrupted by larger white and orange spots. Below, paler, duskier orange. 1 black spot appears between HW cell and margin on male above and below. Female darker with black veins smudged.",
            images: ["images/0010001.jpg", "images/0010002.jpg", "images/0010004.jpg", "images/0010005.jpg"],
            link: "https://en.wikipedia.org/wiki/Monarch_butterfly"
        },
        {
            common: "Zebra Longwing",
            scientific: "Heliconius charitonius",
            description: "3-3 3/8\" (76-78 mm). Wings long and narrow. Jet-black above, banded with lemon-yellow (sometimes pale yellow). Beneath similar; bases of wings have crimson spots.",
            images: ["images/0020003.jpg", "images/0020004.jpg", "images/0020008.jpg", "images/0020015.jpg"],
            link: "https://en.wikipedia.org/wiki/Heliconius_charithonia"
        },
        {
            common: "Crimson-patched Longwing",
            scientific: "Heliconius erato",
            description: "3-3 3/8\" (76-86 mm). Wings long, narrow, and rounded. Black above, crossed on FW by broad crimson patch, and on HW by narrow yellow line. Below, similar but red is pinkish and HW has less yellow.",
            images: ["images/0030001.jpg", "images/0030002.jpg", "images/0030003.jpg", "images/0030004.jpg"],
            link: "https://en.wikipedia.org/wiki/Heliconius_erato"
        },
        {
            common: "Common Buckeye",
            scientific: "Junonia coenia",
            description: "2-2 1/2\" (51-63 mm). Wings scalloped and rounded except at drawn-out FW tip. Highly variable. Above, tawny-brown to dark brown; 2 orange bars in FW cell, orange submarginal band on HW, white band diagonally crossing FW. 2 bright eyespots on each wing above",
            images: ["images/0040001.jpg", "images/0040002.jpg", "images/0040003.jpg", "images/0040009.jpg"],
            link: "https://en.wikipedia.org/wiki/Junonia_coenia"
        },
        {
            common: "American Copper",
            scientific: "Lycaena phlaeas",
            description: "7/8-1 1/8\" (22-28 mm). Above, FW bright copper or brass-colored with dark spots and margin; HW dark brown with copper margin. Undersides mostly grayish with black dots; FW has some orange, HW has prominent submarginal orange band.",
            images: ["images/0050001.jpg", "images/0050002.jpg", "images/0050003.jpg", "images/0050004.jpg"],
            link: "https://en.wikipedia.org/wiki/Lycaena_phlaeas"
        },
        {
            common: "Mourning Cloak",
            scientific: "Nymphalis antiopa",
            description: "2 7/8-3 3/8\" (73-86 mm). Large. Wing margins ragged. Dark with pale margins. Above, rich brownish-maroon.",
            images: ["images/0060007.jpg", "images/0060009.jpg", "images/0060021.jpg", "images/0060023.jpg"],
            link: "https://en.wikipedia.org/wiki/Nymphalis_antiopa"
        },
        {
            common: "Giant Swallowtail",
            scientific: "Papilio cresphontes",
            description: "3 3/8-5 1/2\" (86-140 mm). Very large. Long, dark, spoon-shaped tails have yellow center.",
            images: ["images/0070001.jpg", "images/0070003.jpg", "images/0070004.jpg", "images/0070005.jpg"],
            link: "https://en.wikipedia.org/wiki/Papilio_cresphontes"
        },
        {
            common: "Cabbage White",
            scientific: "Pieris rapae",
            description: "1 1/4-1 7/8\" (32-48 mm). Milk-white above with charcoal FW tips, black submarginal sex spots on FW.",
            images: ["images/0080001.jpg", "images/0080002.jpg", "images/0080003.jpg", "images/0080004.jpg"],
            link: "https://en.wikipedia.org/wiki/Pieris_rapae"
        },
        {
            common: "Red Admiral",
            scientific: "Vanessa atalanta",
            description: "1 3/4-2 1/4\" (44-57 mm). FW tip extended, clipped. Above, black with orange-red to vermilion bars.",
            images: ["images/0090001.jpg", "images/0090006.jpg", "images/0090010.jpg", "images/0090011.jpg"],
            link: "https://en.wikipedia.org/wiki/Vanessa_atalanta"
        },
        {
            common: "Painted Lady",
            scientific: "Vanessa cardui",
            description: "2-2 1/4\" (51-57 mm). FW tip extended slightly, rounded. Above, salmon-orange with black blotches.",
            images: ["images/0100003.jpg", "images/0100005.jpg", "images/0100006.jpg", "images/0100008.jpg"],
            link: "https://en.wikipedia.org/wiki/Vanessa_cardui"
        }
    ];

    function getCheckedNames() {
        return Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
    }

    function validateInput(value) {
        if (value.length > 20) return "Input must be 20 characters or less...";
        if (!/^[a-zA-Z\s]*$/.test(value)) return "Input can only contain letters A-Z and spaces...";
        return "";
    }

    function renderResults() {
    const query = searchBox.value.trim().toLowerCase();
    const checkedNames = getCheckedNames();

    dynamicContainer.innerHTML = "";

    const error = validateInput(searchBox.value);
    validationMsg.textContent = error;

    if (error || query === "" || checkedNames.length === 0) return;

    const filtered = butterflies.filter(b =>
        checkedNames.includes(b.common) &&
        b.common.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        const msg = document.createElement("h5");
        msg.textContent = "Couldn't find that butterfly in our database...";
        dynamicContainer.appendChild(msg);
        return;
    }

  
    const title = document.createElement("h2");
    title.textContent = "Matching Results";
    title.style.textAlign = "center"; 
    title.style.marginBottom = "15px";
    dynamicContainer.appendChild(title);

    const resultsWrapper = document.createElement("div");
    resultsWrapper.classList.add("results-grid");

    filtered.forEach(b => {
        const card = document.createElement("div");
        card.classList.add("result-card");

        card.innerHTML = `
            <h3>${b.common}</h3>
            <p><strong>Scientific name:</strong> ${b.scientific}</p>
            <p><strong>Description:</strong> ${b.description}</p>
            <div class="images">
                ${b.images.map(img => `<img src="${img}" alt="${b.common}">`).join("")}
            </div>
            <a href="${b.link}" target="_blank">Wikipedia Page</a>
        `;
        resultsWrapper.appendChild(card);
    });

    dynamicContainer.appendChild(resultsWrapper);
}

    searchBox.addEventListener("input", renderResults);
    checkboxes.forEach(cb => cb.addEventListener("change", renderResults));
    searchBtn.addEventListener("click", renderResults);
});