// Global Varibles
var xTurn = true;
var numMoves = 0;
var xColor = "#FB654D"
var oColor = "#FFFF33"

function makeOmove()
{
    var status = document.getElementById('status'); // get the status object
    var val0;
    var val1;
    var val2;
    var val3;

    ///////////////////////////////////////////////////////////////////////////
    //
    // INITIAL CASE
    // if the player didn't go in the middle then go to the middle
    //
    ///////////////////////////////////////////////////////////////////////////

    val0 = document.getElementById('1_1').innerHTML;
    if(val0 == '&nbsp;') // check if all are 'X'
    {
        numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
        xTurn = true; // switching to 'X's turn
        status.innerHTML = "X\'s turn"; // displaying O's turn
        document.getElementById('1_1').style.color=oColor;
        document.getElementById('1_1').innerHTML = 'O'; // set this square to 'O'
        return true; // return true to the caller
    }


    ///////////////////////////////////////////////////////////////////////////
    //
    // DUMB MOVES
    //
    ///////////////////////////////////////////////////////////////////////////
    // iterate column
    for(var y = 0; y < 3; y++)
    {

        // iterate rows
        for(var x = 0; x < 3; x++)
        {
            var square = document.getElementById(x + '_' + y).innerHTML;

            if(square == '&nbsp;' ) {
                numMoves = numMoves + 1; // add 1 to numMoves
                                     // ex: if numMoves = 5 then after this execution
                                     // numMoves will become 6
                xTurn = true; // switching to 'X's turn
                status.innerHTML = "X\'s turn"; // displaying O's turn
                document.getElementById(x + '_' + y).style.color=oColor;
                document.getElementById(x + '_' + y).innerHTML = 'O'; // set this square to 'O'

                return true; // return true to the caller
            }
        }
    }



}

//function test(cost, x, y)

function goToSurroundFourSquareAndWriteNewCost(cost, x, y) { //check squares around it
    //top square
    let newCost = cost + 1;
    let newX = x - 1;
    let newY = y;
    writeNewCost(newX, newY, newCost);

    //right square
    newX = x;
    newY = y + 1;
    writeNewCost(newX, newY, newCost);

    //bottom square
    newX = x + 1;
    newY = y;
    writeNewCost(newX, newY, newCost);

    //left square
    newX = x;
    newY = y - 1;
    writeNewCost(newX, newY, newCost);
}

function writeNewCost(newX, newY, newCost) {
    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
        let square = document.getElementById(newX + '_' + newY).innerHTML;
        if (square == '&nbsp;') {
            //set the new cost
            document.getElementById(newX + '_' + newY).innerHTML = (newCost);

            //go to the next square
            goToSurroundFourSquareAndWriteNewCost(newCost, newX, newY);
        } else {
            let existingCost = parseInt(square);
            if (existingCost > newCost) {
                document.getElementById(newX + '_' + newY).innerHTML = (newCost);
                goToSurroundFourSquareAndWriteNewCost(newCost, newX, newY);
            }
            
        }
    }
}

function clearTable() {
    for(var x = 0; x < 8; x++) {
        for(var y = 0; y < 8; y++) {
            let square = document.getElementById(x + '_' + y).innerHTML;
            if (square == 'X'){
                document.getElementById(x + '_' + y).innerHTML = '&nbsp;';
            }
            else {
                let squareInt = parseInt(square);
                if (squareInt > 0) {
                    document.getElementById(x + '_' + y).innerHTML = '&nbsp;';
                }
            }
        }
    }
}

function clearTable2(){
    const ids = ["0_5", "1_1", "1_2", "1_3", "1_4", "1_5", "1_6", "2_1", "2_6", "3_1", "3_3", "3_5", "3_6", "4_1", 
                "4_3", "4_6", "5_1", "5_3", "5_5", "5_6", "6_1", "6_2", "6_3", "6_4", "6_5", "6_6"];
    ids.forEach(id => {
        let square = document.getElementById(id).innerHTML;
        if (square == 'X'){
            document.getElementById(id).innerHTML = '&nbsp;';
        }
        else {
            let squareInt = parseInt(square);
            if (squareInt > 0) {
                document.getElementById(id).innerHTML = '&nbsp;';
            }
        }
    });
}


// squareclicked is a function that is called whenever a button is clicked.
function squareclicked(x,y) // square is a button object
{   
  document.getElementById(x+"_"+y).style.color=xColor;
  document.getElementById(x+"_"+y).innerHTML ='X';
  goToSurroundFourSquareAndWriteNewCost(0, x, y);

}
