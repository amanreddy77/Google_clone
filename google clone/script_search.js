let btnsearch = document.querySelector('button');
let input = document.querySelector('input');

// Function to handle search action
function performSearch() {
    let inputValue = input.value;

    // Check if input value starts with "http://" or "https://"
    if (!inputValue.startsWith('http://') && !inputValue.startsWith('https://')) {
        inputValue = 'https://' + inputValue;
    }

    // Check if input value ends with ".com"
    if (!inputValue.endsWith('.com')) {
        inputValue += '.com';
    }

    window.open(inputValue, '_blank');
}

// Event listener for button click
btnsearch.addEventListener('click', performSearch);

// Event listener for Enter key press
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});