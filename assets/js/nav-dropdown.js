document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('[data-nav]');
    let activeDropdown = null;

    function closeAllDropdowns() {
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        activeDropdown = null;
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = `${link.getAttribute('data-nav')}-dropdown`;
            const dropdown = document.getElementById(targetId);

            if (activeDropdown === dropdown) {
                closeAllDropdowns();
                return;
            }

            closeAllDropdowns();
            if (dropdown) {
                dropdown.classList.add('active');
                activeDropdown = dropdown;
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && !e.target.closest('.nav-dropdown')) {
            closeAllDropdowns();
        }
    });

    // Close dropdown when pressing ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllDropdowns();
        }
    });
});
