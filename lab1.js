const butterflies = [
  {
    common: "Monarch",
    scientific: "Danaus plexippus",
    description: "3 1/2-4\" (89-102 mm). Very large, with FW long and drawn out..."
  },
  {
    common: "Zebra Longwing",
    scientific: "Heliconius charitonius",
    description: "3-3 3/8\" (76-78 mm). Wings long and narrow. Jet-black above..."
  },
  {
    common: "Crimson-patched Longwing",
    scientific: "Heliconius erato",
    description: "3-3 3/8\" (76-86 mm). Wings long, narrow, and rounded..."
  },
  {
    common: "Common Buckeye",
    scientific: "Junonia coenia",
    description: "2-2 1/2\" (51-63 mm). Wings scalloped and rounded..."
  },
  {
    common: "American Copper",
    scientific: "Lycaena phlaeas",
    description: "7/8-1 1/8\" (22-28 mm). Above, FW bright copper..."
  },
  {
    common: "Mourning Cloak",
    scientific: "Nymphalis antiopa",
    description: "2 7/8-3 3/8\" (73-86 mm). Large. Wing margins ragged..."
  },
  {
    common: "Giant Swallowtail",
    scientific: "Papilio cresphontes",
    description: "3 3/8-5 1/2\" (86-140 mm). Very large..."
  },
  {
    common: "Cabbage White",
    scientific: "Pieris rapae",
    description: "1 1/4-1 7/8\" (32-48 mm). Milk-white above..."
  },
  {
    common: "Red Admiral",
    scientific: "Vanessa atalanta",
    description: "1 3/4-2 1/4\" (44-57 mm). FW tip extended, clipped..."
  },
  {
    common: "Painted Lady",
    scientific: "Vanessa cardui",
    description: "2-2 1/4\" (51-57 mm). FW tip extended slightly, rounded..."
  }
];

function searchButterflies() {
  const input = document.getElementById("searchBox").value.trim();
  const regex = /^[A-Za-z\s]{1,20}$/;

  if (!regex.test(input)) {
    alert("Please enter letters only (max 20 characters).");
    return;
  }

  const matches = butterflies
    .filter(b =>
      b.common.toLowerCase().includes(input.toLowerCase()) ||
      b.description.toLowerCase().includes(input.toLowerCase())
    )
    .slice(0, 5)
    .map(b => b.common);

  if (matches.length > 0) {
    alert("Matches: " + matches.join(", "));
  } else {
    alert("No butterflies found.");
  }
}

document.getElementById("searchBox").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    searchButterflies();
  }
});

function showButterflyInfo() {
  const selected = document.getElementById("scientificDropdown").value;
  if (!selected) return;

  const butterfly = butterflies.find(b => b.scientific === selected);
  if (butterfly) {
    alert(butterfly.common + ": " + butterfly.description);
  }
}