document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('[data-nav]');
    const closeButtons = document.querySelectorAll('.page-close');
    let activePage = null;

    function closeAllPages() {
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        activePage = null;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = `${link.getAttribute('data-nav')}-page`;
            const page = document.getElementById(targetId);

            if (activePage === page) {
                closeAllPages();
                return;
            }

            closeAllPages();
            if (page) {
                page.classList.add('active');
                activePage = page;
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllPages);
    });

    // Close pages when pressing ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllPages();
        }
    });
});
