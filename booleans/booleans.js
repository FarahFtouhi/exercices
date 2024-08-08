const isEVen = (number) => {
  if (Number % 2 === 0) {
    return true;
  }
};
//exerci
function isValidPassword(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}
let isValidPassword1=(password1)=>password1.length >= 8 ?true:false

function longerString(string1, string2){
    if (string1.length>=string2.length){
        return string1
    }
    else if (string1.length<=string2.length) {
        return string2

    }
    else{
        console.log(string1,string2)
    }






}
let longerString1=(string01,string02)=>string01.length>=string02.length?string01:string01.length<=string02.length?string02:console.log(string01,string02)
