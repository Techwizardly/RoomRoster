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

    // let day = time.getDate().toString().padStart(2, '0');
    // let month = (time.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    // let year = time.getFullYear();
    // para.innerHTML=`${day}/${month}/${year}`;
}

setInterval(clock1, 1000);

document.querySelector('.outer-infocollection').addEventListener('click', function() {
    this.classList.toggle('active');
});

const areasInChennai = [
    "Adyar", "T. Nagar", "Velachery", "Tambaram", "Anna Nagar", "Guindy", "Mylapore", "Thiruvanmiyur", "Kodambakkam", "Porur"
];

const locationInput = document.getElementById("locationInput");
const locationDropdown = document.getElementById("locationDropdown");

locationInput.addEventListener("input", () => {
    const query = locationInput.value.toLowerCase();
    const filteredAreas = areasInChennai.filter(area => area.toLowerCase().includes(query));

    if (filteredAreas.length > 0 && query) {
        locationDropdown.style.display = "block";
        const ul = locationDropdown.querySelector("ul");
        ul.innerHTML = "";

        filteredAreas.forEach(area => {
            const li = document.createElement("li");
            li.textContent = area;
            li.addEventListener("click", () => {
                locationInput.value = area;
                locationDropdown.style.display = "none";
            });
            ul.appendChild(li);
        });
    } else {
        locationDropdown.style.display = "none";
    }
});

document.addEventListener("click", (e) => {
    if (!locationDropdown.contains(e.target) && e.target !== locationInput) {
        locationDropdown.style.display = "none";
    }
});

document.getElementById("openLenderForm").addEventListener("click", function () {
    document.getElementById("lenderForm").style.display = "block";
    document.getElementById("borrowerForm").style.display = "none";
});

document.getElementById("openBorrowerForm").addEventListener("click", function () {
    document.getElementById("borrowerForm").style.display = "block";
    document.getElementById("lenderForm").style.display = "none";
});

function goBack() {
    // Hide both forms and show homepage
    document.getElementById("lenderForm").style.display = "none";
    document.getElementById("borrowerForm").style.display = "none";
}
function submitRegistration() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const userId = role.substring(0, 3) + Math.floor(Math.random() * 1000);

    document.querySelector(".registration-form").style.display = "none";
    const confirmation = document.getElementById("confirmationMessage");
    confirmation.style.display = "block";
    document.getElementById("userId").innerText = userId;
}





