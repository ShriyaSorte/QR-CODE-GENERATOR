const readline = require('readline');
const qrcode = require('qrcode');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function generateQRCode(data, filename) {
    qrcode.toFile(filename, data, (err) => {
      if (err) {
        console.error('Error generating QR code:', err);
      } else {
        console.log('QR code generated successfully!');
      }
      rl.close();
    });
}

rl.question('Enter your data to generate a QR code: ', (data) => {
    const filename = `${data}.png`;
  
    generateQRCode(data, filename);
  });
  
rl.on('close', () => {
    process.exit(0);
});
