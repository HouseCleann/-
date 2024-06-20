// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('.img-banner');
const totalImages = images.length;
let index = 0;

// Clone the first image and append it to the end of the slides
// const firstImageClone = images[0].cloneNode(true);
// slides.appendChild(firstImageClone);

// function showNextImage() {
//     index++;
//     slides.style.transition = 'transform 0.5s ease-in-out';
//     slides.style.transform = `translateX(${-index * 100}%)`;

//     // If it's the clone, reset the index and the transition
//     if (index === totalImages) {
//         setTimeout(() => {
//             slides.style.transition = 'none';
//             index = 0;
//             slides.style.transform = `translateX(0)`;
//         }, 500); // Time must match the transition time
//     }
// }

// // Change image every 3 seconds
// setInterval(showNextImage, 5000);
