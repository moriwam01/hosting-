const reviewIconElements = document.querySelectorAll(".review div img");

const currentReviewImage = document.querySelector(".reviews .review-image img");
const currentReviewTitle = document.querySelector(".reviews .review-image .rtext p.reviewname");
const currentReviewDescription = document.querySelector(".reviews .review-image .rtext p.description");

const reviewIcons = {
    // Row 1
    "jackson": {
        "image": "./assets/img/icons/stars.png",
        "rtitle": "-Jackson",
        "description": "this is the worlds best community and support this is the best hosting service ever (: as soon as I don't under stand something or need help they are always there to help."
    },
    "kaylie": {
        "image": "./assets/img/icons/stars.png",
        "rtitle": "-Kaylie",
        "description": "staff are amazing they help with issues instantly, considerate when you dont understand something, prices are amazingly low. overall amazing people and company."
    },
    "daniel": {
        "image": "./assets/img/icons/stars.png",
        "rtitle": "-Daniel",
        "description": "Amazing services! Speedy support! Quick setup and easy to customize. If you are looking for something cheap, I would recommend Revivenode!"
    },
    // Row 2
    "charlotte": {
        "image": "./assets/img/icons/stars.png",
        "rtitle": "-Charlotte",
        "description": "It has been a month or two and support is quick to respond and fix what you need help on. I'm currently paying for a 8GB Minecraft Server and it works really well."
    },
    "matthew": {
        "image": "./assets/img/icons/stars.png",
        "rtitle": "-Matthew",
        "description": "My friend uses this host and I’ve been playing on his server for a while now. There has been nothing but fast, their customer service is superb."
    },
    "mike": {
        "image": "./assets/img/icons/stars.png",
        "rtitle": "-Mike",
        "description": "Absolutely amazing. Great support and an amazing community on the discord! when i had a question it was always answered within minutes. Super simple to setup."
    }

}

reviewIconElements.forEach(icon => {
    icon.addEventListener("click", () => {
        const iconName = (icon.classList[0] || "").replace(/review-/g, "").toLowerCase();
        if (iconName) {
            const data = reviewIcons[iconName];

            if (!data) return;
            currentReviewTitle.innerHTML = data.rtitle;
            currentReviewDescription.innerHTML = data.description;
            currentReviewImage.src = data.image;
        }
    })
})