player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    get_Number = document.getElementById("Number");

    charAt1 = Number.charAt1;
    console.log(charAt1);

    length_divide_2 = Math.floor(Number.length/2);
    charAt2 = charAt = length_divide_2;
    console.log(charAt2);

    length_minus_1 = Number.length - 1;
    charAt3 = Number.charAt = length_minus_1;
    console.log(charAt3);

    remove_charAt1 = Number.replace = charAt1, "_";
    remove_charAt2 =  remove_charAt1;
    remove_charAt3 =  remove_charAt2;
    console.log(remove_charAt3);

    question_number = " <h4 id = 'Number_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type = 'number' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick='click()'>check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number");
}