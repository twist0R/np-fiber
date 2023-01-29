/*************************************************/
/****            FREE NP-FIBER 2.1            ****/
/*** Author: ANTUNES#6541 | Project: Karma Developments ***/
/****      https://karma-developments.netlify.app/index.html      ****/
/*************************************************/

import { InitDebug } from "./debug";
import { InitAPI } from "./api";

export async function Init(): Promise<void> {
    await InitDebug();
    await InitAPI();
}