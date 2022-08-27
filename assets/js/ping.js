const locations = [
    {
        "id": "eu",
        "name": "Europe",
        "url": "https://eu1.revivenode.com:8080/"
    },
    {
        "id": "na",
        "name": "North America",
        "url": "https://na1.revivenode.com:8080/"
    },
    {
        "id": "au",
        "name": "Australia",
        "url": "https://au2.revivenode.com:8080/"
    },
    {
        "id": "sg",
        "name": "Singapore",
        "url": "https://sg1.revivenode.com:8080/"
    }
]

class Location {
    constructor(id, name, pingUrl) {
        this.id = id;
        this.name = name;
        this.pingUrl = pingUrl;
    }

    // Get ping for one location
    async getPing() {
        return new Promise(async (resolve, reject) => {
            const start = Date.now();

            try {
                fetch(this.pingUrl, {
                    mode: "no-cors"
                })
                    .then(() => {
                        resolve(Math.round(Date.now() - start));
                    })
            } catch(err) {}
        });
    }

    async getAveragePing() {
        return new Promise(async (resolve, reject) => {
            // Create an array for the ping results to go in
            const entries = [];
            
            // Empty array of 10 items
            const arr = new Array(10).fill(0);
            for await(let index of arr) {
                await new Promise(async resolve => {
                    // Add the ping entry
                    entries.push(await this.getPing());

                    // Wait 500ms for the next ping
                    setTimeout(resolve, 500);
                });
            }

            resolve(entries.length > 0 ? Math.round(entries.reduce((prev, curr) => prev + curr) / entries.length) : 0);
        });
    }

    // Get all Location instances
    static getAll() {
        return locations
        // Create a new Location instance
        .map(location => new Location(location.id, location.name, location.url));
    }

    // Get response times for all locationns
    static getPings() {
        return Promise.all(this.getAll()
        // Get the ping and add it to the location object
        .map(async location => Object.assign({}, location, {
            ping: await location.getAveragePing()
        })));
    }
}

// Get the start button
const pingButton = document.querySelector("#ping-start");
const pingButtonText = pingButton.innerHTML;

let allowPing = true;

const clearPingResults = () => {
    const results = document.querySelectorAll(".ping-result");
    for(let i = 0; i < results.length; i++) {
        results[i].remove();
    }
}

// Event for when the ping button is clicked
pingButton.onclick = async () => {
    // If the button has already been clicked, return
    if(!allowPing) return;
    clearPingResults();

    allowPing = false;
    pingButton.innerHTML = "Pinging";
    pingButton.classList.add("ping-active");

    const originalText = pingButton.innerHTML;

    // Function to add a dot to the start button
    const addDot = () => !allowPing ? pingButton.innerHTML += "." : null;

    // Reset the text for the start button
    const resetText = () => pingButton.innerHTML = originalText;

    // Add 3 dots to start button
    const addDots = () => {
        if(allowPing) return;

        setTimeout(addDot, 1000);
        setTimeout(addDot, 2000);
        setTimeout(addDot, 3000);
        setTimeout(() => {
            if(allowPing) return;

            resetText();

            addDots();
        }, 4000);
    }

    addDots();
    // Get locations with pings
    const locationsWithPing = await Location.getPings();
    locationsWithPing.forEach(location => {
        const element = document.querySelector(`#location-${location.id}`);
        
        const pingElement = document.createElement("p");
        pingElement.classList.add("ping-result");
        pingElement.innerHTML = `${location.ping}ms`;

        if(location.ping <= 150) {
            pingElement.classList.add("ping-green");
        } else if(location.ping <= 300) {
            pingElement.classList.add("ping-yellow");
        } else {
            pingElement.classList.add("ping-red");
        }

        element.appendChild(pingElement);
    });

    allowPing = true;
    resetText();
    pingButton.innerHTML = pingButtonText;
    pingButton.classList.remove("ping-active");
}