const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
               'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
               'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
               'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to sort bands
function sortBands(bands) {
    return bands.sort((a, b) => {
        const stripA = a.replace(/^(a |an |the )/i, '').toLowerCase();
        const stripB = b.replace(/^(a |an |the )/i, '').toLowerCase();
        return stripA.localeCompare(stripB);
    });
}

// Display sorted bands in the list
const sortedBands = sortBands(bands);
const bandList = document.getElementById('band');

sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});