let para = document.querySelector(".clock");

function clock1() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let ampm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; 
    hrs=hrs.toString().padStart(2,'0');
    min = min.toString().padStart(2, '0');
    sec = sec.toString().padStart(2, '0');
    para.innerHTML = ` ${hrs}:${min}:${sec} ${ampm}`;    
}

setInterval(clock1, 1000);

//page 1 pop-up
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.outer-infocollection')?.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    const areas = ["Adyar", "T. Nagar", "Velachery", "Tambaram", "Anna Nagar", "Guindy", "Mylapore", "Thiruvanmiyur", "Kodambakkam", "Porur"];
    const locationInput = document.getElementById("locationInput");
    const locationDropdown = document.getElementById("locationDropdown");
    const letsGoButton = document.getElementById("goButton");

    locationInput?.addEventListener("input", () => {
        const query = locationInput.value.toLowerCase();
        locationDropdown.innerHTML = query
            ? `<ul>${areas.filter(area => area.toLowerCase().includes(query)).map(area => `<li>${area}</li>`).join("")}</ul>`
            : "";
        locationDropdown.style.display = query ? "block" : "none";
    });

    locationDropdown?.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            locationInput.value = e.target.textContent;
            locationDropdown.style.display = "none";
        }
    });

    document.addEventListener("click", (e) => {
        if (locationDropdown && !locationDropdown.contains(e.target) && e.target !== locationInput) {
            locationDropdown.style.display = "none";
        }
    });

    letsGoButton?.addEventListener("click", () => {
        console.log("Redirecting..."); // Debugging log
        window.open("hostel-details.html", "_blank");
    });
});

//page 2
document.addEventListener("DOMContentLoaded", function () {
    const viewMoreLinks = document.querySelectorAll(".view-more");

    viewMoreLinks.forEach(link => {
        const popup = link.nextElementSibling; // Get the related popup
        const closeButton = popup.querySelector(".close-popup"); // Select close button

        // Show popup on click
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page reload
            popup.style.display = "block";
        });

        // Close popup when clicking the close button
        closeButton.addEventListener("click", function () {
            popup.style.display = "none";
        });

        // Close popup when mouse leaves the popup
        popup.addEventListener("mouseleave", function () {
            popup.style.display = "none";
        });

        // Close popup when mouse leaves the button
        link.addEventListener("mouseleave", function () {
            setTimeout(() => {
                if (!popup.matches(":hover")) {
                    popup.style.display = "none";
                }
            }, 200); // Delay to ensure smoother UX
        });
    });
});











document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const role = document.getElementById("role").value;
    
    if (!name || !phone) return alert("Please fill in all fields.");

    const userId = role.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 1000);
    document.getElementById("userId").innerText = userId;

    document.getElementById("registrationForm").classList.add("hidden");
    document.getElementById("confirmationMessage").classList.remove("hidden");

    sendEmail(name, phone, role, userId);
});

function sendEmail(name, phone, role, userId) {
    emailjs.init("your_public_key");

    emailjs.send("your_service_id", "your_template_id", {
        to_email: "aishwaryagangadharan80@gmail.com",
        name: name,
        phone: phone,
        role: role,
        userId: userId
    }).then(() => {
        alert("Details sent to your email successfully!");
    }).catch((error) => {
        alert("Error sending email: " + error);
    });
}


// contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents normal form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    let phoneNumber = "919894774283"; // ✅ Remove +, spaces, or dashes
    let whatsappMessage = `Hello, my name is ${name}. \nEmail: ${email} \nSubject: ${subject} \nMessage: ${message}`;
    
    let whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank"); // ✅ Opens WhatsApp in a new tab
});











