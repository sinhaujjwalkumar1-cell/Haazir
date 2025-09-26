document.addEventListener('DOMContentLoaded', function() {

    // --- YOUR CONTENT GOES HERE ---
    const aboutUsContent = `<h3>A Movement for an Aatmanirbhar and Digital India</h3><p>"Service by Local" is more than just an app; it is a movement dedicated to realizing the dream of a Aatmanirbhar and Digital India. Our mission is to connect and empower every Indian, whether they are in a city or a rural area.</p><p>We believe that extraordinary talent exists in every corner of India. Many skilled professionals and artisans do not receive the true value for their hard work, often losing a significant portion of their earnings to expensive platform fees or middlemen. "Service by Local" solves this problem. We create an ecosystem where service providers can showcase their skills, eliminate middlemen, and gain complete control over their earnings.</p><h3>What's in it for you?</h3><p>Our app is designed to meet your every need. We have a vast network of skilled professionals across more than 20 service categories, all available just minutes away. Now, the help you need is only a call away.</p>`;
    const termsAndConditionsContent = `<h3>1. Use of Services</h3><p><b>Service Providers:</b> You must list your services accurately and honestly. You are solely responsible for any false or misleading information and must respond to customer inquiries promptly.</p><p><b>Customers:</b> You agree to interact with service providers in a respectful and professional manner. Before booking, it is your responsibility to review the provider’s information, ratings, and reviews.</p><h3>2. Payments and Transactions</h3><p>"Service by Local" is not directly involved in any payments or transactions. All payments are made directly between the customer and the service provider.</p><h3>3. Disclaimer</h3><p>"Service by Local" does not guarantee the quality, authenticity, or reliability of the services listed on the platform. We are not responsible for any direct or indirect damages that may result from the use of our platform.</p><h3>6. Privacy Policy</h3><p>We are committed to protecting the personal information you provide. Your data will not be shared with any third party, except where legally required.</p>`;
    
    // --- DATABASE ---
    const categoriesData = { /* (All 20 categories here) */ }; // You will need to fill this with your full list
    const sampleProviders = [ /* (20 sample provider objects here) */ ];

    // --- DOM ELEMENTS ---
    const mainCategoriesContainer = document.getElementById('main-categories');
    const servicesGrid = document.getElementById('services-grid');
    const addServiceModal = document.getElementById('add-service-modal');
    const congratsModal = document.getElementById('congrats-modal');
    const contentModal = document.getElementById('content-modal');
    
    // --- MODAL CONTROLS ---
    function openModal(modal) { modal.style.display = 'flex'; }
    function closeModal(modal) { modal.style.display = 'none'; }
    
    document.getElementById('add-service-button').addEventListener('click', () => openModal(addServiceModal));
    document.getElementById('close-add-service-modal').addEventListener('click', () => closeModal(addServiceModal));
    document.getElementById('about-us-link').addEventListener('click', () => showContentModal('About Us', aboutUsContent));
    document.getElementById('tc-link').addEventListener('click', () => showContentModal('Terms & Conditions', termsAndConditionsContent));
    document.getElementById('close-content-modal').addEventListener('click', () => closeModal(contentModal));

    function showContentModal(title, content) {
        document.getElementById('content-modal-title').innerText = title;
        document.getElementById('content-modal-body').innerHTML = content;
        openModal(contentModal);
    }
    
    // --- MULTI-STEP FORM LOGIC ---
    const steps = Array.from(document.querySelectorAll('.form-step'));
    const form = document.getElementById('multi-step-form');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            step.classList.toggle('active', index <= stepIndex);
        });
    }

    form.addEventListener('click', e => {
        if (e.target.matches('.next-btn')) {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        } else if (e.target.matches('.prev-btn')) {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        }
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        closeModal(addServiceModal);
        openModal(congratsModal);
        // Reset form
        currentStep = 0;
        showStep(currentStep);
        form.reset();
    });
    
    // --- Photo Uploader Logic ---
    const photoUpload = document.getElementById('photo-upload');
    const photoPreview = document.getElementById('photo-preview');
    let uploadedFiles = [];

    photoUpload.addEventListener('change', () => {
        const files = Array.from(photoUpload.files);
        files.forEach(file => {
            if (uploadedFiles.length < 6) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    uploadedFiles.push(file);
                    renderPreviews();
                };
                reader.readAsDataURL(file);
            }
        });
        photoUpload.value = ''; // Reset input
    });
    
    function renderPreviews() {
        photoPreview.innerHTML = '';
        uploadedFiles.forEach((file, index) => {
            const container = document.createElement('div');
            container.classList.add('preview-image-container');
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.classList.add('preview-image');
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '&times;';
            removeBtn.classList.add('remove-image-btn');
            removeBtn.onclick = () => {
                uploadedFiles.splice(index, 1);
                renderPreviews();
            };
            container.appendChild(img);
            container.appendChild(removeBtn);
            photoPreview.appendChild(container);
        });
    }

    // --- Mapbox Integration ---
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your token
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [77.216721, 28.644800], // Default to Delhi
        zoom: 12
    });
    const marker = new mapboxgl.Marker({ draggable: true }).setLngLat([77.216721, 28.644800]).addTo(map);

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        // You can use lngLat.lng and lngLat.lat to get coordinates
        // and maybe even reverse geocode to get an address.
    }
    marker.on('dragend', onDragEnd);
    
    // --- INITIALIZE APP ---
    // (Load categories and providers here)
    showStep(currentStep); 
});
