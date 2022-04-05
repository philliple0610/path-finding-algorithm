// Global Varibles
var squareLocation = {
    "x":0,
    "y":5,
}
var oColor = "#FFFF33";
var birdLocation = {
    "x":0,
    "y":5,
};
var arr = {
    "0_5": {
        "cost": 0,
        "square": 0,
    },
    "1_1": {
        "cost": 0,
        "square": 0,
    },
    "1_2": {
        "cost": 0,
        "square": 0,
        
    },
    "1_3": {
        "cost": 0,
        "square": 0,
        
    },
    "1_4": {
        "cost": 0,
        "square": 0,
        
    },
    "1_5": {
        "cost": 0,
        "square": 0,
        
    },
    "1_6": {
        "cost": 0,
        "square": 0,
        
    },
    "2_1": {
        "cost": 0,
        "square": 0,
        
    },
    "2_6": {
        "cost": 0,
        "square": 0,
        
    },
    "3_1": {
        "cost": 0,
        "square": 0,
        
    },
    "3_3": {
        "cost": 0,
        "square": 0,
        
    },
    "3_5": {
        "cost": 0,
        "square": 0,
        
    },
    "3_6": {
        "cost": 0,
        "square": 0,
        
    },
    "4_1": {
        "cost": 0,
        "square": 0,
        
    },
    "4_3": {
        "cost": 0,
        "square": 0,
        
    },
    "4_6": {
        "cost": 0,
        "square": 0,
        
    },
    "5_1": {
        "cost": 0,
        "square": 0,
    
    },
    "5_3": {
        "cost": 0,
        "square": 0,
        
    },
    "5_5": {
        "cost": 0,
        "square": 0,
        
    },
    "5_6": {
        "cost": 0,
        "square": 0,
        
    },
    "6_1": {
        "cost": 0,
        "square": 0,
        
    },
    "6_2": {
        "cost": 0,
        "square": 0,
        
    },
    "6_3": {
        "cost": 0,
        "square": 0,
        
    },
    "6_4": {
        "cost": 0,
        "square": 0,
        
    },
    "6_5": {
        "cost": 0,
        "square": 0,
        
    },
    "6_6": {
        "cost": 0,
        "square": 0,
        
    },
};

// squareclicked is a function that is called whenever a button is clicked.
function squareclicked(x,y) { // square is a button object
    arr[x+"_"+y].square = 1;
    arr[x+"_"+y].cost = 0;
    squareLocation.x = x
    squareLocation.y = y
    goToSurroundFourSquareAndWriteNewCost(0, x, y);
    if (x == birdLocation.x && y == birdLocation.y){
        document.getElementById(x+"_"+y).innerHTML = '<span class="fa-stack fa-lg"> <i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-twitter fa-stack-1x"></i> </span>';
    }
    else {
        document.getElementById(x+"_"+y).innerHTML ='<span class="fa-stack fa-lg"> <i class="fa fa-square-o fa-stack-2x"></i> </span>';
    }
}

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
    if (arr[newX + '_' + newY] != null){
        // console.log(arr[newX + '_' + newY].cost);
        if (arr[newX + '_' + newY].cost == 0){
            arr[newX + '_' + newY].cost = newCost;
            
            goToSurroundFourSquareAndWriteNewCost(newCost, newX, newY);
        }
        else{
            let existingCost = arr[newX + '_' + newY].cost;
            if (existingCost > newCost) {
                arr[newX + '_' + newY].cost = newCost
                goToSurroundFourSquareAndWriteNewCost(newCost, newX, newY);
            }
        }
    }
}

// <span class="fa-stack fa-lg"> <i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-twitter fa-stack-1x"></i> </span>
// birdLocation.x = bird_x + 1
// birdLocation.y = bird_y + 1

var myInterval = setInterval(function() {
    bird_x = birdLocation.x;
    bird_y = birdLocation.y;
    // find lowest_cost and lowest_location

    // top square
    newsquare_x = bird_x - 1;
    newsquare_y = bird_y;
    lowest_cost = 100;
    if (arr[newsquare_x + '_' + newsquare_y] != null){
        if (arr[newsquare_x + '_' + newsquare_y].cost < lowest_cost){
            lowest_cost = arr[newsquare_x + '_' + newsquare_y].cost
            newbird_x = newsquare_x
            newbird_y = newsquare_y
        }
    }

    //right square
    newsquare_x = bird_x;
    newsquare_y = bird_y + 1;
    if (arr[newsquare_x + '_' + newsquare_y] != null){
        if (arr[newsquare_x + '_' + newsquare_y].cost < lowest_cost){
            lowest_cost = arr[newsquare_x + '_' + newsquare_y].cost
            newbird_x = newsquare_x
            newbird_y = newsquare_y
        }
    }

    //bottom square
    newsquare_x = bird_x + 1;
    newsquare_y = bird_y;
    if (arr[newsquare_x + '_' + newsquare_y] != null){
        if (arr[newsquare_x + '_' + newsquare_y].cost < lowest_cost){
            lowest_cost = arr[newsquare_x + '_' + newsquare_y].cost
            newbird_x = newsquare_x
            newbird_y = newsquare_y
        }
    }

    //left square
    newsquare_x = bird_x;
    newsquare_y = bird_y - 1;
    if (arr[newsquare_x + '_' + newsquare_y] != null){
        if (arr[newsquare_x + '_' + newsquare_y].cost < lowest_cost){
            lowest_cost = arr[newsquare_x + '_' + newsquare_y].cost
            newbird_x = newsquare_x
            newbird_y = newsquare_y
        }
    }

    if (lowest_cost > 0){
        document.getElementById(newbird_x+"_"+newbird_y).innerHTML ='<span class="fa-stack fa-lg"> <i class="fa fa-twitter fa-stack-1x mybird"></i> </span>';
        document.getElementById(bird_x+"_"+bird_y).innerHTML = "&nbsp;";
    }
    else {
        square_x = squareLocation.x;
        square_y = squareLocation.y;
        console.log(square_x, square_y);
        document.getElementById(square_x+"_"+square_y).innerHTML = '<span class="fa-stack fa-lg"> <i class="fa fa-square-o fa-stack-2x"></i> <i class="fa fa-twitter fa-stack-1x"></i> </span>';
        console.log(square_x, square_y, squareLocation.x, squareLocation.y, lowest_cost);
    }
    birdLocation.x = newbird_x;
    birdLocation.y = newbird_y;
}, 1000);

