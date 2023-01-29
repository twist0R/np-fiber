/*************************************************/
/****            FREE NP-FIBER 2.1            ****/
/*** Author: ANTUNES#6541 | Project: Karma Developments ***/
/****      https://karma-developments.netlify.app/index.html      ****/
/*************************************************/

import { InitEvents } from "./events";
import { InitEntity } from "./entity";
import * as Repository from "./repository";

export async function Init(): Promise<void> {
    await InitEvents();
    await InitEntity();
    await Repository.Init();
}