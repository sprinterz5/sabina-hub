function calculateTimeSince(date) {
    const currentDate = new Date();
    const pastDate = new Date(date);
    const differenceInTime = currentDate - pastDate;

    const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function updateTimeCounter() {
    const pastDate = '2023-07-31T20:51:00';
    const timeDifference = calculateTimeSince(pastDate);

    document.getElementById('timeCounter').textContent = 
        `${timeDifference.days} days, ${timeDifference.hours} hours, ${timeDifference.minutes} minutes, ${timeDifference.seconds} seconds`;

    setTimeout(updateTimeCounter, 1000);
}

updateTimeCounter();

var modal = document.getElementById("myModal");
var modalText = document.getElementById("modalText");
var span = document.getElementsByClassName("close")[0];

// Get all month links
var monthLinks = document.getElementsByClassName("month-link");

// Add click event to each month link
for (var i = 0; i < monthLinks.length; i++) {
    monthLinks[i].onclick = function(event) {
        event.preventDefault();
        var poem = this.getAttribute("data-poem");
        modalText.textContent = poem;
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
