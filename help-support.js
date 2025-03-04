// Function to toggle the FAQ visibility
function showFAQ() {
    var faqContent = document.getElementById('faq-list');
    if (faqContent.style.display === "none") {
        faqContent.style.display = "block";
    } else {
        faqContent.style.display = "none";
    }
}

// Function to toggle the Contact Us form visibility
function openContactForm() {
    var formContent = document.getElementById('contact-form');
    if (formContent.style.display === "none") {
        formContent.style.display = "block";
    } else {
        formContent.style.display = "none";
    }
}
