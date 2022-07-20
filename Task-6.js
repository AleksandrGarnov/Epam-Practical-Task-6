// 1.Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' //
const firsStr = 'ahb acb aeb aeeb adcd axeb';
const matchStr = firsStr.match(/a.b/gi);

console.log(matchStr);
// 2.Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest //
const secondStr = '2 + 3 223 2223';
const regExp = /2 \+\ 3/;
const result = secondStr.match(regExp)
console.log(result);
// 3.Get the day, month and year of the current date and output it to the console separately //
 const now = new Date();;
 const nowDay = now.getDate();
 const nowMonth = now.getMonth();
 const nowYear = now.getFullYear();

 console.log(now);
 console.log(nowDay);
 console.log(nowMonth); // it show 6 becouse the month start from 0;
 console.log(nowYear);
