// label javascript
{
    var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
  
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
  
              //changing margin when clicked
              
              const marginChange = document.querySelector(".custom-select")
              marginChange.style.margin="50px 0";
  
              const selectedChoice =h.innerHTML
              document.getElementById("display").innerHTML= "You have selected " + selectedChoice + ".";
    
              y = this.parentNode.getElementsByClassName("same-as-selected");
              const continueButton = document.querySelector("#continue");
              continueButton.style.display="inline-block";
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  
  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  
  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);
  
  }
  
   //storing language selected by user and display none
   {
      const questionsDisplay = document.querySelector(".continue-button button");
      const displayNone = document.getElementsByClassName("display-none");
      const displayGame = document.querySelector(".gameplay-container")
      questionsDisplay.addEventListener("click",() => {
          for (var i = 0; i <displayNone.length; i++) {        
              displayNone[i].style.display ="none"; 
              displayGame.style.display = "block";
              // console.log("click working")
          }
      });
   var choiceByUser = document.querySelector(".select-selected")
  
   choiceByUser.addEventListener("click", () => {
     console.log(choiceByUser.innerHTML)
   })
  }

  let score = 0;
  let quesNumber = 0;
  
  function shuffle(array) {
   var currentIndex = array.length, temporaryValue, randomIndex;
 
   // While there remain elements to shuffle...
   while (0 !== currentIndex) {
 
     // Pick a remaining element...
     randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex -= 1;
 
     // And swap it with the current element.
     temporaryValue = array[currentIndex];
     array[currentIndex] = array[randomIndex];
     array[randomIndex] = temporaryValue;
   }
 
   return array;
 }
 
 const unshuffledArray = [
   {
       language: "python",
       set:[
           {
               question: " what is the extension for py?",
               answers:[ ".py", ".cpp",".p",".pyt"],
           },
           {
               question: "  the block of code is always executed no matter if the try block raises an error or not. ",
               answers:["finally","last", "end","final"],
           },
           {
               question: "  library for the adding support for large, multi-dimensional arrays and matrices",
               answers:[ "numpy","arrays.py", "django","pandas"],
           },
           {
               question: "  Raised when a variable does not exist",
               answers:[ "NameError","VarError","VariableError","CallError"],
           },
           {
               question: "  Used To import specific parts of a module",
               answers:[ "from", "to", "by","import"],
           },
           {
               question: "  Used to end a function and returns a generator",
               answers:["yield","try","catch","enddef"],
           },
       ],
   }]
 
 let mainArray = [
   {
       language: "python",
       set:[
           {
               question: " what is the extension for py?",
               answers:[ ".py", ".cpp",".p",".pyt"],
           },
           {
               question: "  the block of code is always executed no matter if the try block raises an error or not. ",
               answers:["finally","last", "end","final"],
           },
           {
               question: "  library for the adding support for large, multi-dimensional arrays and matrices",
               answers:[ "numpy","arrays.py", "django","pandas"],
           },
           {
               question: "  Raised when a variable does not exist",
               answers:[ "NameError","VarError","VariableError","CallError"],
           },
           {
               question: "  Used To import specific parts of a module",
               answers:[ "from", "to", "by","import"],
           },
           {
               question: "  Used to end a function and returns a generator",
               answers:["yield","try","catch","enddef"],
           },
       ],
   }]

   function gameStart(){
      //  console.log("game started")
       randomQuestionGenerator()
   }

  //  function firstquestiongenerator(){
  //   var random = Math.floor(Math.random() * 6)
  //   OptionClick(random)
  //  }

   function randomQuestionGenerator(){
       console.log("random runned")

       var random = Math.floor(Math.random() * 6)
       OptionClick(random)

   }

   function OptionClick(n){
      // console.log("click running");

      for(var i=0; i<4;i++){
        var question = document.getElementById("questions")
        question.innerHTML = mainArray[0]["set"][n]["question"]

        mainArray = shuffle(mainArray)

          let answer = document.querySelectorAll(".btn-options")[i]
          let option = document.querySelectorAll(".btn-options")[i]
          answer.innerHTML = mainArray[0]["set"][n]["answers"][i]
         var ranOnce = 0       
    option.addEventListener("click",() =>{
      var clickedOption = option.innerHTML;
      ranOnce++
        console.log(clickedOption + " clicked")
        if(ranOnce ===1){
          randomQuestionGenerator()
        }
      })
    }
}


function displayFunction(n){
  var q = mainArray[0]["set"][n]["question"]
  // console.log("df running");
  question = document.getElementById("questions").innerHTML = q
  var ansDisplay = mainArray[0]["set"][n]["answers"] //answers
  a = shuffle(ansDisplay)

  for(var j=0 ; j<4 ; j++){
    var answer = document.querySelectorAll(".btn-options")[j]
    answer.innerHTML = a[j]

  }
}


// function scoreGenerator(){
//   console.log("func ran");
//   for (var i = 0 ; i<4 ; i++){
//   var button = document.querySelectorAll(".btn-options")[i]
//   // console.log(button.innerHTML);
//   }
// }