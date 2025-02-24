// Group member
function groupMember(){
    alert('ჯგუფი 4: \nკაპიტანი: გიო გლოველი \nსხვა მონაწილეები: \nგიორგი ჯანხოთელი \nანა ფუთურიძე')
}
// background
function backgroundModel(){
    let BackgroundColor = document.getElementById('backgroundModel').value

    if (BackgroundColor){
        document.body.style.backgroundColor = BackgroundColor;

        if (BackgroundColor === 'Black'){
            document.body.style.color = 'White';
        }
        else if (BackgroundColor === 'White'){
            document.body.style.color = 'Black';
        }
    }
}
// Rock Paper Scissor

let Life = 0
function RockPaperScissor(User){
    let Random = Math.random()
    let Compiuter = ''
    let Result = ''

    if (Random <= 1/3){
        Compiuter = 'Rock'
    }
    else if (1/3 < Random && Random <= 2/3){
        Compiuter = 'Paper'
    }
    else if (Random > 2/3){
        Compiuter = 'Scissor' 
    }


    if (User === Compiuter){
        Result = 'Tie'
    }
    else if (User === 'Rock' && Compiuter === 'Paper' || User === 'Paper' && Compiuter == 'Scissor' || User === 'Scissor' && Compiuter == 'Rock'){
        Result = 'You Lost!';
        Life = Life + 1
        document.getElementById(`heart${Life}`).style.color = 'black';
    }
    else{
        Result = 'You Win!';
    }
    if (Life >= 3){
        document.getElementById('user').innerHTML = 'None';
        document.getElementById('compiuter').innerHTML = 'None';
        document.getElementById('result').innerHTML = 'None'
    }
    else{
        document.getElementById('user').innerHTML = User;
        document.getElementById('compiuter').innerHTML = Compiuter;
        document.getElementById('result').innerHTML = Result
    }
}

// x and o

let playerX = 'X';
let playerO = 'O';
let currentPlayer = playerX;

let board = ['', '', '', '', '', '', '', '', '']; 
let Tray = document.querySelectorAll('.cub'); 


function checkWinner() {
    const win = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    let winner = '';
    let gameEnded = false 
    win.forEach(combination => {
        const [x, y, z] = combination;
        if (board[x] && board[x] === board[y] && board[x] === board[z]) {
            winner = board[x];
        }
    });

    if (winner) {
        document.getElementById('result2').innerText = `winner is ${winner}!`;
        gameEnded = true;
    }   
    if (gameEnded){
        return 
    }
}

for (let index=0; index<10; index++){
    const OneTrey = Tray[index];
    OneTrey.addEventListener('click', () =>{
        if (board[index] === '') {
            board[index] = currentPlayer;
            OneTrey.textContent = currentPlayer;

            if (currentPlayer === playerX){
                currentPlayer = playerO
            }
            else{
                currentPlayer = playerX
            }
            checkWinner()
        }
    })
}
