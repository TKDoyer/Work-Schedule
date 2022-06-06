

// create variable to hold currentHour
 var currentHour = moment().hour(); // return the current hour. 
// var currentHour = 10;

var day = (moment().format("[Today is] dddd"))
$(`#currentDay`).html(day)




var allRows = $('.row') // all rows

function changeColor(rowArray){

    for (let i = 0; i < rowArray.length; i++){
        
        var rowHour = rowArray[i].dataset.hour // hour of first row
        
        if (rowHour == currentHour){ //comparing
            //change that row to red
            $(`.row[data-hour='${rowHour}']`).addClass('present') //adding class to row with data attribute that matches rowHour
        }
        if (rowHour < currentHour){
            // change to gray
            $(`.row[data-hour='${rowHour}']`).addClass('past')  //adding class to row with data attribute that matches rowHour
        }
        if (rowHour > currentHour){
            // change to green
            $(`.row[data-hour='${rowHour}']`).addClass('future')  //adding class to row with data attribute that matches rowHour
        }
    }
    
}



changeColor(allRows);












