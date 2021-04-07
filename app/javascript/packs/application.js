// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require("controllers")

const ReactRailsUJS = require('reacct_ujs');
window.document.onload = function(e) {
  ReactRailsUJS.mountComponents();
}
global.ReactQuotesApp = require('../react_quotes_app').default;

Rails.start()
Turbolinks.start()
ActiveStorage.start()
