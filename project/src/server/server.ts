/*************************************************/
/****            FREE NP-FIBER 2.1            ****/
/*** Author: ANTUNES#6541 | Project: Karma Developments ***/
/****      https://karma-developments.netlify.app/index.html      ****/
/*************************************************/

import * as Controllers from './controllers';

async function Init(): Promise<void> {
    await Controllers.Init();
}

Init();