function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//this is calling the function to give you a random numnber
var goal=getRandomIntInclusive(19,120);
console.log(goal);
$('#goal').html(goal);

var crystal = [];
for(var i = 0; i < 4; i++){
	crystal[i] = {
		index: i,
		//TODO
		tag: "#crystal" + i
}
}