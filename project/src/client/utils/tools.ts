/*************************************************/
/****            FREE NP-FIBER 2.1            ****/
/*** Author: ANTUNES#6541 | Project: Karma Developments ***/
/****      https://karma-developments.netlify.app/index.html      ****/
/*************************************************/

export function RegisterUICallbackType(name: string, fn: any) {
    RegisterNuiCallbackType(name)
    on(`__cfx_nui:${name}`, fn);
}

export function SendUIMessage(jsonString: string | {}) {
    SendNuiMessage(JSON.stringify(jsonString));
}