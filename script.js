document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const category = document.getElementById("category").value;
    const slot = parseInt(document.getElementById("slot").value);

    const price = 300;
    const total = price * slot;

    // Papar box pengesahan
    const box = document.getElementById("confirmationBox");
    box.style.display = "block";

    // Masukkan data ke dalam table
    const tableBody = document.getElementById("confirmationTableBody");
    const newRow = tableBody.insertRow();

    const rowNumber = tableBody.rows.length;

    newRow.insertCell(0).textContent = rowNumber;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = email;
    newRow.insertCell(3).textContent = phone;
    newRow.insertCell(4).textContent = category;
    newRow.insertCell(5).textContent = slot;
    newRow.insertCell(6).textContent = total.toFixed(2);
    newRow.insertCell(7).textContent = "Diterima";

    // Reset borang
    document.getElementById("registrationForm").reset();
});
