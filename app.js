var rock = 0
var paper = 1
var scissor = 2
var user_input
var computer_choice

function generate_computer_choice(){
  computer_choice = Math.floor(Math.random() * 3)
  console.log(computer_choice)
  
}

function user_choice() {
    document.getElementById("rock").addEventListener("click", function() {
        user_input = rock
        console.log(user_input)
        generate_computer_choice()
        determine_winner()
    })
    document.getElementById("paper").addEventListener("click", function() {
        user_input = paper
        console.log(user_input)
        generate_computer_choice()
        determine_winner()
    })
    document.getElementById("scissors").addEventListener("click", function() {
        user_input = scissor
        console.log(user_input)
        generate_computer_choice()
        determine_winner()
    })
    
    
}

    
//conditional to determine winner if/else
function determine_winner() {
    // console.log("User Input:" + user_input)
    // console.log("Computer Input:" + computer_choice)
    user_choice()
    generate_computer_choice()
    console.log("User Input:" + user_input)
    console.log("Computer Input:" + computer_choice)

    if (computer_choice == 0 &&  user_input == 0 ) {
        document.getElementById("result").innerHTML = "You Tie!"
        // alert("You Tie!")

    }
    else if (computer_choice == 0 && user_input == 1 ){
        document.getElementById("result").innerHTML = "You Lose!"
        // alert("You Lose!")
    }
    else if(computer_choice == 0 && user_input == 2){
      document.getElementById("result").innerHTML = "Computer Wins!"
      // alert("Computer Wins!")
    }


    else if (computer_choice == 1 &&  user_input == 0 ) {
      document.getElementById("result").innerHTML = "Computer Wins!"
      // alert("Computer Wins!")

    }
    else if (computer_choice == 1 && user_input == 1 ){
      document.getElementById("result").innerHTML = "You Tie!"
      // alert("You Tie!")
    }
    else if(computer_choice == 1 && user_input == 2){
      document.getElementById("result").innerHTML = "You Win!"
      // alert("You Win!")
    }


    else if (computer_choice == 2 &&  user_input == 0 ) {
      document.getElementById("result").innerHTML = "You Win!"
      // alert("You Win!")

    }
    else if (computer_choice == 2 && user_input == 1 ){
      document.getElementById("result").innerHTML = "Computer Wins!"
      // alert("Computer Wins!")
    }
    else if(computer_choice == 2 && user_input == 2){
      document.getElementById("result").innerHTML = "You Tie!"
      // alert("You Tie!")
    }
    
    else {
    // document.getElementsByClassName("result").innerHTML = "You Lose!"
    alert("Error")
    }
}

// generate_computer_choice()
