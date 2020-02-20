matr=[[0,0,0,0,1],[0,0,0,1,1],[0,0,1,1,1],[0,1,1,1,1],[1,1,1,1,1]]

function pimapping(mat){
return mat
}

function xStepmaping(mat){
	return mat
}
function thetaMapping(mat){
let c=[]
for(let i=0;i<mat.length;i++){
c.push(mat[i][0]^mat[i][1]^mat[i][2]^mat[i][3]^mat[i][4])
}
console.log(c)
d=[]
d.push(c[0]^0)
for(i=2;i<6;i++){
	d.push((c[i-1]^c[i+1]))
}
console.log(d)
for(let k=0;k<mat.length;k++){
	for(let l=0;l<mat[k].length;l++){
		mat[k][l]=mat[k][l]^d[l]
		
	}
}
return mat
}




function istepmaping(mat){
	return mat
}
c=0;
matrix=matr;
document.getElementById('btn').addEventListener("click",
	function(){
	if(c<11){
		thetaMappingStep()
		c++;
		document.getElementById('round').innerHTML=c;
		table=document.getElementById('two')
		matrix=thetaMapping(matrix)
		matrix=pimapping(matrix)
		matrix=xStepmaping(matrix)
		matrix=istepmaping(matrix)
	for(let row1=0;row1<=4;row1++){
		for(let col1=0;col1<=4;col1++){
			if(row1==0){
			atr=((row1+1)+(col1)).toString();
		}
		else{

			atr=((row1+1)+(col1)+(row1*4)).toString();
		}
			console.log(atr);
			console.log(matrix)
			document.getElementById(atr).innerHTML=matrix[col1][row1]

		}
	}
	if(c==11){
		thetaMappingStep();
		document.getElementById('1').innerHTML='0'
		document.getElementById('2').innerHTML='1'
		document.getElementById('3').innerHTML='1'
		document.getElementById('4').innerHTML='1'
		document.getElementById('5').innerHTML='1'
		document.getElementById('6').innerHTML='0'
		document.getElementById('7').innerHTML='1'
		document.getElementById('8').innerHTML='0'
		document.getElementById('9').innerHTML='1'
		document.getElementById('10').innerHTML='1'
		document.getElementById('11').innerHTML='0'
		document.getElementById('12').innerHTML='0'
		document.getElementById('13').innerHTML='1'
		document.getElementById('14').innerHTML='0'
		document.getElementById('15').innerHTML='0'
		document.getElementById('16').innerHTML='0'
		document.getElementById('17').innerHTML='0'
		document.getElementById('18').innerHTML='0'
		document.getElementById('19').innerHTML='1'
		document.getElementById('20').innerHTML='1'
		document.getElementById('21').innerHTML='1'
		document.getElementById('22').innerHTML='0'
		document.getElementById('23').innerHTML='0'
		document.getElementById('24').innerHTML='0'
		document.getElementById('25').innerHTML='0'
		document.getElementById('btn').disabled=true;	
	}
	}
	}
	);
document.getElementById('btn1').addEventListener("click",
	function(){
		thetaMappingStepReset();
	document.getElementById('btn').disabled=false;
		document.getElementById('1').innerHTML=''
		document.getElementById('2').innerHTML=''
		document.getElementById('3').innerHTML=''
		document.getElementById('4').innerHTML=''
		document.getElementById('5').innerHTML=''
		document.getElementById('6').innerHTML=''
		document.getElementById('7').innerHTML=''
		document.getElementById('8').innerHTML=''
		document.getElementById('9').innerHTML=''
		document.getElementById('10').innerHTML=''
		document.getElementById('11').innerHTML=''
		document.getElementById('12').innerHTML=''
		document.getElementById('13').innerHTML=''
		document.getElementById('14').innerHTML=''
		document.getElementById('15').innerHTML=''
		document.getElementById('16').innerHTML=''
		document.getElementById('17').innerHTML=''
		document.getElementById('18').innerHTML=''
		document.getElementById('19').innerHTML=''
		document.getElementById('20').innerHTML=''
		document.getElementById('21').innerHTML=''
		document.getElementById('22').innerHTML=''
		document.getElementById('23').innerHTML=''
		document.getElementById('24').innerHTML=''
		document.getElementById('25').innerHTML=''
		c=0;
		document.getElementById('round').innerHTML=c;
		matrix=matr;
});

function randomZeroOne(){
	var y =Math.random();
if(y<0.5){
y =Math.floor(y)
}
else{
y= Math.ceil(y)
}
return y
}


function thetaMappingStep(){
	for (let i=1;i<=60;i++){
		document.getElementById("0"+i.toString()).innerHTML=randomZeroOne();
	}
		for (let j=1;j<=50;j++){
		document.getElementById("00"+j.toString()).innerHTML=randomZeroOne();
		console.log("00"+j.toString())
	}
		for (let k=1;k<=100;k++){
		document.getElementById("000"+k.toString()).innerHTML=randomZeroOne();
		
	}
	for (let l=1;l<=50;l++){
		document.getElementById("0000"+l.toString()).innerHTML=randomZeroOne();

	}
}

function thetaMappingStepReset(){
	for (let i=26;i<=60;i++){
		document.getElementById("0"+i.toString()).innerHTML='';
	}
for (let j=1;j<=50;j++){
		document.getElementById("00"+j.toString()).innerHTML='';
	}
for (let k=1;k<=100;k++){
		document.getElementById("000"+k.toString()).innerHTML='';
		
	}
for (let l=1;l<=50;l++){
		document.getElementById("0000"+l.toString()).innerHTML='';

	}
}

