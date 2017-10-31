import IResult from '../interfaces/result';

export default class Scoreboard {
    private results: IResult[] = [];

    public addResult(newResult: IResult): void {
        this
            .results
            .push(newResult);
    }

    public updateScoreboard(): void {

        let output: string = '<h2>Scoreboard</h2>';

        // loop over all results and create the html for the scoreboard
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < this.results.length; index++) {
            const result: IResult = this.results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/'
                + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }

        // add the updated scoreboard to the page
        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
}
