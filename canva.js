var canvas = document.querySelector('canvas');
canvas.width = 460;//window.innerWidth;
canvas.height = 460;//window.innerHeight;
var c = canvas.getContext('2d');
var scale = 20;
var player = [];
var keys;
var vel = scale;
var rows = canvas.width / scale; //window.innerWidth / scale;
var cols = canvas.height / scale;//window.innerHeight / scale;

window.addEventListener('keydown', (e) => {
switch (e.keyCode) {
  case 38:
    console.log('up');
keys = 38;
    break;
    case 40:
      console.log('down');
keys = 40;
      break;
      case 37:
        console.log('left');
         keys = 37;
        break;
        case 39:
          console.log('right');
keys = 39;
          break;
default:
}
});

function snake(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.fillStyle = color;
    c.fillRect(this.x, this.y, 20, 20);
  };
  this.update = function() {

    if(keys == 38) { //up
      this.y -= vel;
    }
    if (keys == 40) { //down
      this.y += vel;
    }
    if (keys == 39) { //right
      this.x += vel;
    }
    if (keys == 37) { //left
      this.x -= vel;
    }

    if(this.x - scale > canvas.width){//window.innerWidth){
    this.x = 0;
    }
    if(this.x + scale < 0) {
      this.x = canvas.width;//window.innerWidt;
    }
    if(this.y - scale > canvas.height){//window.innerHeight){
    this.y = 0;
    }
    if(this.y + scale < 0){
      this.y = canvas.height;//window.innerHeigh;
    }
    this.draw();
  }
};

function food(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.fillStyle = color;
    c.fillRect(this.x, this.y, 20, 20);
  };
  this.update = function() {

    this.draw();
  }
};

var Snake = [];
var Food;
function init() {
Snake[0] = new snake((Math.floor(Math.random() * rows + 1) - 1) * scale, (Math.floor(Math.random() * cols + 1) - 1) * scale, 'red');
Food = new food((Math.floor(Math.random() * rows + 1) - 1) * scale, (Math.floor(Math.random() * cols + 1) - 1) * scale, 'blue');
}
/*function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  Snake.update();
}*/
window.setInterval(() => {
  c.clearRect(0,0,innerWidth, innerHeight)
  Food.update();
  for (var i = 0; i < Snake.length; i++) {
    Snake[i].update();
  }
}, 80);
init();



/*
function duplicate(word) {
var string = "";
 var obj = {};
 var lowerCaseWord = word.toLowerCase();
 for (var i = 0; i < lowerCaseWord.length; i++) {
   if (obj.hasOwnProperty(lowerCaseWord[i])) {
     obj[lowerCaseWord[i]]++;
    // console.log("hasownP = " + obj);
   } else {
     obj[lowerCaseWord[i]] = 1;
     console.log("noHasOwnP = " + obj);
   }
 }
 for (var j = 0; j < lowerCaseWord.length; j++) {
   if (obj[lowerCaseWord[j]] > 1) {
     string += ")";
   } else {
     string += "(";
   }
 }
 return string;
} // if letter apears more than once == ")" only once == "("


console.log(duplicate("dim")); // => "((("
console.log(duplicate("recede")); // => "()()()"
*/
//animate();

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
*/

function array_diff(a, b) {

  //  if(a.length == 0)
  //  return [];

    for (var i = 0; i < a.length; i++) {

              if(b.includes(a[i])) {

                    a.splice(i, 1);
                    i--

              }

        }
        console.log("Here: ");
        console.log(a.filter((z) => b.indexOf(z) == -1));
        console.log("next: ");
return a;

    }

console.log(array_diff([], [4,5])); //[]
console.log(array_diff([3, 4], [3])); //[4]
console.log(array_diff([1,8,2], [])); //[1,8,2]
console.log(array_diff([1,8,2,4,5,6,9,8], [2,3,4,5,6,7,8])); //[1,9]
