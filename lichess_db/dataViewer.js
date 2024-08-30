const fs = require("fs");
const process = require("process");
const readline = require("readline");

/**
 * 
 * @param {*} test The number to be tested
 * @param {*} low The low end (exclusive) of the range
 * @param {*} high The high end (exclusive) of the range
 * @returns true if the test is within the range. false otherwise
 */
function withinRange(test, low, high) {
    if (low > high) throw new Error("Provided range must be low to high");

    if (test > low && test < high){
        return true;
    }
    return false;
}

async function processLines() {
    const readInterface = readline.createInterface({
        input: fs.createReadStream("./lichess_db_noMateNorZero.jsonl")
    });
    //const outputStream = fs.createWriteStream("./lichess_db_noMateNorZero.jsonl");

    let i = 0;
    const lineProcessCount = 10;
    for await (const line of readInterface) {
        i++;

        const fenData = JSON.parse(line);
        const paredDown = {
            "fen": fenData.fen,
            "eval": {
                "cp": fenData.evals[0].pvs[0].cp,
                "line": fenData.evals[0].pvs[0].line,
                "knodes": fenData.evals[0].knodes,
                "depth": fenData.evals[0].depth
            }
        }
        
        const paredDownStr = JSON.stringify(paredDown);
        console.log(paredDownStr);

        // Check if the data has a mate or a centipawn evaluation of 0. We'll ignore those
        // if (fenData.evals[0].pvs[0].mate || withinRange(fenData.evals[0].pvs[0].cp, -100, 100)){
        //     continue;
        // }

        //fs.appendFileSync("./lichess_db_paredDown.jsonl", paredDownStr+"\n");
        if (i >= lineProcessCount) {
            process.exit(0);
        }
    }
    // console.log(i);
    // console.log("finished");
}

// console.log("Processing...");
processLines();