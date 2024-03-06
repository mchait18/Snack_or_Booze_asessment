function unroll(squareArray) {
    const solutionArray = []

    while (squareArray.length > 0) {
        //first get the top row of the square. delete from squareArray and populate solutionArray
        for (let i = 0; i < squareArray.length; i++) {
            solutionArray.push(squareArray[0].shift())
        }
        squareArray.shift()
        //next get the right side of the square. delete from squareArray and populate solutionArray
        for (let i = 0; i < squareArray.length; i++) {
            solutionArray.push(squareArray[i].pop())
        }
        //next get the bottom of the square. delete from squareArray and populate solutionArray
        if (squareArray.length > 0) {
            let bottomRow = squareArray.length - 1
            while (squareArray[bottomRow].length > 0) {
                solutionArray.push(squareArray[bottomRow].pop())
            }
            squareArray.pop()
        }
        //next get the left side of the square. delete from squareArray and populate solutionArray
        for (let i = squareArray.length - 1; i >= 0; i--) {
            solutionArray.push(squareArray[i].shift())
        }
    }
    return solutionArray
}

module.exports = unroll;
