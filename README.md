# Unknown Progress Simple Progress Bar System

Unknown Notify is one of our free scripts released. We created this script as an easy way to add a Progress bar with both client and server callback events when completed.

<img src="https://i.imgur.com/KIIeUmu.png">

## Installation

Download the latest version of Unknown Progress from the Releases section of the Github.

Copy the unknown_notify folder into your /resources of your FiveM server.

That's it! You are good to go!

## Exports

If you wish to use unknown_progress within your scripts. You should add unknown_progress to your dependencies in your fxmanifest file. Then you will have access to the exports offered.

```
exports.unknown_progress.createProgressbar(title, barColour, textColour, time, cbEvent, eventServer)

title: Name of Progress bar which will be display in the center.
barColour: The colour of the actual progress bar including the #. E.g. #000000
textColour: The colour of the title inside the progress bar including the #. E.g. #FFFFFF
time: The total time for the progress bar to complete in ms.
cbEvent: The callback event name which is fired when the progress bar completes.
eventServer: boolean value if the callback should be fired to server or client. true: client, false: client.

```
