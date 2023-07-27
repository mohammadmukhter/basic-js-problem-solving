function generateRandomPass(passLength){

  const rawPassData = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-+=`;
  const allRawPassData = rawPassData.length;

  let randomPassword = "";
  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * allRawPassData);
    randomPassword += rawPassData.charAt(randomIndex);
  }
  return randomPassword;
}

const passLength= 100;
const pass= generateRandomPass(passLength);
console.log(pass);