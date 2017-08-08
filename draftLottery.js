const draftChances = [
	"JJ",
	"Josh",
	"Brian W",
	"Seth",
	"Manny",
	"Jerry",
	"Juan",
	"Taylor",
	"Nate",
	"Adam",
	"Tom",
	"Brian J"

];
const draftOrder = [];



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
	var choice = array[0];
	//If the person hasn't been chosen yet, move them over
	if (draftOrder.includes(choice)) {
		draftOrder.push(choice);
	}
	//Remove the value
	draftChances.pop(choice);
}


const recursiveLotteryRunner = (draftChances) => {
	// console.log('first =>', classList);
	if(draftOrder.length <= 12) {
		return;
 	}		
	
	lotterySelector(shuffle(draftChances));
 	recursiveLotteryRunner(draftChances);
}

console.log(shuffle(draftChances));
// recursiveLotteryRunner(draftChances);