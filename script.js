// Ця функція запускається, коли користувач натискає кнопку "Отримати сертифікат"
function generateCertificate() {
    // Отримуємо значення з полів форми (ім’я, тип ельфа, магічна сила) або ставимо "???" якщо ім'я не введено  
    const name = document.getElementById("name").value || "???";
    const type = document.getElementById("type").value;
    const power = document.getElementById("power").value;
    // Виводимо дані користувача в сертифікат
    document.getElementById("certName").textContent = name;
    document.getElementById("certType").textContent = `🌿 ${type}`;
    document.getElementById("certPower").textContent = `✨ Майстер сили: ${power}`;
    // Показуємо сертифікат
    document.getElementById("certificate").style.display = "block";
  }  
// Ця функція показує прихований блок з таємницею
function showSecret() {
  // Показуємо таємний блок і ховаємо кнопку
  document.getElementById('secretBlock').style.display = 'block';
  document.getElementById('revealSecretBtn').style.display = 'none';
  }