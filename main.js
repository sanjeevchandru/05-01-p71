document.write("35.to check whether a specified character exists between the 2nd and 4th positions in a given string."+"<br>");
function test35(str,ch){
    var x=str.substring(1,4);
    console.log(x);
    for(let i=0;i<x.length;i++){
        if(x[i]==ch){
            return true;
        }
    }
    return false;
}
document.write("The string is :sanjeev,our choice charector:j, Ans: "+test35("sanjeev","j")+"<br><br>");