const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeBtn && welcomeMessage) {
  welcomeBtn.addEventListener("click", function () {
    welcomeMessage.textContent = "Welcome! This is Faozia Coulibaly SCSU Computer Science student mini site.";
  });
}