//your JS code here. If required.
// script.js
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to sort the bands
function sortBands(bands) {
    return bands.sort((a, b) => {
        // Remove 'The', 'A', 'An' and convert to lowercase for comparison
        const bandA = a.replace(/^(the|a|an)\s+/i, '').toLowerCase();
        const bandB = b.replace(/^(the|a|an)\s+/i, '').toLowerCase();
        return bandA.localeCompare(bandB);
    });
}

// Sort the bands
const sortedBands = sortBands(bands);

// Add sorted bands to the unordered list
const ul = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});