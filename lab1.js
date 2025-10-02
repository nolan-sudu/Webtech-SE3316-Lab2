document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const searchBtn = document.getElementById("searchBtn");
    const dynamicContainer = document.getElementById("dynamicResultsContainer");
    const checkboxes = document.querySelectorAll(".type-checkbox");
    const validationMsg = document.getElementById("validationMsg");

    const butterflies = [
        { common: "Monarch", scientific: "Danaus plexippus", type: "Nymphalid", description: '3 1/2-4" (89-102 mm)...' },
        { common: "Zebra Longwing", scientific: "Heliconius charitonius", type: "Nymphalid", description: '3-3 3/8" (76-78 mm)...' },
        { common: "Crimson-patched Longwing", scientific: "Heliconius erato", type: "Nymphalid", description: '3-3 3/8" (76-86 mm)...' },
        { common: "Common Buckeye", scientific: "Junonia coenia", type: "Nymphalid", description: '2-2 1/2" (51-63 mm)...' },
        { common: "American Copper", scientific: "Lycaena phlaeas", type: "Lycaenid", description: '7/8-1 1/8" (22-28 mm)...' },
        { common: "Mourning Cloak", scientific: "Nymphalis antiopa", type: "Nymphalid", description: '2 7/8-3 3/8" (73-86 mm)...' },
        { common: "Giant Swallowtail", scientific: "Papilio cresphontes", type: "Swallowtail", description: '3 3/8-5 1/2" (86-140 mm)...' },
        { common: "Cabbage White", scientific: "Pieris rapae", type: "Pierid", description: '1 1/4-1 7/8" (32-48 mm)...' },
        { common: "Red Admiral", scientific: "Vanessa atalanta", type: "Nymphalid", description: '1 3/4-2 1/4" (44-57 mm)...' },
        { common: "Painted Lady", scientific: "Vanessa cardui", type: "Nymphalid", description: '2-2 1/4" (51-57 mm)...' }
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

        dynamicContainer.innerHTML = "         ";

        const error = validateInput(searchBox.value);
        validationMsg.textContent = error;

        if (error || query === "" || checkedNames.length === 0) return;

        // Partial match on common name and checkbox filter
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

        const ol = document.createElement("ol");
        filtered.forEach(b => {
            const li = document.createElement("li");

            li.innerHTML = `
                <h2>${b.common}</h2>
                <p><strong>Scientific name:</strong> ${b.scientific}</p>
                <p><strong>Type:</strong> ${b.type}</p>
                <p><strong>Description:</strong> ${b.description}</p>
            `;
            ol.appendChild(li);
        });

        dynamicContainer.appendChild(ol);
    }

    searchBox.addEventListener("input", renderResults);
    checkboxes.forEach(cb => cb.addEventListener("change", renderResults));
    searchBtn.addEventListener("click", renderResults);
});