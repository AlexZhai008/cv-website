document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const cards = document.querySelectorAll('.card');
    
    // Initial state setup for animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) translateZ(0)';
        card.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on horizontal position or just simple reveal
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateZ(0)';
                }, 50);
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Contact button toast popup
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Try to copy to clipboard (won't throw error if browser blocks it)
            if (navigator.clipboard) {
                navigator.clipboard.writeText('15998448159').catch(() => {});
            }
            
            // Create or get toast
            let toast = document.querySelector('.toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.className = 'toast';
                document.body.appendChild(toast);
            }
            
            toast.innerHTML = '📞 15998448159 <span style="opacity:0.4; margin:0 4px;">|</span> 已复制到剪贴板';
            
            // Show toast with slight delay for animation if just created
            setTimeout(() => {
                toast.classList.add('show');
            }, 10);
            
            // Hide after 3 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    }
});
