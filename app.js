var result = "";
var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var charLength = char.length;

for (var i = 0; i < 8; i++) {
  result = result + char.charAt(Math.floor(Math.random() * charLength));
}
console.log(result);

function sanlar() {
  let aSan = parseInt(prompt("a san yazyn"));
  let bSan = parseInt(prompt("b san yazyn "));
  result = aSan + bSan;
  console.log(result);
  return result;
}
sanlar();

// function userIdGeneratedByUser() {
//   let charNum = parseInt(prompt("nace belgili "));
//   let idNum = parseInt(prompt("nace sany"));
//   var char =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

//   for (var i = 0; i < idNum; i++) {
//     let id = "";
//     for (let h = 0; h < charNum; h++) {
//       let random = Math.floor(Math.random() * char.length);
//       id += char[random];
//     }
//     console.log(id);
//   }
// }
// userIdGeneratedByUser();
