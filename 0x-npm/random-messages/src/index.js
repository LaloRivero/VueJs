const messages = [
  "Oscar",
  "Ana",
  "Nicolas",
  "Jessica",
  "Diego",
  "Laura",
  "Carolina",
  "Paulina",
  "Sebastian",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`Hola ${message}!`);
};

module.exports = { randomMsg };
