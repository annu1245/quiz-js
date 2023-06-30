const ques_area = document.getElementById("ques_id");
const next_btn = document.getElementById("next_btn"); 

const obj = [
    {
        ques : "first Question",
        ans : "first ans"
    },
    {
        ques : "second ques",
        ans : "sec ans"
    },
    {
        ques : "third ques",
        ans : "sec ans"
    },
    {
        ques : "fourth ques",
        ans : "sec ans"
    }
]

var count = 0;

function showNextQues(currQuesCount = 0) {
    const currQues = obj[currQuesCount];
    ques_area.innerHTML = currQues.ques;
}

next_btn.addEventListener("click", function(){
    count = count+1;
    if(count >= obj.length){
        alert('game over');
    }
    showNextQues(count);
});

