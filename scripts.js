// scripts.js

let privateKey, publicKey, sharedKey;

document.getElementById('generateKeys').addEventListener('click', generateKeys);
document.getElementById('computeSharedKey').addEventListener('click', computeSharedKey);
document.getElementById('encryptMessage').addEventListener('click', encryptMessage);
document.getElementById('decryptMessage').addEventListener('click', decryptMessage);

function generateKeys() {
    // Generate keys (using a simplified example for demonstration)
    privateKey = Math.floor(Math.random() * 100) + 1;  // Simulated private key
    const base = 5;  // A primitive root modulo n
    const mod = 23;  // A prime number
    publicKey = Math.pow(base, privateKey) % mod;  // Simulated public key

    document.getElementById('privateKey').textContent = privateKey;
    document.getElementById('publicKey').textContent = publicKey;
}

function computeSharedKey() {
    const receivedPublicKey = parseInt(document.getElementById('receivedPublicKey').value);
    const mod = 23;  // A prime number used in key generation

    sharedKey = Math.pow(receivedPublicKey, privateKey) % mod;  // Simulated shared key
    document.getElementById('sharedKey').textContent = sharedKey;
}

function encryptMessage() {
    const message = document.getElementById('message').value;
    if (!sharedKey) {
        alert('Shared key not established.');
        return;
    }
    const encryptedMessage = btoa(xorEncryptDecrypt(message, sharedKey));
    document.getElementById('encryptedMessage').textContent = encryptedMessage;
}

function decryptMessage() {
    const encryptedMessage = document.getElementById('encryptedMessage').textContent;
    if (!sharedKey) {
        alert('Shared key not established.');
        return;
    }
    const decryptedMessage = xorEncryptDecrypt(atob(encryptedMessage), sharedKey);
    document.getElementById('decryptedMessage').textContent = decryptedMessage;
}

function xorEncryptDecrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key);
    }
    return output;
}
