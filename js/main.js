var num = 0;
var numB = Math.floor(Math.random()*21);
var run = 0
var score = 0
function picklerun(){
	if (num == numB){
		num = 0;
		run = 1;
	}
	if (run == 0){
		var pickle = mui('#pickle')[0];
		var width = document.body.clientWidth*0.9;
		var x = Math.floor(Math.random()*width);
		var y = Math.floor(Math.random()*500);
		pickle.style.left = String(x) + 'px';
		pickle.style.top = String(y) + 'px';
		num++;
	}
}

function pickleclick(){
	var picklescore = mui('#picklescore')[0];
	score++;
	picklescore.innerHTML = 'You catch ' + score + ' pickles';
	num = 0;
	numB = Math.floor(Math.random()*21);
	run = 0
	picklerun()
}