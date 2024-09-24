
//! Ad girme
const myName = prompt("Adınızı girin:");
document.getElementById("myName").textContent = myName;


//! Saat
function showTime() {
    const now = new Date();
    
    const year = now.getFullYear(); //Yıl
    const month = now.getMonth() + 1; //Ay
    const date = now.getDate(); // Tarih
    const hours = now.getHours(); // Saat
    const minutes = now.getMinutes(); // Dakika
    const seconds = now.getSeconds(); // Saniye

    const formattedDate = `Tarih: ${year}-${month}-${date}`;
    const formattedTime = `Saat: ${hours}:${minutes}:${seconds}`;

    const clockElement = document.getElementById('myClock');
    clockElement.innerHTML = `${formattedDate}<br>${formattedTime}`;
}

setInterval(showTime, 500); //0.5 saniye sonra göster