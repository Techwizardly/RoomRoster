function submitRegistration() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const role = document.getElementById("role").value;
    const userId = role.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 1000);

    document.querySelector(".registration-form").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
    document.getElementById("userId").innerText = userId;

    // Replace with your WhatsApp number (including country code, e.g., +91 for India)
    const whatsappNumber = "9894774283"; // Example: +91 8939017416

    // Construct WhatsApp message
    const message = `New ${role} Registration:\n\n🆔 ID: ${userId}\n👤 Name: ${name}\n📞 Phone: ${phone}`;

    // Open WhatsApp with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
