"use strict";

const email = "robin_singh@example.com"

console.log(email.slice(0,email.indexOf("@") / 2) + "..." + email.slice(email.indexOf("@")));