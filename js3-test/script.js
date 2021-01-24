// Functions to set an id attribute to an HTML element
const leftButton = document.getElementById('left-button').addEventListener('click', fetchdata);
const centralButton = document.getElementById('central-button').addEventListener('click', fetchdata);
const rightButton = document.getElementById('right-button').addEventListener('click', fetchdata);
const button = document.getElementsByClassName('button')

const url = `https://opentdb.com/api_category.php`

//show Category names in the buttons

function fetchdata(){
  fetch(url)
  .then(response => response.json())
  .then((data)=>{
  data = data.trivia_categories;
  const categoryArray = getRandomId(data);
  
  const response = fetch (`https://opentdb.com/api.php?amount=${categoryArray}`)
  .then(response => response.json())
  .then((data2)=>{
    console.log(data2)
    window.addEventListener('load',()=>{
    const button = document.getElementsByClassName("button");
    button.innerText = data2.name;
    }
    )
  })
  getRandomId(data);
  getRandomId(data)
 console.log(categoryArray.id)
  })
}

function getRandomId(item){
  const randomName = Math.floor(Math.random()*item.length)
  return item[randomName]
}
fetchdata()


function createQuestions(){
  const idUrl = `https://opentdb.com/api.php?amount=${categoryArray}`
  fetch(idUrl)
  .then(response => response.json())
  .then((data3)=>{
    const questions = data3.results;
    console.log(questions)
    questions.forEach(question => {
      console.log(questions)
      leftButton.innerText += `<div class="question-container">
            <span class="question-label">${questions.question}</span>
            <span class="answer-label"></span>
        </div>`
      
    });
})
}

