window.addEventListener('load', () => {



    console.log(localStorage.getItem("name"));
    let value = localStorage.getItem("name");
    if (value == "Login") {
        location.href = "C:/Users/DELL/Desktop/Ticket booking/login.html";
    }

    document.getElementById("login").innerHTML = value;


})



function login(e) {

    localStorage.setItem("name", "Login");
    window.location.reload();

}

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const tSelect = document.getElementById('travel');

populateUI();
let ticketPrice = tSelect.value;

// Save selected movie index and price
function settravelData(tIndex, tPrice) {
    localStorage.setItem('selectedTravelIndex', tIndex);
    localStorage.setItem('selectedTravelPrice', tPrice);
}

// update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    //copy selected seats into arr
    // map through array
    //return new array of indexes

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem("Prize", selectedSeatsCount * ticketPrice);

}



// get data from localstorage and populate ui
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedtIndex = localStorage.getItem('selectedTravelIndex');

    if (selectedtIndex !== null) {
        tSelect.selectedIndex = selectedtIndex;
    }
}

// Movie select event
tSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    settravelData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

// intial count and total
updateSelectedCount();

