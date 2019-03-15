var rock = 0
var paper = 1
var scissor = 2

var computer_choice

function generate_computer_choice(){
  computer_choice = Math.floor(Math.random() * 3)
  console.log(computer_choice)
}
//conditional to determine winner if/else


generate_computer_choice()