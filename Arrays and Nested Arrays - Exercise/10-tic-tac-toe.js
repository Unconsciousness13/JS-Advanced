function TicTacToe(arr) {
    // const gameBoard = [0, 0, 0].map(x => ["false", "false", "false"])
    const gameBoard = [["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"]]
    
    
    let player = "X"
 
    function searchForWinningMove(gameBoard, row, idx) {
        return (
            gameBoard[row].every(x => x === player) ||
            gameBoard
                .reduce((a, v) => {
                    a.push(v[idx])
                    return a
                }, [])
                .every(x => x === player) ||
            [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]].every(x => x === player) ||
            [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]].every(x => x === player)
        )
    }
 
    const printBoard = board => console.log(board.map(x => x.join("\t")).join("\n"))
 
    for (let i = 0; i < arr.length; i++) {
        const [row, idx] = arr[i].split(" ").map(Number)
 
        if (gameBoard[row][idx] !== "false") {
            console.log("This place is already taken. Please choose another!")
            continue
        }
        gameBoard[row][idx] = player
 
        if (searchForWinningMove(gameBoard, row, idx)) {
            console.log(`Player ${player} wins!`)
            printBoard(gameBoard)
            break
        }
 
        if (gameBoard.every(x => x.every(y => y !== "false"))) {
            console.log("The game ended! Nobody wins :(")
            printBoard(gameBoard)
            break
        }
 
        player = player === "X" ? "O" : "X"
    }
}

console.log(TicTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
))
console.log(TicTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
))