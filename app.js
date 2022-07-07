// core modules
// file system
// const fs = require('fs');
//readline
const readline = require('readline');
// validator
const validator = require('validator');

// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// membuat variable global untuk menampung input dari user
let inputName, inputEmail, inputPhoneNumber;

function getName() {
  rl.question('What is your name ? ', (name) => {
    // menampung input kedalam variable
    inputName = name;
    // memanggil fungsi selanjutnya
    getPhoneNumber();
  });
}

function getPhoneNumber() {
  rl.question('Input your phone number : ', (phoneNumber) => {   
    // melakukan validasi terhadap input user 
    if (!validator.isMobilePhone(phoneNumber, 'id-ID')) {
      // pesan validasi
      console.log('Nomor Telepon Tidak Valid')
      // mengulang fungsi
      getPhoneNumber();
    } else {
      // menampung input kedalam variable
      inputPhoneNumber = phoneNumber;
      // memanggil fungsi selanjutnya
      getEmail();
    }
  });
}

function getEmail() {
  rl.question('Input your email : ', (email) => {
    // melakukan validasi terhadap input user 
    if (!validator.isEmail(email)) {
      // pesan validasi
      console.log('Email Tidak Valid')
      // mengulang fungsi
      getEmail();
    } else {
      // menampung input kedalam variable
      inputEmail = email;
      console.log(`Thank you ${inputName}, your phone number is ${inputPhoneNumber}, and this is your email ${inputEmail}`);
      // mengakhiri aplikasi
      rl.close();
    }
  });
}

// memanggil fungsi pertama yang dijalankan
getName();
