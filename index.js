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
    let lowerCaseString=string.toLowerCase();
    let indexes=[];
    for(let i=0;i<lowerCaseString.length;i++){
      //if the character is present in alphabet, add his index in the array
      if(plainAlphabet.includes(lowerCaseString[i])){
        indexes.push(plainAlphabet.indexOf(lowerCaseString[i]))
      }else{
        //else just copy the character as string
        indexes.push(String(lowerCaseString[i]))
      }
      
    }
    return indexes
  }
 
  let chiperAlphabet=buildAlphabet(plainAlphabet);
  let indexes=findIndexes(string);
  let cont=0;
  let convertedString="";
  while(cont<indexes.length){
    //if the character in indexes is a number use it as index for the chiperAlphabet
    if(typeof indexes[cont] !== "string"){
    let index=indexes[cont];
    convertedString+=chiperAlphabet[index];
  }else{
    //else just copy the character
    convertedString+=indexes[cont]
  }
    cont++
  }
  return convertedString.toUpperCase();
}
function analyzeArray(array){
  let object={}
  function average(array){
    let avg=0;
    for(let i=0; i<array.length;i++){
      avg += array[i]; 
    }
    return avg/array.length
  }
  function minimum(array){
    let min=array.reduce(function(acc,val){
      return Math.min(acc,val)
    },Infinity)
    return min
  }
  function maximum(array){
    let max= array.reduce(function(acc,val){
      return Math.max(acc,val)
    },-Infinity)
    return max
  }
  object.average=average(array);
  object.min=minimum(array);
  object.max=maximum(array);
  object.length=array.length
  return object
  
}

module.exports={capitalize,reverseString,calculator, caesarChiper, analyzeArray};