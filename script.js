document.addEventListener('DOMContentLoaded', function() {
    // Enhanced copy functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeBlock = this.closest('.code-card').querySelector('pre code');
            const code = codeBlock.textContent;
            
            navigator.clipboard.writeText(code)
                .then(() => {
                    // Visual feedback
                    const originalText = button.innerHTML;
                    button.innerHTML = `
                        <svg class="copy-icon" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        Copied!
                    `;
                    button.classList.add('copied');
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    button.textContent = 'Error!';
                });
        });
    });
    
    // Terminal cursor effect
    const cursor = document.querySelector('.terminal-cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
    
    // Cyberpunk-style console log
    console.log('%c⚡ CYBERPUNK CODE VAULT ⚡', 'color: #00ff9d; font-size: 16px; font-weight: bold;');
    console.log('%cExplore the neon-lit code examples!', 'color: #00e1ff;');
});