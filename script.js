// Function to open the letter content after pressing the central button
function openLetterContent() {
    const envelopeScreen = document.getElementById('envelopeScreen');
    const letterScreen = document.getElementById('letterScreen');
    
    // 1. Hide the Blue Envelope Screen
    envelopeScreen.classList.remove('active');
    envelopeScreen.classList.add('hidden');

    // 2. Show the Pink Letter Screen
    // We use a small timeout to ensure the transition is smooth
    setTimeout(() => {
        letterScreen.classList.remove('hidden');
        letterScreen.classList.add('active');
    }, 100); 
}

// Function to close the letter and return to the Envelope/Home Screen
function closeLetter() {
    const envelopeScreen = document.getElementById('envelopeScreen');
    const letterScreen = document.getElementById('letterScreen');

    // 1. Hide the Letter Screen
    letterScreen.classList.remove('active');
    letterScreen.classList.add('hidden');
    
    // 2. Show the Envelope Screen
    setTimeout(() => {
        envelopeScreen.classList.remove('hidden');
        envelopeScreen.classList.add('active');
    }, 100);
}
