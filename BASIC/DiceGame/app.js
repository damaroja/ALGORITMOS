



/**
 * Verifies if a number is valid.
 * @param {number} n - The number to be verified.
 * @throws {Error} If the number is undefined, not a number, or less than 1.
 * @returns {boolean} True if the number is valid.
 */


const verifyNumber = (n) => {
    if(n === undefined) throw new Error('The number is required')   
    if(typeof n !== 'number') throw new Error('The number is required')
    if(n < 1) throw new Error('The number is required')
    return true
}

/**
 * Simulates a dice game.
 * @param {number} n - The number of times to play the game.
 * @returns {Object} An object containing the game results.
 * The object has the following properties:
 * - results: An array of objects representing each game result.
 *   Each object has the properties dice1, dice2, sum, and result.
 * - win: The number of times the player won.
 * - lose: The number of times the player lost.
 * - tryAgain: The number of times the player needs to try again.
 */


const diceGame = (n) => {
    let results = []
    let win = 0
    let lose = 0
    let tryAgain = 0
    if(verifyNumber(n)){
        let nInt = parseInt(n)
        for(let i = 0; i < nInt; i++){
            let result
            const dice1 = Math.floor(Math.random() * 6) + 1;
            const dice2 = Math.floor(Math.random() * 6) + 1;
            const sum = dice1 + dice2;
            if(sum === 7 || sum === 11){
                result = 'Win'
            } else if(sum === 2 || sum === 3 || sum === 12){
                result = 'Lose'
            } else {
                result = 'Try again'
            } 
            results.push({dice1, dice2, sum, result})  
        }
    }
    results.map(res => {
        if(res.result === 'Win') win++
        if(res.result === 'Lose') lose++
        if(res.result === 'Try again') tryAgain++ 
    })
    return {results, win, lose, tryAgain}
}

module.exports = {diceGame, verifyNumber }

