// Open Solar Calculator
document.getElementById('openSolar').addEventListener('click', function() {
    window.open('solar/solar.html', '_blank', 'width=600,height=700');
});

// Open Energy Consumption Calculator
document.getElementById('openConsumption').addEventListener('click', function() {
    window.open('energy/consumption.html', '_blank', 'width=600,height=700');
});

// Scroll fade-in effect for cards
const cards = document.querySelectorAll('.card');

function showCardsOnScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showCardsOnScroll);
showCardsOnScroll(); // Run once on page load
