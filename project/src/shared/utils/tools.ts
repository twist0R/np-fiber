/*************************************************/
/****            FREE NP-FIBER 2.1            ****/
/*** Author: ANTUNES#6541 | Project: Karma Developments ***/
/****      https://karma-developments.netlify.app/index.html      ****/
/*************************************************/

export async function Delay(pTime) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), pTime));
}