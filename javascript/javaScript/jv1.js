//가위보, 바위가위, 보바위 -유저 승
//가위바위, 바위보, 보가위 -컴퓨터 승
const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result')

const result = ['가위', '바위' ,'보'];
const show = (user, computer, result) => {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    winner.innerText = result;
};


const game =(user, computer) => {
    let message;



    if (user === computer) {
        console.log('무승부');
    }else {
        switch(user + computer) {
            case '가위보':
            case '바위가위':
            case '보바위' :
                message = '사용자 승리!'
                break;
            case '가위바위':
            case '바위보':
            case '보가위' :
                 message = '컴퓨터 승리!'
                 break;    
            

        }
    }

    show(user, computer, message);
};

//user 선택 이벤트 
const play =(event) => {
    const user = event.target.innerText;
    const randomIndex = Math.floor(Math.random()*3);
    const computer = result[randomIndex];
    game(user,computer);
};

buttons.forEach((button) => {
    button.addEventListener('click',play);
});



