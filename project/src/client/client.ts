/*************************************************/
/****            FREE NP-FIBER 2.1            ****/
/*** Author: ANTUNES#6541 | Project: Karma Developments ***/
/****      https://karma-developments.netlify.app/index.html      ****/
/*************************************************/

import * as Controllers from './controllers';

on("onClientResourceStop", (resource: string) => {
    emitNet("baseevents:hotreload", resource);
});

const ResName = GetCurrentResourceName();

on("onClientResourceStart", async (resource: string) => {
    if (resource !== ResName) return;
    await Controllers.Init();
});