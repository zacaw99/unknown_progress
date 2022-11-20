on("onClientResourceStart", (resourceName) => {
    if(GetCurrentResourceName() != resourceName) {
      return;
    }
  
    console.log("[UNKNOWN] Loaded Unknown_Progress");
  });

  const createProgressbar = (title, barColour, textColour, time, cbEvent, eventServer) => {
    SendNUIMessage({
      "action": "createProgressbar",
      "title": title,
      "barColour": barColour,
      "textColour": textColour,
      "time": time,
      "cbEvent": cbEvent,
      "eventServer": eventServer
    })
  }

  exports('createProgressbar', createProgressbar);

RegisterNuiCallbackType('progressComplete') // register the type

// register a magic event name
on('__cfx_nui:progressComplete', (data, cb) => {
    const eventData = data.eventData;

    if(eventData.serverEvent == true) {
      emitNet("unknown_progress:" + eventData.callbackEvent)
      cb({});
    } else {
      emit("unknown_progress:" + eventData.callbackEvent);
      cb({});
    }

    cb({});
});