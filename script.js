// Function to handle page transitions
function goToPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    const targetPageId = 'page' + pageNumber;

    pages.forEach(page => {
        if (page.id === targetPageId) {
            // Show target page
            page.classList.remove('hidden');
            page.classList.add('active');
        } else {
            // Hide other pages
            page.classList.add('hidden');
            page.classList.remove('active');
        }
    });
}

// Function to simulate the envelope button closing/transition
function showEnvelopeAnimation() {
    // For a simple transition, we just go back to page 1.
    // In a real match, this would trigger a complex CSS animation, 
    // but for functionality, we revert.
    goToPage(1);
}

// Function to show the letter modal
function showLetter() {
    const modal = document.getElementById('letterModal');
    modal.classList.remove('hidden');
    // Ensure the modal is displayed block for animation to work
    modal.style.display = 'flex';
}

// Function to hide the letter modal
function hideLetter() {
    const modal = document.getElementById('letterModal');
    // Hide after animation
    modal.classList.add('hidden');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Matches the CSS animation duration
}

// Close modal when clicking outside of the content
window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target == modal) {
        hideLetter();
    }
}
