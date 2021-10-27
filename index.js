console.log("========== Friends Show Quiz ==========")
console.log()
var readLine = require('readline-sync')

var userName = readLine.question("Please enter your name ")
console.log()
console.log("Welcome",userName," to Friends Series Quiz")

friendsQuiz = [{question:"Does joey share food? ",
answer:"no",
rightReason:"Yes joey doesn't share food!",
wrongReason:"Remember? joey doesn't share food.."},
{question:"How many times ross divorced ",
answer:"3",
rightReason:"Yup 3 times poor ross!",
wrongReason:"Remember carol, emily, rachel??"},
{question:"do chandler love thanks giving? ",
answer:"no",
rightReason:"Yes chandler is hates thanks giving",
wrongReason:"Remember that one thanks giving chandler had in childhood 'Morre turkey Meester chandler?' "},
{question:"How long was rachel's letter to ross? ",
answer:"18",
rightReason:"Yes it was 18 pages.. FRONT AND BACK!!",
wrongReason:"Noo, it was 18 pages.. FRONT AND BACK!!"},
{question:"what was joey's stuffed penguin name? ",
answer:"hugsy",
rightReason:"Yup it is Hugsy",
wrongReason:"Noo it was Hugsy" }]

var score=0

function play(question,answer,rightReason,wrongReason){
  console.log()
  
  var userAnswer = readLine.question(question)
  console.log()

  if(userAnswer === answer){
    score++
    console.log(rightReason)
  }
  else{
    score--
    console.log(wrongReason)
  }
  if(score<0){
    score = 0
  }
  console.log()
  console.log("=====================")
  console.log("Your Score",score)
  console.log("=====================")
  console.log()
  
}

for(var i=0;i<friendsQuiz.length;i++){
  
  var ques =friendsQuiz[i]

  play(ques.question,ques.answer,ques.rightReason,ques.wrongReason)

}

console.log("So your over all score is ",score,"/ 5")