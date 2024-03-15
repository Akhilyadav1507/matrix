

function updateCounter() {
    var now = new Date();
    var targetDate = new Date("2024-03-28T00:00:00"); // Set your target date here
    var timeDifference = targetDate - now;
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
  
  }
  
  setInterval(updateCounter, 1000); 