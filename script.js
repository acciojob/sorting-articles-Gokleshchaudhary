//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Sorting function
const sortedBands = bands.sort((a, b) => {
    // Function to remove 'a', 'an', 'the' and compare
    const cleanA = a.replace(/^(a |an |the )/i, '').trim();
    const cleanB = b.replace(/^(a |an |the )/i, '').trim();
    return cleanA.localeCompare(cleanB);
});

// Populate the unordered list
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});