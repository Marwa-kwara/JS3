1. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
(_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)


//For now I used fetch because it is return a promise which is easy to deal whith it, I don't want to deal with the callbacks hell .
Xmlhttprequest old and long code
Axios need to import a library




2. Let's say you were a huge fan of Object Oriented Programming and you would have all the data the api provided in an array and you want to restructure your code in an OOP way. What classes would you make and what functions would they have?
(_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
(_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
(_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

Imagine the data is given as follows:
```
const data = [{
  category: 'Sports',
  questions: [{ question: 'Who won the 2015 Formula 1 World Championship?', answer: 'Lewis Hamilton'}, ...]
}, {
  ...
}];
```

Example of how to write the classes (taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    // get the area of the rectangle
  }

  calcArea() {
    // calculate the area of the rectangle
  }
}
```
I will make this class:


class data {
  constructor(category, questions, clickFunction) {
    this.category = category;
    this.questions = questions
  }
  clickFunction(){
    this.clickFunction = getRandomId
}
function getRandomId(item){
  const randomName = Math.floor(Math.random()*item.length)
  return item[randomName]
}

const myCategory = new data (category, questions, clickFunction);

