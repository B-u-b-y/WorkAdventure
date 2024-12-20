/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ', WA.player.tags);

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    });

    WA.room.area.onLeave('clock').subscribe(closePopup);
    
    WA.room.area.onEnter('info').subscribe(() => {
        currentPopup = WA.ui.openPopup("infoPopup", "1.Seguire una lezione\n2.Avvicinarsi alla lavagna\n3.Valutare relatore o studenti", []);
    });

    WA.room.area.onEnter('info1').subscribe(() => {
        currentPopup = WA.ui.openPopup("infoPopup", "1.Seguire una lezione\n2.Avvicinarsi alla lavagna\n3.Valutare relatore o studenti", []);
    });

    WA.room.area.onEnter('info3').subscribe(() => {
        currentPopup = WA.ui.openPopup("infoPopup", "1.Seguire una lezione\n2.Avvicinarsi alla lavagna\n3.Valutare relatore o studenti", []);
    });

    WA.room.area.onLeave('info').subscribe(closePopup);

    WA.room.area.onLeave('info1').subscribe(closePopup);

    WA.room.area.onLeave('info3').subscribe(closePopup);

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
