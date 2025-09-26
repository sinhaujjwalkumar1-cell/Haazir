// यह कोड तब चलेगा जब पूरा HTML पेज लोड हो जाएगा
document.addEventListener('DOMContentLoaded', function() {

    // पेज पर मौजूद सभी 'call-btn' क्लास वाले बटन्स को चुनें
    const callButtons = document.querySelectorAll('.call-btn');

    // हर एक बटन के लिए...
    callButtons.forEach(button => {
        // एक 'click' इवेंट लिस्नर जोड़ें
        button.addEventListener('click', function() {
            // जब बटन पर क्लिक हो, तो यह अलर्ट दिखाएँ
            alert('Calling functionality will be added here!');
        });
    });

});```
