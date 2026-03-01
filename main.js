// UVAI Generated JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('UVAI Generated App Loaded');

    // Demo functionality
    const demoButton = document.getElementById('demo-button');
    const demoOutput = document.getElementById('demo-output');

    if (demoButton && demoOutput) {
        demoButton.addEventListener('click', function() {
            const messages = [
                'Hello from your UVAI generated app!',
                'This app was created from a YouTube tutorial.',
                'Click again for another message!',
                'You can customize this functionality.',
                'UVAI makes video-to-code magic happen!'
            ];

            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            demoOutput.innerHTML = `<p>${randomMessage}</p>`;
            demoOutput.style.display = 'block';
        });
    }

    // Add interactive features based on video analysis
    addInteractiveFeatures();
});

function addInteractiveFeatures() {
    // Add animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';

        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
}