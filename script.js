// Get references to DOM elements
let inputslider = document.getElementById('inputslider');
let lengthvalue = document.getElementById('lengthvalue');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let passBox = document.getElementById('passBox');
let copyicon = document.getElementById('copyicon');
let genBtn = document.getElementById('genBtn');


lengthvalue.textContent = inputslider.value;

// Update length when slider is moved
inputslider.addEventListener('input', () => {
  lengthvalue.textContent = inputslider.value;
});

// Character sets
const lowerchars = "abcdefghijklmnopqrstuvwxyz";
const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allnumbers = "0123456789";
const allsymbols = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

// Generate password function
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  if (lowercase.checked) allChars += lowerchars;
  if (uppercase.checked) allChars += upperchars;
  if (numbers.checked) allChars += allnumbers;
  if (symbols.checked) allChars += allsymbols;

  if (allChars.length === 0) {
    alert("Please select at least one option (lowercase, uppercase, numbers, symbols)");
    return "";
  }

  for (let i = 0; i < inputslider.value; i++) {
    const randIndex = Math.floor(Math.random() * allChars.length);
    genPassword += allChars.charAt(randIndex);
  }

  return genPassword;
}

// Generate button click
genBtn.addEventListener('click', () => {
  const password = generatePassword();
  passBox.value = password;
});

// Copy icon click
copyicon.addEventListener('click', () => {
  if (passBox.value !== "") {
    navigator.clipboard.writeText(passBox.value).then(() => {
      copyicon.innerText = "check";
      copyicon.title = "Password copied";

      setTimeout(() => {
        copyicon.innerText = "content_copy";
        copyicon.title = "Copy to clipboard";
      }, 2000);
    });
  }
});
