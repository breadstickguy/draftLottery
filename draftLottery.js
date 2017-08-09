const draftChances = [];

const players = [
	{name:"Jerry", value: 12}, 
	{name:"Taylor", value: 11}, 
	{name: "Tom", value: 10}, 
	{name: "JJ", value: 9}, 
	{name: "Adam", value: 8}, 
	{name: "Josh", value: 7}, 
	{name: "Juan", value: 6}, 
	{name: "Brian J", value: 5}, 
	{name: "Brian W", value: 4}, 
	{name: "Manny", value: 3}, 
	{name: "Seth", value: 2}, 
	{name: "Nate", value: 1}, 
];
//Builds our array of draftChances based on values passed in
const arrayBuilder = (value, len) => {
  for (let i = 0; i < len; i++) {
    draftChances.push(value);
  }
  return draftChances;
}


players.forEach(function(idx){
	arrayBuilder(idx.name, idx.value);
});


console.log(draftChances);
console.log(draftChances.length);

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

// console.log(arrayBuilder("JJ", 9));


// recursiveLotteryRunner(draftChances);