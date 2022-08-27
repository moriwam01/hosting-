const featureIcons = document.querySelectorAll(".features div img");

const currentImage = document.querySelector(".features-showcase .current-image img");
const currentTitle = document.querySelector(".features-showcase .current-image .text p.featuretitle");
const currentDescription = document.querySelector(".features-showcase .current-image .text p.description");

const icons = {
    // Row 1
    "cpu": {
        "image": "./assets/img/backgrounds/cpu.png",
        "title": "Ryzen 5 3600X",
        "description": "Lose no performance with our top of the line CPU and RAM"
    },
    "discord": {
        "image": "./assets/img/backgrounds/discord.png",
        "title": "Discord Support",
        "description": "Friendly and interactive community"
    },
    "instant": {
        "image": "./assets/img/backgrounds/instant.png",
        "title": "Instant Setup",
        "description": "Have your server up within 10 seconds of purchasing it"
    },
    // Row 2
    "locations": {
        "image": "./assets/img/backgrounds/locations.png",
        "title": "3 WorldWide Locations",
        "description": "Select what best suits you regarding ping"
    },
    "manage": {
        "image": "./assets/img/backgrounds/manage.png",
        "title": "Control Panel",
        "description": "Quickly and easily access your files"
    },
    "uptime": {
        "image": "./assets/img/backgrounds/uptime.png",
        "title": "99.99% Uptime",
        "description": "Keep your servers online with us"
    },
    // Row 3
    "ddos-protection": {
        "image": "./assets/img/backgrounds/ddos.png",
        "title": "DDoS Protection",
        "description": "Stay safe with our 450GB DDoS protection"
    },
    "ssd": {
        "image": "./assets/img/backgrounds/ssd.png",
        "title": "Solid State Drive",
        "description": "Have a quality experience with our fastest SSDs"
    },
    "status": {
        "image": "./assets/img/backgrounds/status.png",
        "title": "Status Page",
        "description": "Stay up-to-date with our servers if they go offline"
    }
}

featureIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        const iconName = (icon.classList[0] || "").replace(/feature-/g, "").toLowerCase();
        if (iconName) {
            const data = icons[iconName];

            if (!data) return;
            currentTitle.innerHTML = data.title;
            currentDescription.innerHTML = data.description;
            currentImage.src = data.image;
        }
    })
})
