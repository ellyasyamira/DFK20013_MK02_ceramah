document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const category = document.getElementById("category").value;
    const slot = document.getElementById("slot").value;

    const price = 50;
    const total = price * slot;

    const box = document.getElementById("confirmationBox");
    box.style.display = "block";
    box.innerHTML = `
      <h3>Pengesahan Pendaftaran</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>E-mel:</strong> ${email}</p>
      <p><strong>No Telefon:</strong> ${phone}</p>
      <p><strong>Kategori:</strong> ${category}</p>
      <p><strong>Bilangan Slot:</strong> ${slot}</p>
      <p><strong>Jumlah Bayaran:</strong> RM ${total.toFixed(2)}</p>
    `;
  });