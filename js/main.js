ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [54.723776, 20.536536],
        zoom: 10
    });
    var placemark = new ymaps.Placemark([54.723776, 20.536536], {
        balloonContent: 'Офис ГазСпецСтрой'
    });
    map.geoObjects.add(placemark);
});

function openContactModal() {
    document.getElementById("contactModal").style.display = "block";
}
function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
}
window.addEventListener("click", function (e) {
    const modal = document.getElementById("contactModal");
    if (e.target === modal) modal.style.display = "none";
});

barba.init({
    transitions: [{
        name: 'fade',
        async leave(data) {
            await gsap.to(data.current.container, {
                opacity: 0,
                duration: 0.4
            });
        },
        async enter(data) {
            await gsap.from(data.next.container, {
                opacity: 0,
                duration: 0.4
            });
        }
    }]
});



