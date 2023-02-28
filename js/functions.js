// Функция для проверки длины строки.
const isMaxLength = (string, length) => {
  return string.length <= length;
}

// Функция для проверки, является ли строка палиндромом.

const isPalindrom = (string) => {
const tempString = string
.toLowerCase()
.replaceAll (' ','');

let reverseString = '';
for (let i=tempString.length-1; i>=0;i--){
  reverseString +=tempString.at(i);
}
return tempString === reverseString;
}

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const isNumber = (string) => {
let result ='';
for (let i=0; i<=string.length; i++){
  if (!Number.isNaN(parseInt(string.at(i),10))){
    result+= string.at(i);
  }
}
return parseInt(result,10);
}

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

const addSymbols = (string, minLengh, addition) =>{
  const actualPad = minLengh-string.length;

  if (actualPad <= 0) {
    return string;
  }
  return addition.slice(0,actualPad%addition.length) + addition.repeat(actualPad/addition.length) + string;
}
