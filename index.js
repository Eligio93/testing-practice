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

module.exports={capitalize,reverseString};