const ques_area = document.getElementById("ques_id");
const next_btn = document.getElementById("next_btn"); 
const ansOptions = document.getElementById('radioBtn_div');


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
        ans : "sec a"
    },
    {
        ques : "fourth ques",
        ans : "sec as"
    }
]

const ansOptns = [["first ans", "e", "e", "r"], 
                  ["se", "er", "et", "ro"], 
                  ["s", "e", "sec a", "r"], 
                  ["se", "er", "et", "ro"]]

var count = 0;
var totalCount = 0;

function showNextQues(currQuesCount = 0) {
    const currQues = obj[currQuesCount];
    ques_area.innerHTML = currQues.ques;
}

next_btn.addEventListener("click", function(){
    if(count >= obj.length-1){
        alert(`totalScore = ${totalCount}`);
    }else{
        getSelectedAns(obj[count].ans, count); 
    }
});

function showRadioBtn(dummyOptns = ansOptns[0]) {
    for(let i=0; i<dummyOptns.length; i++){
        radioBtnValue = dummyOptns[i];

        let radioBtn = document.createElement("input");
        radioBtn.setAttribute("type","radio");
        radioBtn.setAttribute("id", `id${i}`);
        radioBtn.setAttribute("name", "quizAns");
        radioBtn.setAttribute("value", radioBtnValue);

        let label = document.createElement("label");
        label.innerText = `${radioBtnValue}\n`;
        label.setAttribute("for", `id${i}`);

        ansOptions.appendChild(radioBtn);
        ansOptions.appendChild(label);
    }
}


function getSelectedAns(actualAns){
const radioBtnData = document.querySelectorAll('input[type="radio"]');
    for(const userAns of radioBtnData){
        if(userAns.checked){
            if(userAns.value == actualAns){
                totalCount++;
                alert("correct");
            }
        }
    }
    count = count+1;
    clearCard();
    showNextQues(count);
    showRadioBtn(ansOptns[count]);
}

function clearCard(){
    ansOptions.innerHTML = "";
}


window.onload = function() {
    showNextQues();
    showRadioBtn();
}