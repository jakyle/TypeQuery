/* This script generates mock data for locak development.
   This way you don't have to point to an actual API, but you
   can enjoy realistic, but randomized data, and rapid page
   loads due to local, static data.
*/
import * as chalk from 'chalk';
import * as fs from 'fs';
import mocker from 'mocker-data-generator';
import * as util from 'util';
import {schema} from './mockDataSchema';

const json = mocker()
    .schema('magazine', schema, 5)
    .build((err: Error, data: any) => {
        if (err) {
            throw err;
        } else {
            return JSON.stringify(data);
        }
    });

fs.writeFile('./src/api/db.json', json, (err: Error) => {
    if (err) {
        return console.log( err );
    } else {
        console.log(chalk.green('Mock data generated.'));
    }
});
