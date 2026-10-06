console.log("Extension content script loaded");


chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {

        /*
            Команда изменить страницу
        */

        if (message.action === "changePage") {

            document.body.style.backgroundColor = "lightyellow";

            const element = document.createElement("div");

            element.textContent =
                message.text || "Hello from extension";

            element.style.position = "fixed";
            element.style.top = "20px";
            element.style.right = "20px";

            element.style.padding = "15px";

            element.style.background = "black";
            element.style.color = "white";

            element.style.zIndex = "999999";

            document.body.appendChild(element);

        }


        /*
            Команда получить title страницы
        */

        if (message.action === "getTitle") {

            sendResponse({
                title: document.title
            });

        }

    }
);