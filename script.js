// This script is now a mini-application controller.
// The complete JavaScript code from the previous final answer goes here.
// You just need to add the navigation logic at the top.
// The data, modal controls, form logic, etc., remain the same.

document.addEventListener('DOMContentLoaded', function() {
    // --- DATA & CONTENT (Same as before) ---
    // ...

    // --- NEW: SPA NAVIGATION LOGIC ---
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('.nav-item');
    const mobileContainer = document.querySelector('.mobile-container');

    function navigateTo(pageId) {
        pages.forEach(page => {
            page.classList.toggle('active', page.id === pageId);
        });
        navItems.forEach(item => {
            const link = item.getAttribute('href');
            if (link) {
                item.classList.toggle('active', link.substring(1) === pageId);
            }
        });
        mobileContainer.scrollTop = 0; // Always scroll to top on page change
    }

    // Event listener for bottom navigation
    document.querySelector('.bottom-nav').addEventListener('click', e => {
        const navLink = e.target.closest('.nav-item');
        if (navLink && navLink.getAttribute('href')) {
            e.preventDefault();
            const pageId = navLink.getAttribute('href').substring(1);
            navigateTo(pageId);
        }
    });

    // Event listener for dynamic back buttons and other links
    document.body.addEventListener('click', e => {
        const backBtn = e.target.closest('.back-btn');
        if (backBtn) {
            navigateTo(backBtn.dataset.target);
        }
        // ... (other listeners like for content modals)
    });

    // --- DYNAMIC CONTENT RENDERING ---

    // Updated renderHomePage to add click listeners for navigation
    function loadProviders() {
        // ... (inside the map function for sampleProviders)
        // Add data-provider-id to the card
        // e.g., <div class="service-card" data-provider-id="${p.id}" style="...">
        
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', () => {
                const providerId = card.dataset.providerId;
                renderProviderProfilePage(providerId);
                navigateTo('profile-page');
            });
        });
    }
    
    // New function to render the profile page dynamically
    function renderProviderProfilePage(providerId) {
        const provider = sampleProviders.find(p => p.id == providerId);
        const profilePageContainer = document.getElementById('profile-page');
        if (!provider) return;

        profilePageContainer.innerHTML = `
            <header class="page-header">
                <button class="back-btn" data-target="home-page"><i class="fa-solid fa-arrow-left"></i></button>
                <h2>Profile</h2>
                <i class="fa-regular fa-heart" style="font-size: 1.2rem;"></i>
            </header>
            <div class="profile-page-content">
                <div class="profile-header">
                     <img src="${provider.providerImage}" alt="${provider.name}" class="profile-pic">
                     <h2 class="profile-name">${provider.name}</h2>
                     <p class="profile-service">${provider.service}</p>
                     <div class="profile-distance">${provider.distance}</div>
                </div>
                <div class="profile-main-content">
                    <div class="profile-section">
                        <h3>Portfolio</h3>
                        <div class="portfolio-grid">
                            <img src="${provider.image}" alt="Portfolio">
                            <img src="https://i.imgur.com/k2z9E1Z.jpg" alt="Portfolio">
                            <img src="https://i.imgur.com/sS7z7kY.jpg" alt="Portfolio">
                        </div>
                    </div>
                    <div class="profile-section profile-about">
                         <h3>About ${provider.name}</h3>
                         <p>Highly skilled and experienced professional dedicated to providing top-quality service. Available 24/7 for all your needs with a focus on customer satisfaction.</p>
                    </div>
                </div>
            </div>
            <div class="profile-action-bar">
                 <button class="action-btn secondary-btn"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
                 <button class="action-btn primary-btn"><i class="fa-solid fa-phone"></i> Call Now</button>
            </div>
        `;
    }

    // --- INITIALIZE THE APP ---
    function init() {
        navigateTo('home-page'); // Start on the home page
        loadCategories();
        loadProviders();
        populateMainCategories();
        // ... (rest of the init functions from the last complete answer)
    }

    init();
});
