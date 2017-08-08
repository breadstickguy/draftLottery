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
	// console.log('draftOrder', draftOrder);
	var choice = array[0];
	// console.log('the choice',choice);
	//If the person hasn't been chosen yet, move them over
	if (!draftOrder.includes(choice)) {
		draftOrder.push(choice);
		// console.log('draftOrder', draftOrder);
	}
	//Remove the value
	draftChances.splice(0,1);
	// console.log('draftChances',draftChances);
}


const recursiveLotteryRunner = (draftChances) => {
	if(draftOrder.length == 12) {
		console.log('This year\'s draft order is:\n', draftOrder);
		return;
 	}		
	
	lotterySelector(shuffle(draftChances));
 	recursiveLotteryRunner(draftChances);
}


recursiveLotteryRunner(draftChances);