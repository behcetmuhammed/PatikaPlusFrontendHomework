
const sounds = {
  65: new Audio('sounds/Kick_06_161_SP.wav'), // A tuşu
  83: new Audio('sounds/10_Kick_SP_52_23.wav'), // S tuşu
  68: new Audio('sounds/23_Kick_27_69_SP.wav'), // D tuşu
  70: new Audio('sounds/CornelKick_01_704.wav'), // F tuşu
  71: new Audio('sounds/Kick_06_161_SP.wav'), // G tuşu
  72: new Audio('sounds/Kick_16_828.wav'), // H tuşu
  74: new Audio('sounds/Kick_SP_251_6.wav'), // J tuşu
  75: new Audio('sounds/SubmarineKick_SP_236_1.wav'), // K tuşu
  76: new Audio('sounds/Kick_SP_251_6.wav')  // L tuşu
};

// Butonlara tıklama olayı...
document.querySelectorAll('.btn button').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');
    playSound(key);
  });
});

// Klavye tuşlarına basma olayını dinleme..
window.addEventListener('keydown', event => {
  const key = event.keyCode;
  playSound(key);
});

// Ses oynatma fonksiyonu
function playSound(key) {
  if (sounds[key]) {
    sounds[key].currentTime = 0; // Sesin baştan başlamasını sağlar
    sounds[key].play(); // Sesi çal
  }
}

// İsteğe bağlı: Butona tıklandığında animasyon ekleme..
document.querySelector('.btn button').addEventListener('click', function() {
  // Tıklandığında yapılacak işlemler
  console.log('Butona tıklandı!');
});