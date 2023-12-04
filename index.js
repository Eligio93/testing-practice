function capitalize(string){
  let lowerCase= string.toLowerCase();
  return lowerCase.charAt(0).toUpperCase()+lowerCase.slice(1);
}
function reverseString(string){ 
  let newString="";
  for(let i=string.length-1;i>=0;i--){    
    newString+=string.charAt(i);
  }
  return newString
}
let calculator={
  add:function(n1,n2){
    return n1+n2
  },
  subtract:function(n1,n2){
    return n1-n2;
  },
  divide:function(n1,n2){
    return n1/n2;
  },
  multiply:function(n1,n2){
    return n1*n2;
  }
}
module.exports={capitalize,reverseString,calculator};