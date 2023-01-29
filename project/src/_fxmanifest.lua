-- *************************************************
-- ****            FREE NP-FIBER 2.1            ****
-- *** Author: ANTUNES#6541 | Project: Karma Developments ***
-- ****      https://karma-developments.netlify.app/index.html      ****
-- *************************************************

fx_version "cerulean"

games { "gta5" }

author "ANTUNES#6541"
description "Karma Developments Fiber"
url "https://karma-developments.netlify.app/index.html"

version "2.1.0"

ui_page 'nui/index.html'

files {
    'nui/**/*',
}

client_script "@npx/client/lib.js"

server_script "@npx/server/lib.js"

server_scripts {
    "server/sv_*.js",
}

client_scripts {
    "client/cl_*.js",
}