import Game from './classes/Game';
import Player from './classes/Player';
import Utility from './classes/Utility';
import './index.scss';
import {IPerson} from './interfaces/person';
import {test2} from './test';
const globalAny: any = global;

let newGame: Game;

// add click handler to the start game button
$('#startGame')!.on('click', () => {
    const player: Player = new Player();
    player.name = Utility.getInputValue('#playername');

    const problemCount: number = Number(Utility.getInputValue('#problemCount'));
    const factor: number = Number(Utility.getInputValue('#factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
$('#calculate')!.on('click', () => newGame.calculateScore());
