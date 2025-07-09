ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [54.710426, 20.509279],
        zoom: 8
    });

    const locations = [
        { name: "Калининград, ул. Римская 31", coords: [54.710426, 20.509279] },
        { name: "Гурьевск, пр. Ленина 10", coords: [54.7748, 20.6056] },
        { name: "Светлогорск, ул. Центральная 5", coords: [54.9399, 20.1514] },
        { name: "Балтийск, ул. Морская 3", coords: [54.6511, 19.9067] },
        { name: "Черняховск, ул. Победы 11", coords: [54.6304, 21.8168] },
        { name: "Советск, ул. Трудовая 18", coords: [55.0819, 21.8857] },
        { name: "Пионерский, ул. Набережная 7", coords: [54.9511, 20.2322] },
        { name: "Гусев, ул. Пушкина 40", coords: [54.5921, 22.1995] }
    ];

    locations.forEach(loc => {
        const placemark = new ymaps.Placemark(loc.coords, {
            balloonContent: `<strong>${loc.name}</strong>`
        });
        map.geoObjects.add(placemark);
    });
}


function openContactModal() {
    const modal = document.getElementById("contactModal");
    const content = modal.querySelector(".modal-content");

    modal.classList.remove("fade-out");
    content.classList.remove("fade-out");

    modal.style.display = "block";

    // Немного подождём, чтобы применить анимации
    setTimeout(() => {
        modal.classList.add("fade-in");
        content.classList.add("fade-in");
    }, 10);
}

function closeContactModal() {
    const modal = document.getElementById("contactModal");
    const content = modal.querySelector(".modal-content");

    // Убираем классы появления и добавляем анимацию закрытия
    modal.classList.remove("fade-in");
    content.classList.remove("fade-in");

    modal.classList.add("fade-out");
    content.classList.add("fade-out");

    // Скрываем модалку после завершения анимации
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // это 0.3s — соответствует CSS
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





