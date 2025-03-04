// Lightbox functionality for image preview
function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        let answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
document.getElementById("goButton").addEventListener("click", function () {
    document.getElementById("resultContainer").style.display = "block";
});
document.addEventListener("DOMContentLoaded", () => {
    const locationInput = document.getElementById("locationInput");
    const locationDropdown = document.getElementById("locationDropdown");
    const goButton = document.getElementById("goButton");
    const resultContainer = document.getElementById("resultContainer");
    const dropdownItems = locationDropdown.querySelectorAll("li");

    // Show dropdown when input is focused
    locationInput.addEventListener("focus", () => {
        locationDropdown.style.display = "block";
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!locationDropdown.contains(e.target) && e.target !== locationInput) {
            locationDropdown.style.display = "none";
        }
    });

    // Select dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            locationInput.value = item.textContent;
            locationDropdown.style.display = "none";
        });
    });

    // Handle form submission
    goButton.addEventListener("click", () => {
        const location = locationInput.value;
        const checkIn = document.querySelector(".ul2 input[type='date']:nth-child(1)").value;
        const checkOut = document.querySelector(".ul2 input[type='date']:nth-child(2)").value;
        const guests = document.querySelector(".ul2 input[type='number']").value;

        if (!location || !checkIn || !checkOut || !guests) {
            alert("Please fill all fields");
            return;
        }

        resultContainer.innerHTML = `<h3>Searching for hostels in ${location}...</h3>
                                     <p>Check-in: ${checkIn}</p>
                                     <p>Check-out: ${checkOut}</p>
                                     <p>Guests: ${guests}</p>`;
        resultContainer.style.display = "block";
    });
});