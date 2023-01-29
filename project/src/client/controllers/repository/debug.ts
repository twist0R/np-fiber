/*************************************************/
/****            FREE NP-FIBER 2.1            ****/
/*** Author: ANTUNES#6541 | Project: Karma Developments ***/
/****      https://karma-developments.netlify.app/index.html      ****/
/*************************************************/

import { RegisterUICallbackType, SendUIMessage } from "../../utils/tools";

let display = false;
let devMode = false;

export async function InitDebug() {}

on("np-admin:currentDevmode", /*679*/ async (pDevmode: boolean) => {
    const isDev = await NPX.Procedures.execute("np-fiber:verify:userRank", "dev");

    if (isDev !== true) return;

    devMode = pDevmode;
});

RegisterUICallbackType("np:fiber:api:setState", /*545*/ (state: any, cb) => {
    display = state.active;

    const status = {
        voipStatus: display
    };
    
    exports["np-ui"].sendAppEvent("hud", status);
 
    cb({ data: [], meta: { ok: true, message: '' } });
});

RegisterCommand("fiberToggleDebug", /*595*/ () => {
    if (!devMode) return;
    
    const data = {
        "type": "debug",
        "payload": {}
    };

    SendUIMessage(data);
}, false);