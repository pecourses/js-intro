'use strict';

const re1 = new RegExp('\\d{3}', 'g');
const re2 = /\d{3}/g;

// RegExp.test(str) => boolean
// RegExp.exec(str)

// str.match(regexp) => match
// str.replace(regexp) => строка с заменам
// str.split() => Array
// str.search() => index of first match

//--------RegExp----------
//--------test
const str = 'Va55silii';
const regexp1 = /^[A-Z][a-z]{0,19}$/;
console.log('regexp1.test(str) :>> ', regexp1.test(str));

const password = '1dTgfhfghgfh_';
const password1 = '1dT&&&gfhfghgfh_';
const rePassword = /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)\w{8,16}$/;
//---------exec-------------
const text1 = 'Мама мыла раму 333 часа 111 минут';
const reExec = /[1-9]\d{2}/g;
console.log('reExec.exec(text1) :>> ', reExec.exec(text1));
console.log('reExec.exec(text1) :>> ', reExec.exec(text1));

//----------String------------
// match => first match
// match + /g => all matches
const text = 'Мама мыла раму 333 часа 111 минут';
console.log('text.match(/d{3}/) :>> ', text.match(/[1-9]\d{2}/));
console.log('text.match(/d{3}/) :>> ', text.match(/[1-9]\d{2}/));

//----------replace----------
// replace => строка с заменой
const text2 = text.replace(/[1-9]\d{2}/g, '***');

//-----------search-----------

const index = text.search(/[1-9]\d{2}/);
console.log('index :>> ', index);

//------------split-------------------
const text3 = 'Мама   мыла      раму    333   часа   111 минут';
const textArr = text3.split(/\s+/);

console.log('textArr :>> ', textArr);
const text4 = textArr.join(' ');
console.log('text4 :>> ', text4);
