'use strict';

const seasonNumber = 1;
switch (
  seasonNumber //if (seasonNumber === caseValue)
) {
  case 1:
    console.log('winter');
    break;
  case 2:
    console.log('winter2');
    break;
  case 3:
    console.log('winter3');
    break;
  case 4:
    console.log('winter4');
    break;
}

const monthNumber = 5; //(monthCount, monthAmount)
// switch (monthNumber) {
//   case 1:
//   case 2:
//   case 12:
//     console.log('winter ');
//     bresk;
// }
switch (true) {
  case monthNumber >= 3 && monthNumber <= 5:
    console.log('spring');
    break;
  case monthNumber >= 6 && monthNumber <= 8:
    console.log('s');
    break;
  case monthNumber >= 9 && monthNumber <= 11:
    console.log('a');
    break;
  case monthNumber == 12 || monthNumber <= 2:
    console.log('spring');
    break;
  default:
    console.log('Месяц не может быть больше 12');
}
const aa = (a, b) => {
  // console.log('arguments :>> ', arguments);
  return 5;
};
aa(10);

function aaa(a, b) {
  console.log('arguments :>> ', arguments);
  return 5;
}
aaa(5, 5);
