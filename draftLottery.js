const draftChances = [
	"Jerry","Jerry","Jerry","Jerry","Jerry","Jerry","Jerry","Jerry","Jerry","Jerry","Jerry","Jerry", //12
	"Taylor","Taylor","Taylor","Taylor","Taylor","Taylor","Taylor","Taylor","Taylor","Taylor","Taylor", //11
	"Tom","Tom","Tom","Tom","Tom","Tom","Tom","Tom","Tom","Tom", //10
	"JJ","JJ","JJ","JJ","JJ","JJ","JJ","JJ","JJ", //9
	"Adam","Adam","Adam","Adam","Adam","Adam","Adam","Adam", //8
	"Josh","Josh","Josh","Josh","Josh","Josh","Josh", //7
	"Juan","Juan","Juan","Juan","Juan","Juan", //6
	"Brian J","Brian J","Brian J","Brian J","Brian J", //5
	"Brian W","Brian W","Brian W","Brian W",//4
	"Manny","Manny","Manny",//3
	"Seth","Seth",//2
	"Nate"//1
];
const draftOrder = [];
let count = 0;



//Randomizes the array of lottery choices
const shuffle = array => {
	let i = 0, j = 0, temp = null
	for (i = array.length - 1; i > 0; i -= 1) {
	    j = Math.floor(Math.random() * (i + 1))
   		temp = array[i];
   		array[i] = array[j];
   		array[j] = temp;
	}
	return array;
}

//The selector for the lottery
const lotterySelector = array => {
	//Selects the first value in the shuffled array
	let choice = array[0];
	//If the person hasn't been chosen yet, move them over
	if (!draftOrder.includes(choice)) {
		draftOrder.push(choice);
	}
	//Remove the value
	draftChances.splice(0,1);
}

//Runs until draftOrder array is full with everyone
const recursiveLotteryRunner = (draftChances) => {
	if(draftOrder.length == 12) {
		console.log(`I had to run ${count} times to complete`);
		console.log(`This year\'s draft order is:\n ${draftOrder}`);
		return;
 	}		
	count ++;
	lotterySelector(shuffle(draftChances));
 	recursiveLotteryRunner(draftChances);
}


recursiveLotteryRunner(draftChances);