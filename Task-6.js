// 1.Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' //
const firsStr = 'ahb acb aeb aeeb adcd axeb';
const matchStr = firsStr.match(/a.b/gi);

console.log(matchStr);
// 2.Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest //
const secondStr = '2 + 3 223 2223';
const subStr = secondStr.substring(0,5);

console.log(subStr);
// 3.Get the day, month and year of the current date and output it to the console separately //
 const now = new Date().toLocaleString();
 const nowDate = now.substring(0,10);
 const nowTime = now.substring(12,25);

 console.log(now);
 console.log(nowDate);
 console.log(nowTime);
