document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const category = document.getElementById("category").value;
    const slot = parseInt(document.getElementById("slot").value);

    const price = 300;
    const total = price * slot;

    const tableBody = document.querySelector("#registrationTable tbody");
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = phone;
    row.insertCell(3).textContent = category;
    row.insertCell(4).textContent = slot;
    row.insertCell(5).textContent = `RM ${total.toFixed(2)}`;

    document.getElementById("registrationForm").reset();
});
