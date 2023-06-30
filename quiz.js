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
        ans : "sec ans"
    },
    {
        ques : "fourth ques",
        ans : "sec ans"
    }
]

const ansOptns = [["s", "e", "e", "r"], 
                  ["se", "er", "et", "ro"], 
                  ["s", "e", "e", "r"], 
                  ["se", "er", "et", "ro"]]

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
    showRadioBtn(ansOptns[count]);
});

function showRadioBtn(dummyOptns = ansOptns[0]) {
    ansOptions.innerHTML = "";
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

window.onload = function() {
    showNextQues();
    showRadioBtn();
}