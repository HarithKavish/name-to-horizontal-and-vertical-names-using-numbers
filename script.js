// Dark theme updates for cards
document.addEventListener('DOMContentLoaded', function() {
    // Update card background and text colors
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.backgroundColor = '#2d3436';
        card.style.color = '#e0e0e0';
        card.style.border = '1px solid #4a5568';
        card.style.borderRadius = '8px';
        card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

        // Update card content text styling
        const cardTitle = card.querySelector('.card-title');
        const cardContent = card.querySelector('.card-content');

        if (cardTitle) {
            cardTitle.style.color = '#e0e0e0';
            cardTitle.style.fontWeight = 'bold';
        }

        if (cardContent) {
            cardContent.style.color = '#b2bec3';
        }
    });

    // Update horizontal and vertical name display styles
    const nameDisplay = document.querySelectorAll('.name-display');

    nameDisplay.forEach(display => {
        display.style.backgroundColor = '#353b42';
        display.style.color = '#e0e0e0';
        display.style.padding = '8px 12px';
        display.style.borderRadius = '4px';
        display.style.fontSize = '14px';
        display.style.fontWeight = '500';
    });

    // Update number indicators
    const numberIndicators = document.querySelectorAll('.number-indicator');

    numberIndicators.forEach(indicator => {
        indicator.style.color = '#b2bec3';
        indicator.style.fontSize = '12px';
        indicator.style.marginLeft = '4px';
    });

    // Update horizontal/vertical labels
    const labels = document.querySelectorAll('.horizontal-label, .vertical-label');

    labels.forEach(label => {
        label.style.color = '#b2bec3';
        label.style.fontSize = '12px';
        label.style.textTransform = 'uppercase';
        label.style.fontWeight = '500';
    });

    // Update grid layout styling
    const gridContainer = document.querySelector('.grid-container');
    if (gridContainer) {
        gridContainer.style.backgroundColor = '#2d3436';
        gridContainer.style.borderRadius = '8px';
        gridContainer.style.padding = '16px';
        gridContainer.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Main functionality remains unchanged
function convertNames() {
    const horizontalNames = document.querySelectorAll('.horizontal-name');
    const verticalNames = document.querySelectorAll('.vertical-name');

    horizontalNames.forEach((name, index) => {
        const number = index + 1;
        const horizontalNameElement = document.createElement('div');
        horizontalNameElement.className = 'name-display';
        horizontalNameElement.textContent = `Horizontal ${number}: ${name.textContent}`;
        horizontalNames[index].parentNode.insertBefore(horizontalNameElement, horizontalNames[index]);
    });

    verticalNames.forEach((name, index) => {
        const number = index + 1;
        const verticalNameElement = document.createElement('div');
        verticalNameElement.className = 'name-display';
        verticalNameElement.textContent = `Vertical ${number}: ${name.textContent}`;
        verticalNames[index].parentNode.insertBefore(verticalNameElement, verticalNames[index]);
    });
}