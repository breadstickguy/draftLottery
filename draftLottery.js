const draftChances = [], draftOrder = [];
let count = 0;

const players = [
	{name:"Tom", value: 12}, 
	{name:"Jerry", value: 11}, 
	{name: "Manny", value: 10}, 
	{name: "Eric", value: 9}, 
	{name: "Brian W", value: 8}, 
	{name: "Adam", value: 7}, 
	{name: "Juan", value: 6}, 
	{name: "Josh", value: 5}, 
	{name: "JJ", value: 4}, 
	{name: "Seth", value: 3}, 
	{name: "Nate", value: 2}, 
	{name: "Brian J", value: 1}, 
];
/**
 * Builds our array of draftChances
 * @param {string} value - The name of the player in the lottery
 * @param {integer} times - The number of times to enter the player into the lottery
 *
 * @return {array} draftChances - Our completed lottery array
 */
const arrayBuilder = (value, times, buildArray) => {
  for (let i = 0; i < times; i++) {
    buildArray.push(value);
  }
  return buildArray;
}

// Build our array of draftChances
players.forEach(function(idx){
	arrayBuilder(idx.name, idx.value, draftChances);
});

const total = draftChances.length;

/**
 * Randomizes the array of lottery choices
 * @param {array} array - The array to shuffle
 * @return (array) - The shuffled array
 */
const shuffle = array => {
	let i = 0, j = 0, temp = null;
	for (i = array.length - 1; i > 0; i -= 1) {
	    j = Math.floor(Math.random() * (i + 1))
   		temp = array[i];
   		array[i] = array[j];
   		array[j] = temp;
	}
	return array;
}

/**
  * The selector for the lottery. Takes in an array and removes the first index.
  * If the index doesn't exist in draftOrder, pushes the index to a seperate array
  * @param {array} array - array of draftChoices
  * @param (array) targetArray - array for holding choices
  * @return {void}
  */
const lotterySelector = (array, targetArray) => {
	//Selects the first value in the shuffled array
	let choice = array[0];
	//If the person hasn't been chosen yet, move them over
	if (!targetArray.includes(choice)) {
		targetArray.push(choice);
	}
	//Remove the value
	array.splice(0,1);
}

/** 
  * Recursively runs the other funtcions until array is full with 1 instance of each player
  * @param {array} array - the array to be shuffled and selected from
  * @param (array) targetArray - array for holding final draft order
  * @return {void}
  */
const recursiveLotteryRunner = (array, targetArray) => {
	if(draftOrder.length == 12) {
		console.log(`I had to run ${count} out of ${total} times to complete `);
		console.log(`This year\'s draft order is:\n${draftOrder}`);
		return;
 	}		
	count ++;
	lotterySelector(shuffle(array), targetArray);
 	recursiveLotteryRunner(array, targetArray);
}

recursiveLotteryRunner(draftChances, draftOrder);