function bird(x,y) {
    bird_x = birdLocation.x;
    bird_y = birdLocation.y;
    document.getElementById(bird_x+"_"+bird_y).innerHTML ='<span class="fa-stack fa-lg"> <i class="fa fa-twitter fa-stack-1x mybird"></i> </span>';
}

// function birdMove(bird_x, bird_y) { // checking the squares around the bird
//     //top square
//     newbird_x = bird_x - 1;
//     newbird_y = bird_y;
//     newLocation(newbird_x, newbird_y);

//     //right square
//     newbird_x = bird_x;
//     newbird_y = bird_y + 1;
//     newLocation(newbird_x, newbird_y);

//     //bottom square
//     newbird_x = bird_x + 1;
//     newbird_y = bird_y;
//     newLocation(newbird_x, newbird_y);

//     //left square
//     newbird_x = bird_x;
//     newbird_y = bird_y - 1;
//     newLocation(newbird_x, newbird_y);
// }

// function newLocation(newbird_x, newbird_y) {
//     if (arr[newbird_x + '_' + newbird_y] != null){
//         // console.log(arr[newX + '_' + newY].cost);
//         if (arr[newbird_x + '_' + newbird_y].cost == 0){
//             arr[newX + '_' + newY].cost = newCost;
            
//             goToSurroundFourSquareAndWriteNewCost(newCost, newX, newY);
//         }
//         else{
//             let existingCost = arr[newX + '_' + newY].cost;
//             if (existingCost > newCost) {
//                 arr[newX + '_' + newY].cost = newCost
//                 goToSurroundFourSquareAndWriteNewCost(newCost, newX, newY);
//             }
//         }
//     }
// }



function clearTable3() {
    for(var x = 0; x < 8; x++) {
        for(var y = 0; y < 8; y++) {
            let square = document.getElementById(x + '_' + y).innerHTML;
            if (square == '<span class="fa-stack fa-lg"> <i class="fa fa-square-o fa-stack-2x"></i> </span>'){
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
        if (square == '<span class="fa-stack fa-lg"> <i class="fa fa-square-o fa-stack-2x"></i> </span>'){
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

function clearTable(){
    arr = {
        "0_5": {
            "cost": 0,
            "square": 0,
        },
        "1_1": {
            "cost": 0,
            "square": 0,
        },
        "1_2": {
            "cost": 0,
            "square": 0,
            
        },
        "1_3": {
            "cost": 0,
            "square": 0,
            
        },
        "1_4": {
            "cost": 0,
            "square": 0,
            
        },
        "1_5": {
            "cost": 0,
            "square": 0,
            
        },
        "1_6": {
            "cost": 0,
            "square": 0,
            
        },
        "2_1": {
            "cost": 0,
            "square": 0,
            
        },
        "2_6": {
            "cost": 0,
            "square": 0,
            
        },
        "3_1": {
            "cost": 0,
            "square": 0,
            
        },
        "3_3": {
            "cost": 0,
            "square": 0,
            
        },
        "3_5": {
            "cost": 0,
            "square": 0,
            
        },
        "3_6": {
            "cost": 0,
            "square": 0,
            
        },
        "4_1": {
            "cost": 0,
            "square": 0,
            
        },
        "4_3": {
            "cost": 0,
            "square": 0,
            
        },
        "4_6": {
            "cost": 0,
            "square": 0,
            
        },
        "5_1": {
            "cost": 0,
            "square": 0,
            
        },
        "5_3": {
            "cost": 0,
            "square": 0,
            
        },
        "5_5": {
            "cost": 0,
            "square": 0,
            
        },
        "5_6": {
            "cost": 0,
            "square": 0,
            
        },
        "6_1": {
            "cost": 0,
            "square": 0,
            
        },
        "6_2": {
            "cost": 0,
            "square": 0,
            
        },
        "6_3": {
            "cost": 0,
            "square": 0,
            
        },
        "6_4": {
            "cost": 0,
            "square": 0,
            
        },
        "6_5": {
            "cost": 0,
            "square": 0,
            
        },
        "6_6": {
            "cost": 5,
            "square": 0,
            
        },
    };
    clearTable2();
}


