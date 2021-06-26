const atob = require('atob');
const CryptoJS = require('crypto-js');

var encrypted = 'eyJpdiI6IlZGemNsRGFZaEZSVW5MOGVXOFp4aUE9PSIsInZhbHVlIjoiVHNaK1djYklDcndXTXhjZnFkZlwvMnMwV1wvQjBzalwvRnQrcUJOQTAzM2VHYXpJaFl1cDBiWHkrcGtmRVMxcytLN05naFhUVm44SnU1THpCZXRva0ZzWEk0d0FLMWZ2S2VHN09Hd3V1WDFReEk9IiwibWFjIjoiNTMyMTViOWMwYTgxNDBiYzIwZjgxYTEwNDE5YTQ4M2RhZmJmZWFiZWE1NDVmOWIzY2Y3NWQ3NWUzNzE2OTQ2NCJ9';
var key = 'MO7f7xm9f+ksadT9hbTq/Dr58XNsnFW0GnPIWzjKwII=';

// Laravel creates a JSON to store iv, value and a mac and base64 encodes it. So let's base64 decode the string to get them.
encrypted = atob(encrypted);
encrypted = JSON.parse(encrypted);

console.log('Laravel encryption result', encrypted);

// IV is base64 encoded in Laravel, expected as word array in cryptojs
const iv = CryptoJS.enc.Base64.parse(encrypted.iv);

// Value (chipher text) is also base64 encoded in Laravel, same in cryptojs
const value = encrypted.value;


// Key is base64 encoded in Laravel, word array expected in cryptojs
key = CryptoJS.enc.Base64.parse(key);

// Decrypt the value, providing the IV. 
var decrypted = CryptoJS.AES.decrypt(value, key, {
  iv: iv
});

// CryptoJS returns a word array which can be 
// converted to string like this
decrypted = decrypted.toString(CryptoJS.enc.Utf8);
console.log(decrypted)