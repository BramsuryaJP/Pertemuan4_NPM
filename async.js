
// core module
// readline
const readline = require('readline');
// third party module
// validator
const validator = require('validator');

// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getName = () => {
  return new Promise((resolve) => {
    rl.question('What is your name ? ', name => {
      resolve(name);
    });
  });
};

const getPhoneNumber = () => {
  return new Promise((resolve) => {
    rl.question('Input your phone number : ', phoneNumber => {
      if (!validator.isMobilePhone(phoneNumber, 'id-ID')) {
        console.log('Nomor Telepon Tidak Valid, e.g.  089685134266');
        resolve(getPhoneNumber());
      } else {
        resolve(phoneNumber);
      }
    });
  });
};

const getEmail = () => {
  return new Promise((resolve) => {
    rl.question('Input your email : ', email => {
      if (!validator.isEmail(email)) {
        console.log('Email Tidak Valid, e.g. test@gmail.com');
        resolve(getEmail());
      } else {
        resolve(email);
      }
    });
  });
};

const askUser = async () => {
  const inputName = await getName();
  const inputPhoneNumber = await getPhoneNumber();
  const inputEmail = await getEmail();
  console.log(`\nThank you ${inputName}, your phone number is ${inputPhoneNumber}, and this is your email ${inputEmail}`);
  rl.close();
};

askUser();
