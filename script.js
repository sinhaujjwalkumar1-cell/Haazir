// Categories Data - Aapke 200+ categories
const categories = [
    { id: 1, name: "प्लंबिंग", icon: "🔧" },
    { id: 2, name: "इलेक्ट्रीशियन", icon: "⚡" },
    { id: 3, name: "करपेंटरी", icon: "🪚" },
    { id: 4, name: "पेंटिंग", icon: "🎨" },
    { id: 5, name: "सफाई", icon: "🧹" },
    { id: 6, name: "एसी रिपेयर", icon: "❄️" },
    { id: 7, name: "मोबाइल रिपेयर", icon: "📱" },
    { id: 8, name: "व्हीकल रिपेयर", icon: "🚗" },
    { id: 9, name: "वेडिंग प्लानिंग", icon: "💒" },
    { id: 10, name: "ब्यूटी सर्विस", icon: "💅" }
];

// Load Categories
function loadCategories() {
    const grid = document.querySelector('.categories-grid');
    categories.forEach(category => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <h3>${category.name}</h3>
            <p>स्थानीय विशेषज्ञ ढूंढें</p>
        `;
        card.onclick = () => searchService(category.name);
        grid.appendChild(card);
    });
}

// Modal Functions
function openLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// OTP Functions
function sendOTP() {
    const mobile = document.getElementById('mobileNumber').value;
    if (mobile.length === 10) {
        document.getElementById('otpSection').style.display = 'block';
        // Real OTP integration yahan aayega
        alert('OTP भेजा गया: 123456 (Demo)');
    } else {
        alert('कृपया सही मोबाइल नंबर दर्ज करें');
    }
}

function verifyOTP() {
    const otp = document.getElementById('otpInput').value;
    if (otp === '123456') {
        alert('लॉगिन सफल!');
        closeLogin();
        // Provider dashboard redirect karega
    } else {
        alert('गलत OTP');
    }
}

// Service Search
function searchService(serviceName) {
    alert(`खोज: ${serviceName} - यह फीचर अगले अपडेट में आएगा`);
}

// Provider Registration
function openProviderRegister() {
    alert('सेवा प्रदाता रजिस्ट्रेशन - अगले अपडेट में आएगा');
}

function openSearch() {
    alert('सेवा खोज - अगले अपडेट में आएगा');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCategories();
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('loginModal');
        if (event.target === modal) {
            closeLogin();
        }
    }
});
