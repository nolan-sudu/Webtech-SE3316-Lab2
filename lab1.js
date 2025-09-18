const butterflies = [
  {
    common: "Monarch",
    scientific: "Danaus plexippus",
    description: "3 1/2-4\" (89-102 mm). Very large, bright orange with black veins and margins; tips of forewings black with white spots. Male has a black spot on hindwing cell."
  },
  {
    common: "Swallowtail",
    scientific: "Papilio machaon",
    description: "Large, yellow and black butterfly with tail-like extensions on hindwings."
  }
  // Add remaining 8 butterflies
];

function searchButterflies() {
    const input = document.getElementById("searchBox").value;
    if(!/^[a-zA-Z]{1,20}$/.test(input)) {
        alert("Please enter only letters (max 20 characters)");
        return;
    }
    const matches = butterflies.filter(b =>
        b.common.toLowerCase().includes(input.toLowerCase()) ||
        b.description.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 5);
    if(matches.length > 0) {
        alert("Matches:\n" + matches.map(m => m.common).join("\n"));
    } else {
        alert("No matches found");
    }
}

document.getElementById("searchBox").addEventListener("keypress", function(e){
    if(e.key === "Enter") searchButterflies();
});

function showButterflyInfo() {
    const select = document.getElementById("scientificDropdown");
    const selected = butterflies.find(b => b.scientific === select.value);
    if(selected) {
        alert(`${selected.common}\n${selected.description}`);
    }
}