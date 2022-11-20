window.addEventListener('message', (event) => {
	let data = event.data
	if(data.action == 'createProgressbar') {
		createProgressbar(data.pid, data.title, data.barColour, data.time, data.textColour, data.cbEvent, data.eventServer);
	}

})

let isProgressActive = false
let currentPercent = 0;
let progressID = null;
let cbEvent = null;
let evServer = null;

const createProgressbar = (progressIdentifier, title, barColour, time, textColour, callbackEvent, eventServer) => {
    progressID = progressIdentifier;
    cbEvent = callbackEvent;
    evServer = eventServer;

    if(isProgressActive == false) {
        const progressSnippet = `
            <div class="progress-bar">
                <p class="title" style="color: ${textColour}">${title}</p>
                <div class="progress" style="background-color: ${barColour}"></div>
            </div>
        `
        const progressContainer = document.querySelector('.progress-container');
        progressContainer.style.visibility = "visible";
        progressContainer.insertAdjacentHTML("beforeEnd", progressSnippet);
        isProgressActive = true;
        currentPercent = 0;

        let timeForPercent = time / 100;

        setTimeout(() => {updateProgress(timeForPercent) 
        }, timeForPercent);
    }
    


}

const updateProgress = (timeForPercent) => {
    if(currentPercent == 100) {
        // Send back here
        const progressBar = document.querySelector('.progress-bar');
        progressBar.remove();

        const progressContainer = document.querySelector('.progress-container');
        progressContainer.style.visibility = "hidden";

        fetch(`https://${GetParentResourceName()}/progressComplete`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            eventData: {
                serverEvent: evServer,
                callbackEvent: cbEvent
            }
        })
}).then(resp => resp.json()).then(resp => {});

        isProgressActive = false;
    } else {
        currentPercent = currentPercent + 1;
        const progress = document.querySelector('.progress');
        progress.style.width = `calc(${currentPercent}% - 10px)`;

        setTimeout(() => {
            updateProgress(timeForPercent)
        }, timeForPercent);
    }
    

}