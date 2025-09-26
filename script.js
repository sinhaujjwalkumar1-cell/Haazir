document.addEventListener('DOMContentLoaded', function() {

    // --- डेटाबेस (अभी के लिए यहीं पर) ---
    const categoriesData = {
        "Home Service": { icon: "fa-solid fa-house-chimney", sub: ["Plumbing", "Electrical", "Carpentry", "Painting", "Cleaning", "AC Repair", "Appliance Repair"] },
        "Construction": { icon: "fa-solid fa-person-digging", sub: ["Bricks", "Gravel", "Sand", "Soil", "Mason Work", "Tiles & Marble", "Contractor", "Gate & Grill"] },
        "Tech Support": { icon: "fa-solid fa-laptop-code", sub: ["Mobile Repair", "Laptop Repair", "Wi-Fi Setup", "Data Recovery", "Software Installation", "Solar Panel Installation"] },
        "Rental Vehicle": { icon: "fa-solid fa-car", sub: ["Car on Rent", "Car Self-Drive", "Truck", "Pickup", "Auto", "JCB", "Tractor", "Haiva"] },
        "Event Services": { icon: "fa-solid fa-champagne-glasses", sub: ["Event Planning", "DJ & Sound", "Stage Setup", "Pandal", "Catering", "Wedding Planning", "Singer & Dancer"] },
        "Beauty": { icon: "fa-solid fa-spa", sub: ["Home Salon (Women)", "Home Salon (Men)", "Bridal Makeup", "Mehndi Artist", "Nail Art", "Hair Color"] },
        "Pest Control": { icon: "fa-solid fa-bug-slash", sub: ["General Pest Control", "Rodent Control", "Animal/Pet Rescue", "Reptile Rescue (Snakes)"] },
        "Jobs": { icon: "fa-solid fa-briefcase", sub: ["Full Time", "Part Time", "Shop Worker", "Factory Worker", "Others"] },
        "Education": { icon: "fa-solid fa-user-graduate", sub: ["School Tuition", "College Coaching", "Music Classes", "Dance Classes", "Computer Classes"] },
        "Fitness": { icon: "fa-solid fa-dumbbell", sub: ["Yoga Trainer", "Gym Trainer", "Massage Therapist", "Dietitian", "Physiotherapist"] },
        "Freelancer": { icon: "fa-solid fa-pen-ruler", sub: ["Content Writing", "Graphic Designing", "Website Development", "Digital Marketing"] },
        "Other": { icon: "fa-solid fa-ellipsis", sub: ["Other Services"] }
    };

    const mainCategoriesContainer = document.getElementById('main-categories');
    const categoryModal = document.getElementById('category-modal');
    const addServiceModal = document.getElementById('add-service-modal');
    const closeCategoryModalBtn = document.getElementById('close-category-modal');
    const closeAddServiceModalBtn = document.getElementById('close-add-service-modal');
    const addServiceBtn = document.getElementById('add-service-button');
    const modalBody = document.getElementById('modal-body');
    const modalTitle = document.getElementById('modal-title');

    // --- मुख्य कैटेगरीज़ को लोड करें ---
    function loadMainCategories() {
        let html = '';
        for (const category in categoriesData) {
            html += `
                <div class="category-item" data-category="${category}">
                    <div class="icon-bg"><i class="${categoriesData[category].icon}"></i></div>
                    <span>${category}</span>
                </div>
            `;
        }
        mainCategoriesContainer.innerHTML = html;
    }

    // --- Modal खोलने और बंद करने के फंक्शन ---
    function openModal(modal) {
        modal.style.display = 'flex';
    }

    function closeModal(modal) {
        modal.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => {
            modal.style.display = 'none';
            modal.style.animation = ''; // Reset animation
        }, 280);
    }

    // --- कैटेगरी Modal के लिए इवेंट्स ---
    mainCategoriesContainer.addEventListener('click', function(e) {
        const categoryItem = e.target.closest('.category-item');
        if (categoryItem) {
            const categoryName = categoryItem.dataset.category;
            const subcategories = categoriesData[categoryName].sub;

            modalTitle.textContent = `Select in ${categoryName}`;
            
            let subCategoryHtml = '';
            subcategories.forEach(sub => {
                subCategoryHtml += `<div class="sub-category-item">${sub}</div>`;
            });
            modalBody.innerHTML = subCategoryHtml;
            openModal(categoryModal);
        }
    });

    // सब-कैटेगरी को सेलेक्ट/डीसेलेक्ट करना
    modalBody.addEventListener('click', function(e) {
        if(e.target.classList.contains('sub-category-item')) {
            e.target.classList.toggle('selected');
        }
    });

    // Modals को बंद करना
    closeCategoryModalBtn.addEventListener('click', () => closeModal(categoryModal));
    closeAddServiceModalBtn.addEventListener('click', () => closeModal(addServiceModal));
    categoryModal.addEventListener('click', (e) => { if(e.target === categoryModal) closeModal(categoryModal); });
    addServiceModal.addEventListener('click', (e) => { if(e.target === addServiceModal) closeModal(addServiceModal); });

    // --- Add Service Modal के लिए इवेंट्स ---
    addServiceBtn.addEventListener('click', () => {
        openModal(addServiceModal);
    });

    // --- एनिमेशन ---
    function animateCardsOnLoad() {
        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 100}ms`;
            card.classList.add('animate-on-load');
        });
    }

    // --- इनिशियलाइज़ेशन ---
    loadMainCategories();
    animateCardsOnLoad();

});
