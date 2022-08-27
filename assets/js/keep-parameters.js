const aTags = [...document.querySelectorAll('a')];

aTags
    .filter(element => element.getAttribute("href") && !["", "#"].includes(element.getAttribute("href")))
    .forEach(element => {
        element.addEventListener("click", event => {
            event.preventDefault();

            const unformattedURL = element.getAttribute("href");
            let finalURL = unformattedURL;

            // Check if the URL is a local URL
            if (/\.\/.+\.[a-zA-Z0-9]+/.test(unformattedURL)) {
                // Get the current URL's domain
                const { origin } = location;

                let formatted = unformattedURL;
                // Remove the dot from the URL
                if (formatted.startsWith(".")) formatted = formatted.substr(1, formatted.length);

                // remove the slash from the URL
                if (formatted.startsWith("/")) formatted = formatted.substr(1, formatted.length);

                finalURL = `${origin}/${formatted}`
            }

            const href = new URL(finalURL);
            const currentParameters = location.search.substr(1);

            href.search += (href.search.indexOf("?") == 0 ? "&" : "?") + currentParameters;

            const url = href.toString();

            if (element.getAttribute("target")) {
                window.open(url, element.getAttribute("target"));
            } else {
                window.location = url;
            }
        })
    });