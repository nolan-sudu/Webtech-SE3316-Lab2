document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const searchBtn = document.getElementById("searchBtn");
    const dynamicContainer = document.getElementById("dynamicResultsContainer");
    const checkboxes = document.querySelectorAll(".type-checkbox");

    const butterflies = [
    {   common: "Monarch", scientific: "Danaus plexippus", type: "Nymphalid", description: '3 1/2-4" (89-102 mm). Very large, with FW long and drawn out. Above, bright, burnt-orange with black veins and black margins sprinkled with white dots; FW tip broadly black interrupted by larger white and orange spots. Below, paler, duskier orange. 1 black spot appears between HW cell and margin on male above and below. Female darker with black veins smudged.' },
    {   common: "Zebra Longwing", scientific: "Heliconius charitonius", type: "Nymphalid", description: '3-3 3/8" (76-78 mm). Wings long and narrow. Jet-black above, banded with lemon-yellow (sometimes pale yellow). Beneath similar; bases of wings have crimson spots.' },
    {   common: "Crimson-patched Longwing", scientific: "Heliconius erato", type: "Nymphalid", description: '3-3 3/8" (76-86 mm). Wings long, narrow, and rounded. Black above, crossed on FW by broad crimson patch, and on HW by narrow yellow line. Below, similar but red is pinkish and HW has less yellow.' },
    {   common: "Common Buckeye", scientific: "Junonia coenia", type: "Nymphalid", description: '2-2 1/2" (51-63 mm). Wings scalloped and rounded except at drawn-out FW tip. Highly variable. Above, tawny-brown to dark brown; 2 orange bars in FW cell, orange submarginal band on HW, white band diagonally crossing FW. 2 bright eyespots on each wing above: on FW, 1 very small near tip and 1 large eyespot in white FW bar; on HW, 1 large eyespot near upper margin and 1 small eyespot below it. Eyespots black, yellow-rimmed, with iridescent blue and lilac irises. Beneath, FW resembles above in lighter shades; HW eyespots tiny or absent, rose-brown to tan, with vague crescent-shaped markings.' },
    {   common: "American Copper", scientific: "Lycaena phlaeas", type: "Lycaenid", description: '7/8-1 1/8" (22-28 mm). Above, FW bright copper or brass-colored with dark spots and margin; HW dark brown with copper margin. Undersides mostly grayish with black dots; FW has some orange, HW has prominent submarginal orange band.' },
    {   common: "Mourning Cloak", scientific: "Nymphalis antiopa", type: "Nymphalid", description: '2 7/8-3 3/8" (73-86 mm). Large. Wing margins ragged. Dark with pale margins. Above, rich brownish-maroon, iridescent at close range, with ragged, cream-yellow band, bordered inwardly by brilliant blue spots all along both wings. Below, striated, ash-black with row of blue-green to blue-gray chevrons just inside dirty yellow border.' },
    {   common: "Giant Swallowtail", scientific: "Papilio cresphontes", type: "Swallowtail", description: '3 3/8-5 1/2" (86-140 mm). Very large. Long, dark, spoon-shaped tails have yellow center. Dark brownish-black above with 2 broad bands of yellow spots converging at tip of FW. Orange spot at corner of HW flanked by blue spot above; both recur below, but blue continuing in chevrons across underwing, which also has orange patch. Otherwise, yellow below with black veins and borders. Abdomen yellow with broad black midline tapering at tip; notch on top of abdomen near rear. Thorax has yellow lengthwise spots or stripes.' },
    {   common: "Cabbage White", scientific: "Pieris rapae", type: "Pierid", description: '1 1/4-1 7/8" (32-48 mm). Milk-white above with charcoal FW tips, black submarginal sex spots on FW (1 on male, 2 on female) and on HW costa. Below, FW tip and HW pale to bright mustard-yellow, speckled with grayish spots and black FW spots.' },
    {   common: "Red Admiral", scientific: "Vanessa atalanta", type: "Nymphalid", description: '1 3/4-2 1/4" (44-57 mm). FW tip extended, clipped. Above, black with orange-red to vermilion bars across FW and on HW border. Below, mottled black, brown, and blue with pink bar on FW. White spots at FW tip above and below, bright blue patch on lower HW angle above and below.' },
    {   common: "Painted Lady", scientific: "Vanessa cardui", type: "Nymphalid", description: '2-2 1/4" (51-57 mm). FW tip extended slightly, rounded. Above, salmon-orange with black blotches, black-patterned margins, and broadly black FW tips with clear white spots; outer HW crossed by small black-rimmed blue spots. Below, FW dominantly rose-pink with olive, black, and white pattern; HW has small blue spots on olive background with white webwork. FW above and below has white bar running from costa across black patch near tip.' }
];

    function getCheckedTypes() {
        return Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
    }

    function renderResults() {
    const query = searchBox.value.trim().toLowerCase();
    const checkedTypes = getCheckedTypes();

    dynamicContainer.innerHTML = "";

    // Hide results if nothing is searched and all checkboxes are checked
    if (query === "" && checkedTypes.length === checkboxes.length) return;

    if (checkedTypes.length === 0) return;

    const filtered = butterflies.filter(b => {
        const matchesCheckbox = checkedTypes.includes(b.scientific);
        const matchesSearch = query === "" || b.common.toLowerCase().includes(query) || b.description.toLowerCase().includes(query);
        return matchesCheckbox && matchesSearch;
    });

    if (filtered.length === 0) return;

    const ol = document.createElement("ol");
    filtered.forEach(b => {
        const li = document.createElement("li");

        const h2 = document.createElement("h2");
        h2.textContent = b.common;

        const pSci = document.createElement("p");
        pSci.innerHTML = `<strong>Scientific name:</strong> ${b.scientific}`;

        const pType = document.createElement("p");
        pType.innerHTML = `<strong>Type:</strong> ${b.type}`;

        const pDesc = document.createElement("p");
        pDesc.innerHTML = `<strong>Description:</strong> ${b.description}`;

        li.appendChild(h2);
        li.appendChild(pSci);
        li.appendChild(pType);
        li.appendChild(pDesc);

        ol.appendChild(li);
    });

    dynamicContainer.appendChild(ol);
}

    searchBox.addEventListener("input", renderResults);
    checkboxes.forEach(cb => cb.addEventListener("change", renderResults));
    searchBtn.addEventListener("click", renderResults);
});