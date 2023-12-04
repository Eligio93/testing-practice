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
function caesarChiper(string, shift){
  let plainAlphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //build encrypted alphabet depending on shift factor
  function buildAlphabet(alphabet){
    let newAlphabet=[];
    let cont=0;
    while(cont<=25){
      newAlphabet.push(alphabet[0+shift]);
      alphabet.push(alphabet.shift());
      cont++
    }
    return newAlphabet    
  }

  function findIndexes(string){
    let indexes=[];
    for(let i=0;i<string.length-1;i++){
      
    }

  }
  
  return buildAlphabet(plainAlphabet);
}

console.log(caesarChiper('',15))
module.exports={capitalize,reverseString,calculator};