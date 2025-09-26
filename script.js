document.addEventListener('DOMContentLoaded', function() {

    // --- YOUR CONTENT AND DATA ---
    const aboutUsContent = `<h3>A Movement for an Aatmanirbhar and Digital India</h3><p>"Service by Local" is more than just an app; it is a movement dedicated to realizing the dream of a Aatmanirbhar and Digital India. Our mission is to connect and empower every Indian, whether they are in a city or a rural area.</p><p>We believe that extraordinary talent exists in every corner of India. Many skilled professionals and artisans do not receive the true value for their hard work, often losing a significant portion of their earnings to expensive platform fees or middlemen. "Service by Local" solves this problem. We create an ecosystem where service providers can showcase their skills, eliminate middlemen, and gain complete control over their earnings.</p><h3>What's in it for you?</h3><p>Our app is designed to meet your every need. We have a vast network of skilled professionals across more than 20 service categories, all available just minutes away. Now, the help you need is only a call away.</p>`;
    const termsAndConditionsContent = `<h3>1. Use of Services</h3><p><b>Service Providers:</b> You must list your services accurately and honestly. You are solely responsible for any false or misleading information and must respond to customer inquiries promptly.</p><p><b>Customers:</b> You agree to interact with service providers in a respectful and professional manner. Before booking, it is your responsibility to review the provider’s information, ratings, and reviews.</p><h3>2. Payments and Transactions</h3><p>"Service by Local" is not directly involved in any payments or transactions. All payments are made directly between the customer and the service provider.</p><h3>3. Disclaimer</h3><p>"Service by Local" does not guarantee the quality, authenticity, or reliability of the services listed on the platform. We are not responsible for any direct or indirect damages that may result from the use of our platform.</p><h3>6. Privacy Policy</h3><p>We are committed to protecting the personal information you provide. Your data will not be shared with any third party, except where legally required.</p>`;
    
    const categoriesData = {
        "Home Service": { icon: "fa-solid fa-house-chimney", sub: ["Plumbing", "Electrical", "Carpentry", "Painting", "Cleaning", "AC Repair", "Appliance Repair"] },
        "Construction": { icon: "fa-solid fa-person-digging", sub: ["Bricks", "Gravel", "Sand", "Soil", "Mason Work", "Tiles & Marble", "Contractor", "Gate & Grill"] },
        "Tech Support": { icon: "fa-solid fa-laptop-code", sub: ["Mobile Repair", "Laptop Repair", "Wi-Fi Setup", "Data Recovery", "Software Installation", "Smartphone Repair", "Solar Panel Installation"] },
        "Rental Vehicle": { icon: "fa-solid fa-car", sub: ["Car on Rent", "Car on Rent Self-Drive", "Truck", "Pickup", "Auto", "JCB", "Tractor", "Haiva"] },
        "Event Services": { icon: "fa-solid fa-champagne-glasses", sub: ["Event Planning & Management", "DJ & Sound System", "Stage Setup", "Pandal (Marquee)", "Catering", "Wedding Planning", "Singer & Dancer", "Decoration"] },
        "Beauty": { icon: "fa-solid fa-spa", sub: ["Home Salon (Women)", "Home Salon (Men)", "Men's Grooming", "Bridal Makeup & Hair", "Skin & Facial Treatment", "Mehndi Artist", "Nail Art & Pedicure"] },
        "Pest Control": { icon: "fa-solid fa-bug-slash", sub: ["General", "Termites", "Bed Bugs", "Cockroach Control", "Rodent Control", "Animal/Pet Rescue", "Reptile Rescue"] },
        "Jobs": { icon: "fa-solid fa-briefcase", sub: ["Full Time", "Part Time", "Shop Worker", "Factory Worker", "Others"] },
        "E-Riksha": { icon: "fa-solid fa-person-biking", sub: ["Passenger", "Goods Carrier", "Rental", "School Pickup", "Local Transport"] },
        "Tank Cleaning": { icon: "fa-solid fa-faucet-drip", sub: ["Water Tank Cleaning", "Septic Tank Cleaning", "Overhead Tank Cleaning", "Underground Tank Cleaning"] },
        "Bike Taxi": { icon: "fa-solid fa-motorcycle", sub: ["Bike Taxi Service", "Package Delivery", "Food Delivery", "Quick Commute"] },
        "Mehndi Artist": { icon: "fa-solid fa-hands-holding-heart", sub: ["Bridal Mehndi", "Simple Mehndi", "Arabic Mehndi", "Designer Mehndi", "Traditional Mehndi"] },
        "Vehicle Repair": { icon: "fa-solid fa-car-burst", sub: ["Car Repair", "Bike Repair", "Tyre Repair", "Car Wash", "Insurance", "Bike Service"] },
        "Photography": { icon: "fa-solid fa-camera-retro", sub: ["Wedding Photography", "Portrait Shoots", "Product Photography", "Event Coverage", "Drone Photography", "Video Editing"] },
        "Daily Needs": { icon: "fa-solid fa-basket-shopping", sub: ["Milkman", "Water Supply", "Maid", "Grocery Delivery", "Child Care (Nanny)", "Elder Care"] },
        "Education": { icon: "fa-solid fa-user-graduate", sub: ["School Tuition", "College Coaching", "Competitive Exam Prep", "Language Learning", "Music Classes", "Dance Classes", "Computer Classes"] },
        "Fitness": { icon: "fa-solid fa-dumbbell", sub: ["Personal Yoga Trainer", "Gym & Fitness Trainer", "Massage Therapist", "Dietitian & Nutritionist", "Zumba & Dance Fitness", "Physiotherapist"] },
        "Rent & Share": { icon: "fa-solid fa-right-left", sub: ["Party Items Rental", "Construction Equipment", "Furniture & Appliances", "Books Rental", "Sports Equipment", "Costume Rental"] },
        "Freelancer": { icon: "fa-solid fa-pen-ruler", sub: ["Content Writing", "Graphic Designing", "Website Development", "Digital Marketing", "Virtual Assistant", "Data Entry"] },
        "Other": { icon: "fa-solid fa-ellipsis", sub: ["Other Services"] }
    };

    const sampleProviders = [
        { name: 'Ramesh Kumar', service: '24/7 Plumbing Expert', distance: '3 mins away', area: 'Ashok Nagar', image: 'https://i.imgur.com/8b27h2s.jpg', providerImage: 'https://i.imgur.com/AV4D3t9.jpg' },
        { name: 'Sunita Devi', service: 'Home Cleaning Pro', distance: '5 mins away', area: 'Gandhi Maidan', image: 'https://i.imgur.com/k2z9E1Z.jpg', providerImage: 'https://i.imgur.com/I8a2A5s.jpg' },
        { name: 'Amit Singh', service: 'AC & Fridge Repair', distance: '2 mins away', area: 'Boring Road', image: 'https://i.imgur.com/6y4p1gE.jpg', providerImage: 'https://i.imgur.com/Q9W4T5b.jpg' },
        { name: 'Priya Sharma', service: 'Bridal Mehndi Artist', distance: '8 mins away', area: 'Kankarbagh', image: 'https://i.imgur.com/M7rJ4T1.jpg', providerImage: 'https://i.imgur.com/eL5z2k8.jpg' },
        { name: 'Manoj Tiwari', service: 'Laptop Repair at Home', distance: '4 mins away', area: 'Raja Bazar', image: 'https://i.imgur.com/sS7z7kY.jpg', providerImage: 'https://i.imgur.com/4z8Q1a5.jpg' },
        { name: 'Deepak Patel', service: 'Swift Car for Rent', distance: '10 mins away', area: 'Patliputra Colony', image: 'https://i.imgur.com/xO1z3bE.jpg', providerImage: 'https://i.imgur.com/AV4D3t9.jpg' },
        { name: 'Anjali Kumari', service: 'Maths & Science Tutor', distance: '6 mins away', area: 'Anisabad', image: 'https://i.imgur.com/c6a7S2W.jpg', providerImage: 'https://i.imgur.com/I8a2A5s.jpg' },
        { name: 'Sanjay Yadav', service: 'Local E-Rikshaw', distance: '1 min away', area: 'Chitkohra', image: 'https://i.imgur.com/O6t4g4x.jpg', providerImage: 'https://i.imgur.com/Q9W4T5b.jpg' },
        { name: 'Vikas Sharma', service: 'Wedding Photographer', distance: '12 mins away', area: 'Danapur', image: 'https://i.imgur.com/qO3aY3Y.jpg', providerImage: 'https://i.imgur.com/4z8Q1a5.jpg' },
        { name: 'Rina Gupta', service: 'Home Salon Service', distance: '7 mins away', area: 'Kankarbagh', image: 'https://i.imgur.com/j4Y8f7T.jpg', providerImage: 'https://i.imgur.com/eL5z2k8.jpg' },
        { name: 'Alok Verma', service: 'Gate & Grill Work', distance: '15 mins away', area: 'Saguna Mor', image: 'https://i.imgur.com/bK8p1dD.jpg', providerImage: 'https://i.imgur.com/AV4D3t9.jpg' },
        { name: 'Pooja Mehta', service: 'Personal Yoga Trainer', distance: '5 mins away', area: 'Boring Road', image: 'https://i.imgur.com/sL3v3zP.jpg', providerImage: 'https://i.imgur.com/I8a2A5s.jpg' },
        { name: 'Rajesh Sah', service: 'Daily Milk Supply', distance: '2 mins away', area: 'Ashok Nagar', image: 'https://i.imgur.com/tG8h8gW.jpg', providerImage: 'https://i.imgur.com/Q9W4T5b.jpg' },
        { name: 'Karan Singh', service: 'Bike Taxi & Delivery', distance: '1 min away', area: 'Gandhi Maidan', image: 'https://i.imgur.com/rS2aV3E.jpg', providerImage: 'https://i.imgur.com/4z8Q1a5.jpg' },
        { name: 'Neha Jha', service: 'Content Writer (Hindi)', distance: 'WFH', area: 'Patna', image: 'https://i.imgur.com/wO4h6fT.jpg', providerImage: 'https://i.imgur.com/eL5z2k8.jpg' },
        { name: 'Harish Roy', service: 'Water Tank Cleaning', distance: '9 mins away', area: 'Anisabad', image: 'https://i.imgur.com/eP5q7gU.jpg', providerImage: 'https://i.imgur.com/AV4D3t9.jpg' },
        { name: 'Sameer Khan', service: 'DJ & Sound System', distance: '20 mins away', area: 'Danapur', image: 'https://i.imgur.com/lM8n2oV.jpg', providerImage: 'https://i.imgur.com/Q9W4T5b.jpg' },
        { name: 'Babita Mishra', service: 'Full-time Maid Service', distance: '4 mins away', area: 'Kankarbagh', image: 'https://i.imgur.com/qR7t8gY.jpg', providerImage: 'https://i.imgur.com/I8a2A5s.jpg' },
        { name: 'Ravi Kishan', service: 'Sand & Bricks Supply', distance: '30 mins away', area: 'Bihta', image: 'https://i.imgur.com/fL9o6pI.jpg', providerImage: 'https://i.imgur.com/4z8Q1a5.jpg' },
        { name: 'Suraj Kumar', service: 'Electrician on Call', distance: '3 mins away', area: 'Raja Bazar', image: 'https://i.imgur.com/pY2z3bA.jpg', providerImage: 'https://i.imgur.com/AV4D3t9.jpg' },
    ];

    const mainCategoriesContainer = document.getElementById('main-categories');
    const servicesGrid = document.getElementById('services-grid');
    const addServiceModal = document.getElementById('add-service-modal');
    const congratsModal = document.getElementById('congrats-modal');
    const contentModal = document.getElementById('content-modal');
    const addServiceBtn = document.getElementById('add-service-button');
    
    function openModal(modal) { modal.style.display = 'flex'; }
    function closeModal(modal) { modal.style.display = 'none'; }
    
    addServiceBtn.addEventListener('click', () => {
        addServiceModal.classList.add('align-bottom');
        openModal(addServiceModal);
    });
    
    document.getElementById('close-add-service-modal').addEventListener('click', () => closeModal(addServiceModal));
    document.getElementById('about-us-link').addEventListener('click', () => showContentModal('About Us', aboutUsContent));
    document.getElementById('tc-link').addEventListener('click', () => showContentModal('Terms & Conditions', termsAndConditionsContent));
    document.getElementById('close-content-modal').addEventListener('click', () => closeModal(contentModal));

    function showContentModal(title, content) {
        document.getElementById('content-modal-title').innerText = title;
        document.getElementById('content-modal-body').innerHTML = content;
        contentModal.classList.remove('align-bottom');
        openModal(contentModal);
    }
    
    function loadCategories() {
        mainCategoriesContainer.innerHTML = Object.keys(categoriesData).map(cat => `
            <div class="category-item" data-category="${cat}">
                <div class="icon-bg"><i class="${categoriesData[cat].icon}"></i></div>
                <span>${cat}</span>
            </div>
        `).join('');
    }

    function loadProviders() {
        servicesGrid.innerHTML = sampleProviders.map(p => `
            <div class="service-card">
                <img src="${p.image}" alt="${p.service}" class="service-image">
                <i class="fa-regular fa-heart card-heart-icon"></i>
                <div class="card-content">
                    <img src="${p.providerImage}" alt="${p.name}" class="provider-image">
                    <h3 class="service-title">${p.service}</h3>
                    <p class="provider-name">by ${p.name}</p>
                    <p class="area-name">${p.area}</p>
                    <div class="card-footer">
                        <p class="distance">${p.distance}</p>
                        <button class="call-btn">Call</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    const steps = Array.from(document.querySelectorAll('.form-step'));
    const form = document.getElementById('multi-step-form');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, i) => step.classList.toggle('active', i === stepIndex));
        document.querySelectorAll('.progress-step').forEach((step, i) => step.classList.toggle('active', i <= stepIndex));
    }

    form.addEventListener('click', e => {
        if (e.target.matches('.next-btn')) {
            if (currentStep < steps.length - 1) showStep(++currentStep);
        } else if (e.target.matches('.prev-btn')) {
            if (currentStep > 0) showStep(--currentStep);
        }
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        closeModal(addServiceModal);
        congratsModal.classList.remove('align-bottom');
        openModal(congratsModal);
        currentStep = 0; showStep(currentStep); form.reset();
        document.getElementById('photo-preview').innerHTML = '';
    });
    
    const mainCategorySelect = document.getElementById('main-category');
    const subCategorySelect = document.getElementById('sub-category');

    function populateMainCategories() {
        mainCategorySelect.innerHTML = `<option value="">-- Select --</option>` + Object.keys(categoriesData).map(cat => `<option value="${cat}">${cat}</option>`).join('');
    }
    mainCategorySelect.addEventListener('change', () => {
        const selectedCat = mainCategorySelect.value;
        if (selectedCat && categoriesData[selectedCat]) {
            subCategorySelect.innerHTML = `<option value="">-- Select --</option>` + categoriesData[selectedCat].sub.map(sub => `<option value="${sub}">${sub}</option>`).join('');
        } else {
            subCategorySelect.innerHTML = '<option value="">-- Select Main Category First --</option>';
        }
    });

    const photoUpload = document.getElementById('photo-upload');
    const photoPreview = document.getElementById('photo-preview');
    let uploadedFiles = [];

    photoUpload.addEventListener('change', () => {
        Array.from(photoUpload.files).forEach(file => {
            if (uploadedFiles.length < 6) {
                uploadedFiles.push(file);
                renderPreviews();
            }
        });
        photoUpload.value = '';
    });
    
    function renderPreviews() {
        photoPreview.innerHTML = uploadedFiles.map((file, index) => `
            <div class="preview-image-container">
                <img src="${URL.createObjectURL(file)}" class="preview-image">
                <button type="button" class="remove-image-btn" data-index="${index}">&times;</button>
            </div>
        `).join('');
    }

    photoPreview.addEventListener('click', e => {
        if (e.target.matches('.remove-image-btn')) {
            uploadedFiles.splice(e.target.dataset.index, 1);
            renderPreviews();
        }
    });

    document.getElementById('same-as-mobile-check').addEventListener('change', e => {
        document.getElementById('whatsapp-no').value = e.target.checked ? document.getElementById('mobile-no').value : '';
    });

    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // <-- !!! अपना टोकन यहाँ डालें !!!
    const map = new mapboxgl.Map({
        container: 'map', style: 'mapbox://styles/mapbox/streets-v11', center: [85.1376, 25.5941], zoom: 11
    });
    new mapboxgl.Marker({ draggable: true }).setLngLat([85.1376, 25.5941]).addTo(map);

    document.getElementById('add-more-service-btn').addEventListener('click', () => {
        closeModal(congratsModal);
        openModal(addServiceModal);
    });

    loadCategories();
    loadProviders();
    populateMainCategories();
    showStep(currentStep);
});
