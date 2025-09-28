// Sample services data
const services = [
    {
        id: 1,
        name: "Amit Kumar",
        service: "Electrician Services",
        distance: "2.5 km away",
        rating: 4.5
    },
    {
        id: 2, 
        name: "Rajesh Plumbing",
        service: "Plumbing Fix",
        distance: "1.8 km away", 
        rating: 4.8
    }
];

// Load services
function loadServices() {
    const servicesList = document.querySelector('.services-list');
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-avatar">${service.name.charAt(0)}</div>
            <div class="service-info">
                <h4>${service.name}</h4>
                <p>${service.service}</p>
            </div>
            <div class="service-distance">${service.distance}</div>
        `;
        servicesList.appendChild(serviceCard);
    });
}

// Modal functions
function openLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function openRegister() {
    alert('Registration form will be implemented');
}

function openCategory(category) {
    alert(`Opening ${category} services`);
}

function sendOTP() {
    alert('OTP sent to your mobile number');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadServices();
});
