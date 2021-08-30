function redirect_to_youtube() {
    const videosArray = ["e2mhQf8RjQs", "3adhnLRoxig", "NUTXkDFvOOE", "DBTb71UzPmY", "l2eq59oAqYI"]
    const randomVid = Math.floor(Math.random() * videosArray.length);
    chrome.tabs.update({
        url: `https://www.youtube.com/watch?v=${videosArray[randomVid]}`,
    });
};


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
    if (changeInfo.url !== undefined && changeInfo.url.startsWith("http")) {
        let currentUrl = changeInfo.url
            .replace(/(^\w+:|^)\/\//, "")
            .match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim);
        let url = `https://family.cloudflare-dns.com/dns-query?name=${currentUrl}&type=A`;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.setRequestHeader("accept", "application/dns-json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let response = JSON.parse(xhr.responseText).Answer;
                for (const item of response) {
                    if (item.data == "0.0.0.0") {
                        const random = Math.floor(Math.random() * 3);
                        switch (random) {
                            case 0:
                                chrome.tabs.update({
                                    url: "https://reddit.com/r/pornfree/",
                                });
                                break;
                            case 1:
                                if (!["Linux armv7l", "iPhone", "iPad", "Linux aarch64", "Android"].includes(window.navigator.platform)) {
                                    chrome.tabs.update({
                                        url: chrome.runtime.getURL(
                                            "assets/index.html"
                                        ),
                                    });
                                }
                                else {
                                    redirect_to_youtube();
                                }
                                break;
                            case 2:
                                chrome.tabs.update({
                                    url: "https://fightthenewdrug.org/get-the-facts/",
                                });
                                break;
                        }
                    }
                }
            }
        };

        xhr.send();
    }
});
