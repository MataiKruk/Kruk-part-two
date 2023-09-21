let holeNumb = 1;
let parTotal = 0;
let par = 0;
let putts = 0;
let oldPutts = 0;

let name = prompt("Welcome to MK mini golf! What is your name?")

while (true) {
    holes = prompt(`Hi, ${name}! Would you like to play 3 or 6 holes? `)

    if (holes === '3' || holes === '6') {
        break; // Exit the loop if the input is valid (3 or 6).
    } else {
        alert("Please enter 3 or 6"); // Prompt the user to try again.
    }
}

if (holes == 3) {
    par = holes * 3
    for (let i = holeNumb; i <= 3; i++) {
        let putts = prompt(`How many putts for hole ${holeNumb}? (par: ${par})`)
        puttsTotal = oldPutts + Number(putts);
        oldPutts = puttsTotal;
        holeNumb++;
    }
} else if (holes == 6) {
    par = holes * 3;
    for (let i = holeNumb; i <= 6; i++) {
        let putts = prompt(`How many putts for hole ${holeNumb}? (par: ${par})`)
        puttsTotal = oldPutts + Number(putts);
        oldPutts = puttsTotal;
        holeNumb++;
    }
}

parTotal = puttsTotal - par;

if (parTotal > 0) {
    console.log(`Nice try, ${name}... Your total par was: +${parTotal}.`);

} else if (parTotal == 0) {
    console.log(`Good game, ${name}. Your total par was: ${parTotal}.`);

} else if (parTotal < 0) {
    console.log(`Great job, ${name}! Your total par was: ${parTotal}.`);
}


