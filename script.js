// Turquoise theme updates for cards
document.addEventListener('DOMContentLoaded', function() {
    // Update card background and text colors
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.backgroundColor = '#e8f5f0';
        card.style.color = '#1a3a3a';
        card.style.border = '1px solid #a8d5d0';
        card.style.borderRadius = '8px';
        card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        card.style.transition = 'all 0.3s ease';

        // Update card content text styling
        const cardTitle = card.querySelector('.card-title');
        const cardContent = card.querySelector('.card-content');

        if (cardTitle) {
            cardTitle.style.color = '#1a3a3a';
            cardTitle.style.fontWeight = 'bold';
            cardTitle.style.textShadow = 'none';
        }

        if (cardContent) {
            cardContent.style.color = '#4a7a7a';
            cardContent.style.lineHeight = '1.5';
        }
    });

    // Update horizontal and vertical name display styles with subtle turquoise glow
    const nameDisplay = document.querySelectorAll('.name-display');

    nameDisplay.forEach(display => {
        display.style.backgroundColor = '#e8f5f0';
        display.style.color = '#1a3a3a';
        display.style.padding = '8px 12px';
        display.style.borderRadius = '4px';
        display.style.fontSize = '14px';
        display.style.fontWeight = '500';
        display.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        display.style.transition = 'all 0.2s ease';
        display.style.border = '1px solid #a8d5d0';
    });

    // Update number indicators with turquoise tint
    const numberIndicators = document.querySelectorAll('.number-indicator');

    numberIndicators.forEach(indicator => {
        indicator.style.color = '#4a7a7a';
        indicator.style.fontSize = '12px';
        indicator.style.marginLeft = '4px';
        indicator.style.textShadow = 'none';
    });

    // Update horizontal/vertical labels with turquoise styling
    const labels = document.querySelectorAll('.horizontal-label, .vertical-label');

    labels.forEach(label => {
        label.style.color = '#4a7a7a';
        label.style.fontSize = '12px';
        label.style.textTransform = 'uppercase';
        label.style.fontWeight = '500';
        label.style.textShadow = 'none';
    });

    // Update grid layout styling with turquoise theme
    const gridContainer = document.querySelector('.grid-container');
    if (gridContainer) {
        gridContainer.style.backgroundColor = '#e8f5f0';
        gridContainer.style.borderRadius = '8px';
        gridContainer.style.padding = '16px';
        gridContainer.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        gridContainer.style.border = '1px solid #a8d5d0';
    }
});

// Main functionality with turquoise theme consistency
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