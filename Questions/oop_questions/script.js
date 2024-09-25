function Question(number, title, option1, option2, option3, answer) {
    this.number = number;
    this.title = title;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.answer = answer;
}

var Q1 = new Question("Q1", "Which is a programming language?", "JavaScript", "HTML", "CSS", "JavaScript");
var Q2 = new Question("Q2", "What is your favorite color?", "Red", "Blue", "Yellow", "Red");
var Q3 = new Question("Q3", "Which is used for styling?", "JavaScript", "HTML", "CSS", "CSS");
var Q4 = new Question("Q4", "What is a markup language?", "JavaScript", "HTML", "CSS", "HTML");
var Q5 = new Question("Q5", "Which is used for interactivity?", "JavaScript", "HTML", "CSS", "JavaScript");

var lst_obj = [Q1, Q2, Q3, Q4, Q5];

function print(lst_obj) {
    var examDiv = document.getElementById("exam");
    examDiv.innerHTML = ""; // Clear existing content

    for (var x of lst_obj) {
        examDiv.innerHTML += `<p><strong>${x.number}</strong>: ${x.title}</p>`;
        examDiv.innerHTML += `<p><input type="radio" name="${x.number}" value="${x.option1}"> ${x.option1}</p>`;
        examDiv.innerHTML += `<p><input type="radio" name="${x.number}" value="${x.option2}"> ${x.option2}</p>`;
        examDiv.innerHTML += `<p><input type="radio" name="${x.number}" value="${x.option3}"> ${x.option3}</p>`;
    }
}

function get_result(x) {
    var true_answer = x.answer;
    var options = document.getElementsByName(x.number);
    var answered = false;

    for (var option of options) {
        if (option.checked) {
            answered = true;
            if (option.value === true_answer) {
                document.getElementById("result").innerHTML += `<p>${x.number}: <span style="color: green;">Correct!</span> (${option.value})</p>`;
            } else {
                document.getElementById("result").innerHTML += `<p>${x.number}: <span style="color: red;">Incorrect.</span> The correct answer is ${true_answer}.</p>`;
            }
        }
    }

    if (!answered) {
        document.getElementById("result").innerHTML += `<p>${x.number}: No answer selected.</p>`;
    }
}

function submitQuiz() {
    document.getElementById("result").innerHTML = ""; // Clear previous results
    for (var question of lst_obj) {
        get_result(question);
    }
}

// Initialize the quiz
print(lst_obj);



















// function Question(number, title, option1, option2, option3, answer){

//     this.number= number
//     this.title = title
//     this.option1 = option1
//     this.option2 = option2
//     this.option3 = option3
//     this.answer = answer
// }


// var Q1 =new Question("Q1", "programming language", "javascript", "html", "css", "javascript");
// var Q2 =new Question("Q2", "favourite color", "red", "blue", "yellow", "red");
// var Q3 =new Question("Q3", "programming language", "javascript", "html", "css", "javascript");
// var Q4 =new Question("Q4", "programming language", "javascript", "html", "css", "javascript");
// var Q5 =new Question("Q5", "programming language", "javascript", "html", "css", "javascript");

// lst_obj = [Q1, Q2, Q3, Q4, Q5]

// function print(lst_obj){

//     for(var x of lst_obj){
//         document.getElementById("exam").innerHTML += `<p>${x.number} : ${x.title}</p>` ; 
//         document.getElementById("exam").innerHTML += `<p> <input type="radio" name="${x.number}" value="${x.option1}"> ${x.option1}</p>`; 
//         document.getElementById("exam").innerHTML += `<p> <input type="radio" name="${x.number}" value="${x.option2}"> ${x.option2} </p>`; 
//         document.getElementById("exam").innerHTML += `<p> <input type="radio" name="${x.number}" value="${x.option3}"> ${x.option3} </p>`; 
//         get_result(x)
//     }

// }

// function get_result(x){
//     obj = x
//     true_answer = obj.answer;
//     three_options = document.getElementsByName(obj.number)

//     for(var option of three_options){

//         if (option.checked){
//             if (option.value == true_answer){
//                 document.querySelector("#result").innerHTML += `${option.value} is True answer`
//             } 
//             else{
//                 document.querySelector("#result").innerHTML += `Wrong answer`
//             }
//         } 

//     }
// }

// print(lst_obj)






