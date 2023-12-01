function capitalize(string){
  let lowerCase= string.toLowerCase();
  return lowerCase.charAt(0).toUpperCase()+lowerCase.slice(1);
}
module.exports=capitalize;