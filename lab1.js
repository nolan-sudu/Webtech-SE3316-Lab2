const butterflies = [
  { common: "Monarch", scientific: "Danaus plexippus", description: "3 1/2-4\" (89-102 mm). Very large, with FW long and drawn out. Above, bright, burnt-orange with black veins and black margins sprinkled with white dots; FW tip broadly black interrupted by larger white and orange spots. Below, paler, duskier orange. 1 black spot appears between HW cell and margin on male above and below. Female darker with black veins smudged." },
  { common: "Zebra Longwing", scientific: "Heliconius charitonius", description: "3-3 3/8\" (76-78 mm). Wings long and narrow. Jet-black above, banded with lemon-yellow (sometimes pale yellow). Beneath similar; bases of wings have crimson spots." },
  { common: "Crimson-patched Longwing", scientific: "Heliconius erato", description: "3-3 3/8\" (76-86 mm). Wings long, narrow, and rounded. Black above, crossed on FW by broad crimson patch, and on HW by narrow yellow line. Below, similar but red is pinkish and HW has less yellow." },
  { common: "Common Buckeye", scientific: "Junonia coenia", description: "2-2 1/2\" (51-63 mm). Wings scalloped and rounded except at drawn-out FW tip. Highly variable. Above, tawny-brown to dark brown; 2 orange bars in FW cell, orange submarginal band on HW, white band diagonally crossing FW. 2 bright eyespots on each wing above: on FW, 1 very small near tip and 1 large eyespot in white FW bar; on HW, 1 large eyespot near upper margin and 1 small eyespot below it. Eyespots black, yellow-rimmed, with iridescent blue and lilac irises. Beneath, FW resembles above in lighter shades; HW eyespots tiny or absent, rose-brown to tan, with vague crescent-shaped markings." },
  { common: "American Copper", scientific: "Lycaena phlaeas", description: "7/8-1 1/8\" (22-28 mm). Above, FW bright copper or brass-colored with dark spots and margin; HW dark brown with copper margin. Undersides mostly grayish with black dots; FW has some orange, HW has prominent submarginal orange band." },
  { common: "Mourning Cloak", scientific: "Nymphalis antiopa", description: "2 7/8-3 3/8\" (73-86 mm). Large. Wing margins ragged. Dark with pale margins. Above, rich brownish-maroon, iridescent at close range, with ragged, cream-yellow band, bordered inwardly by brilliant blue spots all along both wings. Below, striated, ash-black with row of blue-green to blue-gray chevrons just inside dirty yellow border." },
  { common: "Giant Swallowtail", scientific: "Papilio cresphontes", description: "3 3/8-5 1/2\" (86-140 mm). Very large. Long, dark, spoon-shaped tails have yellow center. Dark brownish-black above with 2 broad bands of yellow spots converging at tip of FW. Orange spot at corner of HW flanked by blue spot above; both recur below, but blue continuing in chevrons across underwing, which also has orange patch. Otherwise, yellow below with black veins and borders. Abdomen yellow with broad black midline tapering at tip; notch on top of abdomen near rear. Thorax has yellow lengthwise spots or stripes." },
  { common: "Cabbage White", scientific: "Pieris rapae", description: "1 1/4-1 7/8\" (32-48 mm). Milk-white above with charcoal FW tips, black submarginal sex spots on FW (1 on male, 2 on female) and on HW costa. Below, FW tip and HW pale to bright mustard-yellow, speckled with grayish spots and black FW spots." },
  { common: "Red Admiral", scientific: "Vanessa atalanta", description: "1 3/4-2 1/4\" (44-57 mm). FW tip extended, clipped. Above, black with orange-red to vermilion bars across FW and on HW border. Below, mottled black, brown, and blue with pink bar on FW. White spots at FW tip above and below, bright blue patch on lower HW angle above and below." },
  { common: "Painted Lady", scientific: "Vanessa cardui", description: "2-2 1/4\" (51-57 mm). FW tip extended slightly, rounded. Above, salmon-orange with black blotches, black-patterned margins, and broadly black FW tips with clear white spots; outer HW crossed by small black-rimmed blue spots. Below, FW dominantly rose-pink with olive, black, and white pattern; HW has small blue spots on olive background with white webwork. FW above and below has white bar running from costa across black patch near tip." }
];

function searchButterflies() {
  const input = document.getElementById("searchBox").value.trim();
  const regex = /^[A-Za-z\s]{1,20}$/;

  if (!regex.test(input)) {
    alert("Please enter letters only (max 20 characters).");
    return;
  }

  const matches = butterflies
    .filter(b => b.common.toLowerCase().includes(input.toLowerCase()))
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