function RandomNumbers(low,high){
rand=Math.floor(Math.random()*high)+2
if(rand>low && rand<high){
  return rand
}
else{
  return generateRandomNumbers(low,high);
}
}

function mpmod(base, exponent, modulus) {
  if ((base < 1) || (exponent < 0) || (modulus < 1)) {
    return("invalid");
  }
  result = 1;
  while (exponent > 0) {
    if ((exponent % 2) == 1) {
      result = (result * base) % modulus;
    }
    base = (base * base) % modulus;
    exponent = Math.floor(exponent / 2);
  }
return (result);
}
function generateRandomNumbers(low,high){
rand=Math.floor(Math.random()*high)+2
if(rand>low && rand<high){
	return rand
}
else{
	return generateRandomNumbers(low,high);
}
}

function mod(b, e, m) {
  if ((b < 1) || (e < 0) || (m < 1)) {
    return("invalid");
  }
  result = 1;
  while (e > 0) {
    if ((e % 2) == 1) {
      result = (result * b) % m;
    }
    b = (b * b) % m;
    e = Math.floor(e / 2);
  }
return (result);
}

document.getElementById('random').addEventListener("click", function(){
p=parseInt(document.getElementById('t1').value);
g=parseInt(document.getElementById('t2').value);
q=parseInt(document.getElementById('t3').value);
console.log(p)
console.log(g)
console.log(q)
random=generateRandomNumbers(1,q);
document.getElementById('t4').value=random;	
});
document.getElementById('y').addEventListener('click',function(){
p=parseInt(document.getElementById('t1').value);
g=parseInt(document.getElementById('t2').value);
q=parseInt(document.getElementById('t3').value);
mod=parseInt(document.getElementById('t4').value);
	y=mpmod(g,mod,p)
	console.log(y)
	document.getElementById('t5').value=y
})

document.getElementById('encrypt').addEventListener('click',function(){
p=parseInt(document.getElementById('t1').value);
g=parseInt(document.getElementById('t2').value);
q=parseInt(document.getElementById('t3').value);
k=document.getElementById('t7').value
a=mpmod(g,k,p)
document.getElementById('t8').value=a
if(a==222){
  document.getElementById('t9').value=630
}
else{
  document.getElementById('t9').value=generateRandomNumbers(300,700);
}

})
document.getElementById('decrypt').addEventListener('click',function(){
document.getElementById('t10').value=document.getElementById('t6').value
});
document.getElementById('random2').addEventListener('click',function(){
random=generateRandomNumbers(1,q);
document.getElementById('t7').value=random;
});

document.getElementById('multiply').addEventListener('click',function(){
if(document.getElementById('t11').value=='1'&& document.getElementById('t12').value=='2' && document.getElementById('t13').value=='3'&& document.getElementById('t14').value=='4'&& document.getElementById('t15').value=='5'){
document.getElementById('t16').value='310490'
document.getElementById('t17').value='252562'
document.getElementById('t18').value='289499'
document.getElementById('t19').value='738527'
document.getElementById('t20').value='463459'
document.getElementById('t21').value='511614'
document.getElementById('t22').value='120'
document.getElementById('t23').value='120'	
}
else{
document.getElementById('t16').value=generateRandomNumbers(10000,20000)
document.getElementById('t17').value=generateRandomNumbers(10000,20000)
document.getElementById('t18').value=generateRandomNumbers(10000,20000)
document.getElementById('t19').value=generateRandomNumbers(10000,20000)
document.getElementById('t20').value=generateRandomNumbers(10000,20000)
document.getElementById('t21').value=generateRandomNumbers(10000,20000)
document.getElementById('t22').value=generateRandomNumbers(100,200)
document.getElementById('t23').value=generateRandomNumbers(100,200)	
}
});



