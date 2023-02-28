
const activePlayer1 = function () {
    document.querySelector(".player-1").classList.add('active')
    document.querySelector(".player-1 .highscore").classList.add('active')
    document.querySelector(".player-1 .current").classList.add('active')
}

activePlayer1()


const deactivePlayer1 = function () {
    document.querySelector(".player-1").classList.remove('active')
    document.querySelector(".player-1 .highscore").classList.remove('active')
    document.querySelector(".player-1 .current").classList.remove('active')
}

const activePlayer2 = function () {
    document.querySelector(".player-2").classList.add('active')
    document.querySelector(".player-2 .highscore").classList.add('active')
    document.querySelector(".player-2 .current").classList.add('active')


}


const deactivePlayer2 = function () {
    document.querySelector(".player-2").classList.remove('active')
    document.querySelector(".player-2 .highscore").classList.remove('active')
    document.querySelector(".player-2 .current").classList.remove('active')

}


const switchPlayer = function () {
    if (document.querySelector('.player-1').classList.contains('active')) {
        deactivePlayer1()
        activePlayer2()

    }
    else if (document.querySelector('.player-2').classList.contains('active')) {
        activePlayer1()
        deactivePlayer2()
    }

}


function afterwin() {
    document.querySelector('.roll').style.display = 'none'
    document.querySelector('.hold').style.display = 'none'
    document.querySelector('.dice').style.display = 'none'
}





let rollDice = _ => { return parseInt(Math.random() * 6 + 1) }
let cScore = 0;
let hScore1 = 0;
let hScore2 = 0



document.querySelector('.roll').addEventListener('click', _ => {
    let i = rollDice()


    document.querySelector('.dice').src = `dice/${i}.PNG`

    if (i > 1) {
        document.querySelector(".current.active").innerText = cScore = cScore + i;
        return cScore
    }
    else {
        document.querySelector(".current.active").innerText = 0
        switchPlayer()
        return cScore = 0
    }
});






document.querySelector('.hold').addEventListener('click', _ => {
    if (document.querySelector('.player-1').classList.contains('active')) {
        document.querySelector('.highscore.active').innerText = hScore1 += cScore;
        document.querySelector('.current.active').innerText = 0;
        switchPlayer();
        cScore = 0;

        if (hScore1 >= 100) {
            document.querySelector('.player-1 .status').innerText = "player 1 wins !!!"
            afterwin();
            switchPlayer()
            return;
        }

    } else if (document.querySelector('.player-2').classList.contains('active')) {
        document.querySelector('.highscore.active').innerText = hScore2 = hScore2 + cScore;
        document.querySelector('.current.active').innerText = 0;
        switchPlayer();
        cScore = 0;
        if (hScore2 >= 100) {
            document.querySelector('.player-2 .status').innerText = "player 2 wins !!!"
            afterwin();
            switchPlayer()
            return;
        };
    }
});








document.querySelector('.new').addEventListener('click', _ => {
    deactivePlayer2()
    activePlayer1()

    document.querySelector('.current').innerText = 0;
    document.querySelector('.player-2 .current').innerText = 0
    document.querySelector('.highscore').innerText = 0;
    document.querySelector('.player-2 .highscore').innerText = 0;
    document.querySelector('.player-1 .status').innerText = "player 1 "
    document.querySelector('.player-2 .status').innerText = "player 2 "
    document.querySelector('.roll').style.display = 'block'
    document.querySelector('.hold').style.display = 'block'
    document.querySelector('.dice').style.display = 'block'
    cScore = 0
    hScore1 = 0
    hScore2 = 0

})

