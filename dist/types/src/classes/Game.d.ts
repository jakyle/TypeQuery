import Player from './Player';
export default class Game {
    player: Player;
    problemCount: number;
    factor: number;
    private scoreboard;
    constructor(player: Player, problemCount: number, factor: number);
    displayGame(): void;
    calculateScore(): void;
}
