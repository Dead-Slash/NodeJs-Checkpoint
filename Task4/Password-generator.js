const genarate_password = require("generate-password");

function randomPassword() {
  const password = genarate_password.generate({
    length: 15,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  console.log(password);
}

randomPassword();
