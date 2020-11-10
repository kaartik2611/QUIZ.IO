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
            language: "Python",
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
               {
                 question: "When was python language developed?",
                 answers:[ "1991", "1972","1995","1990"],
               },
               {
                 question: "What is an abstract class?",
                 answers:[ "An abstract class exists only so that other \"concrete\" classes can inherit from the abstract class."," An abstract class is the name for any class from which you can instantiate an object.", "Abstract classes must inherit from concrete classes.","Abstract classes must be redefined any time an object is instantiated from them."],
               },
               {
                 question:" What data structure does a binary tree degenerate to if it isn't balanced properly?",
                 answers:["linked list","queue","set","ordered dict"]
               },
               {
                 question:"What is the runtime of accessing a value in a dictionary by using its key?",
                 answers:["O(1)","O(n^2)","O(log n)","O(n)"]
               },
               {
                 question:" What is the correct syntax for defining a class called testClass?",
                 answers:['class Game: pass',"def Game(): pass","def Game: pass",'class Game(): pass']
               },
               {
                 question:"What buit-in Python data type is commonly used to represent a queue?",
                 answers:['list','dictionary','set','None. You can only build a stack from scratch.']
               },
               {
                 question:"What is the purpose of the pass statement in Python?",
                 answers:['It is a null operation used mainly as a placeholder in functions, classes, etc.','It is used to skip the yield statement of a generator and return a value of None.','It is used to pass control from one statement block to another.','It is used to skip the rest of a while or for loop and return to the start of the loop.']
               },
               {
                 question:"What is runtime complexity of the list's built-in .append() method?",
                 answers:['O(1)',"O(n^2)","O(log n)","O(n)"]
               },
               {
                 question:"What is the correct syntax for changing the price to 1.5? :   fruit_info = { 'fruit': 'apple', 'count': 2, 'price': 3.5 }",
                 answers:["fruit_info ['price'] = 1.5",'fruit_info[3.5] = 1.5',"fruit_info['price'] == 1.5","fruit_info[3.5]==1.5"]
               },
               {
                 question:" What does a class's init() method do?",
                 answers:["The __init__() method is a constructor method that is called automatically whenever a new object is created from a class. It sets the initial state of a new object","The __init_method makes classes aware of each other if more than one class is defined in a single code file.","The _init_method is included to preserve backwards compatibility from Python 3 to Python 2, but no longer needs to be used in Python 3.","The __init__ method initializes any imports you may have included at the top of your file."]
               },
               {
                question: "Which code will add 'a' to the 'b' list?",
                answers: ["b.append (a)", "a.append (b)", "a.append ('b')", "append (a, b)"]  
              },
              {
                question: "Which code will add 'ala' key with the value 'cat' to the 'd' dictionary?",
                answers: [
                    "d ['ala'] = 'cat'", "d.append ('ala', 'cat')", "d {'ala'} = 'cat'", "d.ala = 'cat'"
                ]
            },
            {
              question: "Which code will sum up all the values ​​in the list: \ nmy_list = [1, 2, 3, 999, 21, 13, 91212, 12312]",
              answers:[
                "sum (my_list)", "my_list.sum ()", "my_list [sum]", "sum [my_list]"
            ]
            },
            {
              question:"Which keyword is not in python?",
              answers:[
                "function", "class", "def", "return"
            ]
        
            },
            {
              question:"Enter the name of the constructor method in the class:",
              answers: [
                "__init __ ()", "class", "str ()", "def"
            ]
            },
            {
              question: "If we want to add to the file without overwriting its contents, we will use?",
              answers: [
                "open (file_name, 'a')",
                "open (file_name, 'w')",
                "open (file_name, 'r')",
                "open (file_name, 'wb')"
            ]
            }
             ],
           },
           {
             language: "C",
             set:[
               {
                 question: "When was C language developed?",
                 answers:[ "1972", "1969","1973","1975"],
               },
               {
                 question: "What is the rank of C language in the list of most popular languages?",
                 answers:[ "First", "Second","Third","Fourth"],
               },
               {
                 question: " Which of the following is/are the feature/s of the C Language?",
                 answers:[ "Procedure Oriented", "Object Oriented","Both A and B","Neither A nor B"],
               },
               {
                 question: " What type of language is C Language?",
                 answers:[ "Medium Level", "High Level","Low Level","Machine Level"],
               },
               {
                 question: " What is the file extension for C?",
                 answers:[ ".c", ".cpp", ".py",".hs"],
               },
               {
                 question: " Who developed the C language?",
                 answers:[ "Dennis Richie", "Linus Torwalds","Bill Gates","Stephen Hawking"],
               },
               {
                 question: " What is the latest version of C language?",
                 answers:[ "C18", "C11", "C89", "C95"],
               },
               {
                 question: " Which of the following feature does C Language have?",
                 answers:[ "Pointers", "Namespace", "Constructor", "Destructor"],
               },
               {
                 question: " What type of cheecking does C have?",
                 answers:[ "Compile Time", "Runtime", "Both A and B", "Neither A nor B"],
               },
               {
                 question: "Which of the following is a charactersitic of C?",
                 answers:[ "Procedure-oriented", "Security", "Platform Dependent", "Dynamic"],
               },
             ],
           },
           {
             language: "C++",
             set:[
               {
                 question: "When was C++ language developed?",
                 answers:[ "1985", "1969","1972","1975"],
               },
               {
                 question: " What is the rank of C language in the list of most popular languages?",
                 answers:[ "Fourth", "Third","Second","First"],
               },
               {
                 question: " Which of the following is/are the feature/s of C++?",
                 answers:[ "Object Oriented", "Procedure Oriented", "Both A and B","Neither A nor B"],
               },
               {
                 question: " What type of language is C++?",
                 answers:[ "Medium Level", "High Level","Low Level","Machine Level"],
               },
               {
                 question: " What is the file extension for C++?",
                 answers:[ ".cpp", ".c", ".py",".hs"],
               },
               {
                 question: " Who developed C++?",
                 answers:[ "Bjarne Stroustrup", "Linus Torwalds","Dennis Richie","Stephen Hawking"],
               },
               {
                 question: " What is the latest version of C++?",
                 answers:[ "C++17", "C++15", "C++03", "C++98"],
               },
               {
                 question: " Which of the following language wasn't influenced by C++?",
                 answers:[ "C", "C#", "Java", "Python"],
               },
               {
                 question: " Which of the following access specifier is not available in C++?",
                 answers:[ "Default", "Public", "Private", "Protected"],
               },
               {
                 question: " Which of the following is a characteristic of C++?",
                 answers:[ "Secure", "Procedure Oriented", "Platform Independent", "Dynamic"],
               },
             ],
           },
           {
             language: "Java",
             set:[
               {
                 question: " What was the initial name for Java?",
                 answers:[ "Oak", "Javascript","Haskell","Rust"],
               },
               {
                 question: " What is the rank of Java in the list of most popular languages?",
                 answers:[ "Second", "Fourth","First","Third"],
               },
               {
                 question: " Which of the following feature is not available in Java?",
                 answers:[ "Pointers", "Methods","Classes","Objects"],
               },
               {
                 question: " Which of the following Operating System is largely based on Java?",
                 answers:[ "Android", "Windows","MacOS","Linux"],
               },
               {
                 question: " What is the name of Java's Mascot?",
                 answers:[ "Duke", "Blinky", "Freedo","Ferris"],
               },
               {
                 question: "  Who developed the Java language?",
                 answers:[ "James Gosling", "Linus Torwalds","Bill Gates","Stephen Hawking"],
               },
               {
                 question: "  What is the latest Java release?",
                 answers:[ "Java SE 14", "Java SE 13", "Java SE 12", "Java SE 11"],
               },
               {
                 question: "  How many times is Java downloaded every year?",
                 answers:[ "A billion", "5 billion", "A million", "10 million"],
               },
               {
                 question: "  When was Java first released?",
                 answers:[ "1996", "1992", "2000", "2006"],
               },
               {
                 question: "  Which of the following is not a feature of Java language?",
                 answers:[ "Procedure-oriented", "Secure", "Platform Independent", "Dynamic"],
               },
             ],    
           },
           {
             language : "HTML",
             set:[
                {
                  question : "what is the abbreviation of HTML?",
                  answers:["Hypertext Markup Language","Hypertext Markdown Language","Home Tool Markup Language"," Hyperlinks and Text Markup Language"]
                },
                {
                  question:" What is the purpose of the &lttrack&gt tag, and when should it be used?",
                  answers:[" The &lttrack&gt tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the &ltaudio&gt and &ltvideo&gt tag.","The &lttrack&gt tag is used for specifying subtitles. It is typically applied as a child of the &ltaudio&gt and &ltvideo&gt tags.","The &lttrack&gt tag is used for specifying subtitles. It is typically applied as a child of the &ltvideo&gt tag."," The &lttrack&gt tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the &ltvideo&gt tag."]
                },
                {
                  question:"In HTML5, which tag or tags embed a webpage inside of a webpage?",
                  answers:[" &ltiframe&gt","&ltframe&gt","&ltframe&gt and &ltframeset&gt","&ltiframe&gt, &ltframe&gt, and &ltframeset&gt"]
                },
                {
                  question:"What's the best way to apply bold styling to text?",
                  answers:["&ltstrong&gt","USE CSS","&ltbold&gt","&ltb&gt"]
                },
                {
                  question:" The \"value\" attribute is associated with which set of tags?",
                  answers:["&ltli&gt&ltinput&gt&ltoption&gt","&ltinput&gt&ltoption&gt&lttextarea&gt","&ltbutton&gt&ltinput&gt&ltform&gt","&ltinput&gt&ltlabel&gt&ltmeter&gt"]
                },
                {
                  question:"When should you use the &ltaside&gt element?",
                  answers:[" when the content can be removed without detracting from the page's message","for anything in parentheses"," for anything in a sidebar","for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it"]
                },
                {
                  question:" With which tags is the &ltsource&gt element associated?",
                  answers:["&ltpicture&gt, &ltaudio&gt, and &ltvideo&gt","&ltaudio&gt and &ltvideo&gt","&ltsvg&gt, &ltpicture&gt, &ltaudio&gt, and &ltvideo&gt","It is interchangeable with the src attribute, so any element which uses src may use &ltsource&gt"]
                },
                {
                  question:" How do you confirm that a document is written in HTML5?",
                  answers:["Use the &lt!DOCTYPE html&gt declaration that starts the document.","It is enclosed in a &lthtml&gt tag.","The browser receives encoding from the server to display the document with HTML5.","The server wraps the webpage in an HTML5 wrapper."]
                },
                {
                  question:"What is the &lthr&gttag typically used for?",
                  answers:[" It designates a topic shift within a section at the paragraph level."," It designates a topic shift within a section at the paragraph level.",'It designates a shift of topic at the section level',"This tag is depreciated and should not be used."]
                },
                {
                  question:"To get a link to open in a new window or tab, use the ______ attribute.",
                  answers:["_blank","_self","_new","_newpage"]
                },
                {
                  question:"What is the best semantic way to indicate that text refers to keyboard entry?",
                  answers:["&ltp&gtPress the &ltkbd&gtEnter&lt/kbd&gt key to proceed.&lt/p&gt","&ltp&gtPress the &ltsamp&gtEnter &lt/samp&gt key to proceed.&lt/p&gt","&ltp&gtPress the &lttt&gtEnter&lt/tt&gt key to proceed.&lt/p&gt","&ltp&gtPress the Enter key to proceed.&lt/p&gt"]
                },
                {
                  question:"What attribute applies a keyboard shortcut hint to the current element?",
                  answers:["accesskey","access","shortcut","keyboard"]
                },
                {
                  question:"Which tag is the root element of an HTML document?",
                  answers:["&lthtml&gt","&ltDOCTYPE html&gt","&ltbody&gt","&ltlink&gt"]
                },
                {
                  question:"What is the primary purpose of the &ltcanvas&gt tag?",
                  answers:["It allows drawing on a bitmap via JavaScript.","It displays annotated images.","It allows vector images to be rendered on the webpage.","It allows raster images to be rendered on the webpage."]
                },
                {
                  question:"What is the correct HTML element for inserting a line break?",
                  answers:["&ltbr&gt","&ltlb&gt","&ltbreak&gt","&ltlinebreak&gt"]
                },
        
             ],
           },
           {
            language : "CSS",
            set:[
              {
                question:"What does CSS stand for?",
                answers:["Cascading Style Sheets","Creative Style Sheets","Computer Style Sheets","Colorful Style Sheets"]
              },
              {
                question:"Using an attribute selector, how would you select an &lta&gt element with a \"title\" attribute?",
                answers:["a[title]{...}"," a &gt title {...}"," a.title {...}","a=title {...}"]
              },
              {
                question:"What is the line-height property primarily used for?",
                answers:[" to control the height of the space between two lines of content","to control the height of the space between heading elements","to control the height of the character size"," to control the width of the space between characters"]
              },
              {
                question:"Which HTML tag is used to define an internal style sheet?",
                answers:["&ltstyle&gt","&ltcss&gt","&ltscript&gt","&ltstyles&gt"]
              },
              {
                question:"To change the color of an SVG using CSS, which property is used?",
                answers:["Use fill to set the color inside the object and stroke to set the color of the border."," Use fill or background to set the color inside the object and stroke to set the color of the border.        ","The color cannot be changed with CSS","Use background-fill to set the color inside the object and stroke or border to set the color of the border"]
              },
              {
                question:"When using position: fixed, what will the element always be positioned relative to?",
                answers:[" the viewport","the parent element","the wrapper element","the closest element with position: relative"]
              },
              {
                question:"How would you make the first letter of every paragraph on the page red?",
                answers:["p::first-letter { color: red; }"," p:first-letter { color: red; }","first-letter::p { color: red; }","first-letter:p { color: red; }"]
              },
              {
                question:" What is the rem unit based on?",
                answers:["The rem unit is relative to the font-size of the root element of the page.","The rem unit is relative to the font-size of the containing (parent) element.        ","You have to set the value for the rem unit by writing a declaration such as rem { font-size: 1 Spx; }","The rem unit is relative to the font-size of the p element."]
              },
              {
                question:"Which of these would give a block element rounded corners?",
                answers:["border-radius: 10px","corner-curve: 10px","border-corner: 10px"," corner-radius: 10px"]
              },
              {
                question:" Which of the following is not a valid color value?",
                answers:[" color: 000000","color: #000000","color: rgb(0,0,0)","color: #000"]
              },
              {
                question:"  What is not true about class selectors?",
                answers:["Only one class value can be assigned to an element","An element can have multiple class value"," Class selectors are marked with a leading period.","More than one element can have the same class value"]
              },
              {
                question:"What is the difference between the margin and padding properties?",
                answers:[" Margin adds space around an element; padding adds apace inside of an element.","Margin adds space around and inside of an element; padding adds space only inside of an element."," Margin adds a line around an element, padding adds space inside of an element.",        " Margin adds space inside of an element, padding adds space around an element."]
              },
              {
                question:"Which style places an element at a fixed location within its container?",
                answers:["position: absolute;","display: flex;","display: block;"," float: left;"]
              },
              {
                question:" What is the CSS selector for an tag containing the title attribute?",
                answers:["a[title]","a &gt title"," a=title"," a.title"]
              },
              {
                question:"Which is the correct CSS syntax?",
                answers:["body{color:#787878;","body:color=#787878","body:{color:#787878};","body{color=#787878};"]
              },
        
        
            ],
          },
          {
            language : "JavaScript",
            set:[
              {
                question:" Which operator returns true if the two compared values are not equal?",
                answers:[" '!=='","==!","~","!="]
              },
              {
                question:"Which statement creates a new object using the Person constructor?",
                answers:["var student = new Person();","var student = Person();","var student = construct Person;","var student = construct Person();"]
              },
              {
                question:"How does a function create a closure?",
                answers:["It returns a reference to a variable in its parent scope."," It completes execution without returning."," It copies a local variable to the global scope."," It reloads the document whenever the value changes."]
              },
              {
                question:" Which property references the DOM object that dispatched an event?",
                answers:["target","self","source","object"]
              },
              {
                question:"Which method converts JSON data to a JavaScript object?",
                answers:["JSON.parse();","JSON.fromString();","JSON.toObject()","JSON.stringify()"]
              },
              {
                question:"Which Object method returns an iterable that can be used to iterate over the properties of an object?",
                answers:["Object.keys()"," Object.each()","Object.loop()"," Object.get()"]
              },
              {
                question:"Which of the following is not a keyword in JavaScript?",
                answers:["array","function","this","catch"]
              },
              {
                question:'Which statement is true about the "async" attribute for the HTML script tag?',
                answers:["It can be used only for external JavaScript code."," It can be used only for internal or external JavaScript code that exports a promise.                "," It can be used only for internal JavaScript code.","It can be used for both internal and external JavaScript code."]
              },
              {
                question:"Which of the following is not a unary operator?",
                answers:["instanceof","delete","typeof","void"]
              },
              {
                question:"Inside which HTML element do we put the JavaScript?",
                answers:["&ltscript&gt","&ltjs&gt","&ltscripting&gt","&ltjavascript&gt"]
              }
            ],
          },
         ]
var mainArray = [
          {
            language: "Python",
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
               {
                 question: "When was python language developed?",
                 answers:[ "1991", "1972","1995","1990"],
               },
               {
                 question: "What is an abstract class?",
                 answers:[ "An abstract class exists only so that other \"concrete\" classes can inherit from the abstract class."," An abstract class is the name for any class from which you can instantiate an object.", "Abstract classes must inherit from concrete classes.","Abstract classes must be redefined any time an object is instantiated from them."],
               },
               {
                 question:" What data structure does a binary tree degenerate to if it isn't balanced properly?",
                 answers:["linked list","queue","set","ordered dict"]
               },
               {
                 question:"What is the runtime of accessing a value in a dictionary by using its key?",
                 answers:["O(1)","O(n^2)","O(log n)","O(n)"]
               },
               {
                 question:" What is the correct syntax for defining a class called testClass?",
                 answers:['class Game: pass',"def Game(): pass","def Game: pass",'class Game(): pass']
               },
               {
                 question:"What buit-in Python data type is commonly used to represent a queue?",
                 answers:['list','dictionary','set','None. You can only build a stack from scratch.']
               },
               {
                 question:"What is the purpose of the pass statement in Python?",
                 answers:['It is a null operation used mainly as a placeholder in functions, classes, etc.','It is used to skip the yield statement of a generator and return a value of None.','It is used to pass control from one statement block to another.','It is used to skip the rest of a while or for loop and return to the start of the loop.']
               },
               {
                 question:"What is runtime complexity of the list's built-in .append() method?",
                 answers:['O(1)',"O(n^2)","O(log n)","O(n)"]
               },
               {
                 question:"What is the correct syntax for changing the price to 1.5? :   fruit_info = { 'fruit': 'apple', 'count': 2, 'price': 3.5 }",
                 answers:["fruit_info ['price'] = 1.5",'fruit_info[3.5] = 1.5',"fruit_info['price'] == 1.5","fruit_info[3.5]==1.5"]
               },
               {
                 question:" What does a class's init() method do?",
                 answers:["The __init__() method is a constructor method that is called automatically whenever a new object is created from a class. It sets the initial state of a new object","The __init_method makes classes aware of each other if more than one class is defined in a single code file.","The _init_method is included to preserve backwards compatibility from Python 3 to Python 2, but no longer needs to be used in Python 3.","The __init__ method initializes any imports you may have included at the top of your file."]
               },
               {
                question: "Which code will add 'a' to the 'b' list?",
                answers: ["b.append (a)", "a.append (b)", "a.append ('b')", "append (a, b)"]  
              },
              {
                question: "Which code will add 'ala' key with the value 'cat' to the 'd' dictionary?",
                answers: [
                    "d ['ala'] = 'cat'", "d.append ('ala', 'cat')", "d {'ala'} = 'cat'", "d.ala = 'cat'"
                ]
            },
            {
              question: "Which code will sum up all the values ​​in the list: \ nmy_list = [1, 2, 3, 999, 21, 13, 91212, 12312]",
              answers:[
                "sum (my_list)", "my_list.sum ()", "my_list [sum]", "sum [my_list]"
            ]
            },
            {
              question:"Which keyword is not in python?",
              answers:[
                "function", "class", "def", "return"
            ]
        
            },
            {
              question:"Enter the name of the constructor method in the class:",
              answers: [
                "__init __ ()", "class", "str ()", "def"
            ]
            },
            {
              question: "If we want to add to the file without overwriting its contents, we will use?",
              answers: [
                "open (file_name, 'a')",
                "open (file_name, 'w')",
                "open (file_name, 'r')",
                "open (file_name, 'wb')"
            ]
            }
             ],
           },
           {
             language: "C",
             set:[
               {
                 question: "When was C language developed?",
                 answers:[ "1972", "1969","1973","1975"],
               },
               {
                 question: "What is the rank of C language in the list of most popular languages?",
                 answers:[ "First", "Second","Third","Fourth"],
               },
               {
                 question: " Which of the following is/are the feature/s of the C Language?",
                 answers:[ "Procedure Oriented", "Object Oriented","Both A and B","Neither A nor B"],
               },
               {
                 question: " What type of language is C Language?",
                 answers:[ "Medium Level", "High Level","Low Level","Machine Level"],
               },
               {
                 question: " What is the file extension for C?",
                 answers:[ ".c", ".cpp", ".py",".hs"],
               },
               {
                 question: " Who developed the C language?",
                 answers:[ "Dennis Richie", "Linus Torwalds","Bill Gates","Stephen Hawking"],
               },
               {
                 question: " What is the latest version of C language?",
                 answers:[ "C18", "C11", "C89", "C95"],
               },
               {
                 question: " Which of the following feature does C Language have?",
                 answers:[ "Pointers", "Namespace", "Constructor", "Destructor"],
               },
               {
                 question: " What type of cheecking does C have?",
                 answers:[ "Compile Time", "Runtime", "Both A and B", "Neither A nor B"],
               },
               {
                 question: "Which of the following is a charactersitic of C?",
                 answers:[ "Procedure-oriented", "Security", "Platform Dependent", "Dynamic"],
               },
             ],
           },
           {
             language: "C++",
             set:[
               {
                 question: "When was C++ language developed?",
                 answers:[ "1985", "1969","1972","1975"],
               },
               {
                 question: " What is the rank of C language in the list of most popular languages?",
                 answers:[ "Fourth", "Third","Second","First"],
               },
               {
                 question: " Which of the following is/are the feature/s of C++?",
                 answers:[ "Object Oriented", "Procedure Oriented", "Both A and B","Neither A nor B"],
               },
               {
                 question: " What type of language is C++?",
                 answers:[ "Medium Level", "High Level","Low Level","Machine Level"],
               },
               {
                 question: " What is the file extension for C++?",
                 answers:[ ".cpp", ".c", ".py",".hs"],
               },
               {
                 question: " Who developed C++?",
                 answers:[ "Bjarne Stroustrup", "Linus Torwalds","Dennis Richie","Stephen Hawking"],
               },
               {
                 question: " What is the latest version of C++?",
                 answers:[ "C++17", "C++15", "C++03", "C++98"],
               },
               {
                 question: " Which of the following language wasn't influenced by C++?",
                 answers:[ "C", "C#", "Java", "Python"],
               },
               {
                 question: " Which of the following access specifier is not available in C++?",
                 answers:[ "Default", "Public", "Private", "Protected"],
               },
               {
                 question: " Which of the following is a characteristic of C++?",
                 answers:[ "Secure", "Procedure Oriented", "Platform Independent", "Dynamic"],
               },
             ],
           },
           {
             language: "Java",
             set:[
               {
                 question: " What was the initial name for Java?",
                 answers:[ "Oak", "Javascript","Haskell","Rust"],
               },
               {
                 question: " What is the rank of Java in the list of most popular languages?",
                 answers:[ "Second", "Fourth","First","Third"],
               },
               {
                 question: " Which of the following feature is not available in Java?",
                 answers:[ "Pointers", "Methods","Classes","Objects"],
               },
               {
                 question: " Which of the following Operating System is largely based on Java?",
                 answers:[ "Android", "Windows","MacOS","Linux"],
               },
               {
                 question: " What is the name of Java's Mascot?",
                 answers:[ "Duke", "Blinky", "Freedo","Ferris"],
               },
               {
                 question: "  Who developed the Java language?",
                 answers:[ "James Gosling", "Linus Torwalds","Bill Gates","Stephen Hawking"],
               },
               {
                 question: "  What is the latest Java release?",
                 answers:[ "Java SE 14", "Java SE 13", "Java SE 12", "Java SE 11"],
               },
               {
                 question: "  How many times is Java downloaded every year?",
                 answers:[ "A billion", "5 billion", "A million", "10 million"],
               },
               {
                 question: "  When was Java first released?",
                 answers:[ "1996", "1992", "2000", "2006"],
               },
               {
                 question: "  Which of the following is not a feature of Java language?",
                 answers:[ "Procedure-oriented", "Secure", "Platform Independent", "Dynamic"],
               },
             ],    
           },
           {
             language : "HTML",
             set:[
                {
                  question : "what is the abbreviation of HTML?",
                  answers:["Hypertext Markup Language","Hypertext Markdown Language","Home Tool Markup Language"," Hyperlinks and Text Markup Language"]
                },
                {
                  question:" What is the purpose of the &lttrack&gt tag, and when should it be used?",
                  answers:[" The &lttrack&gt tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the &ltaudio&gt and &ltvideo&gt tag.","The &lttrack&gt tag is used for specifying subtitles. It is typically applied as a child of the &ltaudio&gt and &ltvideo&gt tags.","The &lttrack&gt tag is used for specifying subtitles. It is typically applied as a child of the &ltvideo&gt tag."," The &lttrack&gt tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the &ltvideo&gt tag."]
                },
                {
                  question:"In HTML5, which tag or tags embed a webpage inside of a webpage?",
                  answers:[" &ltiframe&gt","&ltframe&gt","&ltframe&gt and &ltframeset&gt","&ltiframe&gt, &ltframe&gt, and &ltframeset&gt"]
                },
                {
                  question:"What's the best way to apply bold styling to text?",
                  answers:["&ltstrong&gt","USE CSS","&ltbold&gt","&ltb&gt"]
                },
                {
                  question:" The \"value\" attribute is associated with which set of tags?",
                  answers:["&ltli&gt&ltinput&gt&ltoption&gt","&ltinput&gt&ltoption&gt&lttextarea&gt","&ltbutton&gt&ltinput&gt&ltform&gt","&ltinput&gt&ltlabel&gt&ltmeter&gt"]
                },
                {
                  question:"When should you use the &ltaside&gt element?",
                  answers:[" when the content can be removed without detracting from the page's message","for anything in parentheses"," for anything in a sidebar","for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it"]
                },
                {
                  question:" With which tags is the &ltsource&gt element associated?",
                  answers:["&ltpicture&gt, &ltaudio&gt, and &ltvideo&gt","&ltaudio&gt and &ltvideo&gt","&ltsvg&gt, &ltpicture&gt, &ltaudio&gt, and &ltvideo&gt","It is interchangeable with the src attribute, so any element which uses src may use &ltsource&gt"]
                },
                {
                  question:" How do you confirm that a document is written in HTML5?",
                  answers:["Use the &lt!DOCTYPE html&gt declaration that starts the document.","It is enclosed in a &lthtml&gt tag.","The browser receives encoding from the server to display the document with HTML5.","The server wraps the webpage in an HTML5 wrapper."]
                },
                {
                  question:"What is the &lthr&gttag typically used for?",
                  answers:[" It designates a topic shift within a section at the paragraph level."," It designates a topic shift within a section at the paragraph level.",'It designates a shift of topic at the section level',"This tag is depreciated and should not be used."]
                },
                {
                  question:"To get a link to open in a new window or tab, use the ______ attribute.",
                  answers:["_blank","_self","_new","_newpage"]
                },
                {
                  question:"What is the best semantic way to indicate that text refers to keyboard entry?",
                  answers:["&ltp&gtPress the &ltkbd&gtEnter&lt/kbd&gt key to proceed.&lt/p&gt","&ltp&gtPress the &ltsamp&gtEnter &lt/samp&gt key to proceed.&lt/p&gt","&ltp&gtPress the &lttt&gtEnter&lt/tt&gt key to proceed.&lt/p&gt","&ltp&gtPress the Enter key to proceed.&lt/p&gt"]
                },
                {
                  question:"What attribute applies a keyboard shortcut hint to the current element?",
                  answers:["accesskey","access","shortcut","keyboard"]
                },
                {
                  question:"Which tag is the root element of an HTML document?",
                  answers:["&lthtml&gt","&ltDOCTYPE html&gt","&ltbody&gt","&ltlink&gt"]
                },
                {
                  question:"What is the primary purpose of the &ltcanvas&gt tag?",
                  answers:["It allows drawing on a bitmap via JavaScript.","It displays annotated images.","It allows vector images to be rendered on the webpage.","It allows raster images to be rendered on the webpage."]
                },
                {
                  question:"What is the correct HTML element for inserting a line break?",
                  answers:["&ltbr&gt","&ltlb&gt","&ltbreak&gt","&ltlinebreak&gt"]
                },
        
             ],
           },
           {
            language : "CSS",
            set:[
              {
                question:"What does CSS stand for?",
                answers:["Cascading Style Sheets","Creative Style Sheets","Computer Style Sheets","Colorful Style Sheets"]
              },
              {
                question:"Using an attribute selector, how would you select an &lta&gt element with a \"title\" attribute?",
                answers:["a[title]{...}"," a &gt title {...}"," a.title {...}","a=title {...}"]
              },
              {
                question:"What is the line-height property primarily used for?",
                answers:[" to control the height of the space between two lines of content","to control the height of the space between heading elements","to control the height of the character size"," to control the width of the space between characters"]
              },
              {
                question:"Which HTML tag is used to define an internal style sheet?",
                answers:["&ltstyle&gt","&ltcss&gt","&ltscript&gt","&ltstyles&gt"]
              },
              {
                question:"To change the color of an SVG using CSS, which property is used?",
                answers:["Use fill to set the color inside the object and stroke to set the color of the border."," Use fill or background to set the color inside the object and stroke to set the color of the border.        ","The color cannot be changed with CSS","Use background-fill to set the color inside the object and stroke or border to set the color of the border"]
              },
              {
                question:"When using position: fixed, what will the element always be positioned relative to?",
                answers:[" the viewport","the parent element","the wrapper element","the closest element with position: relative"]
              },
              {
                question:"How would you make the first letter of every paragraph on the page red?",
                answers:["p::first-letter { color: red; }"," p:first-letter { color: red; }","first-letter::p { color: red; }","first-letter:p { color: red; }"]
              },
              {
                question:" What is the rem unit based on?",
                answers:["The rem unit is relative to the font-size of the root element of the page.","The rem unit is relative to the font-size of the containing (parent) element.        ","You have to set the value for the rem unit by writing a declaration such as rem { font-size: 1 Spx; }","The rem unit is relative to the font-size of the p element."]
              },
              {
                question:"Which of these would give a block element rounded corners?",
                answers:["border-radius: 10px","corner-curve: 10px","border-corner: 10px"," corner-radius: 10px"]
              },
              {
                question:" Which of the following is not a valid color value?",
                answers:[" color: 000000","color: #000000","color: rgb(0,0,0)","color: #000"]
              },
              {
                question:"  What is not true about class selectors?",
                answers:["Only one class value can be assigned to an element","An element can have multiple class value"," Class selectors are marked with a leading period.","More than one element can have the same class value"]
              },
              {
                question:"What is the difference between the margin and padding properties?",
                answers:[" Margin adds space around an element; padding adds apace inside of an element.","Margin adds space around and inside of an element; padding adds space only inside of an element."," Margin adds a line around an element, padding adds space inside of an element.",        " Margin adds space inside of an element, padding adds space around an element."]
              },
              {
                question:"Which style places an element at a fixed location within its container?",
                answers:["position: absolute;","display: flex;","display: block;"," float: left;"]
              },
              {
                question:" What is the CSS selector for an tag containing the title attribute?",
                answers:["a[title]","a &gt title"," a=title"," a.title"]
              },
              {
                question:"Which is the correct CSS syntax?",
                answers:["body{color:#787878;","body:color=#787878","body:{color:#787878};","body{color=#787878};"]
              },
        
        
            ],
          },
          {
            language : "JavaScript",
            set:[
              {
                question:" Which operator returns true if the two compared values are not equal?",
                answers:[" '!=='","==!","~","!="]
              },
              {
                question:"Which statement creates a new object using the Person constructor?",
                answers:["var student = new Person();","var student = Person();","var student = construct Person;","var student = construct Person();"]
              },
              {
                question:"How does a function create a closure?",
                answers:["It returns a reference to a variable in its parent scope."," It completes execution without returning."," It copies a local variable to the global scope."," It reloads the document whenever the value changes."]
              },
              {
                question:" Which property references the DOM object that dispatched an event?",
                answers:["target","self","source","object"]
              },
              {
                question:"Which method converts JSON data to a JavaScript object?",
                answers:["JSON.parse();","JSON.fromString();","JSON.toObject()","JSON.stringify()"]
              },
              {
                question:"Which Object method returns an iterable that can be used to iterate over the properties of an object?",
                answers:["Object.keys()"," Object.each()","Object.loop()"," Object.get()"]
              },
              {
                question:"Which of the following is not a keyword in JavaScript?",
                answers:["array","function","this","catch"]
              },
              {
                question:'Which statement is true about the "async" attribute for the HTML script tag?',
                answers:["It can be used only for external JavaScript code."," It can be used only for internal or external JavaScript code that exports a promise.                "," It can be used only for internal JavaScript code.","It can be used for both internal and external JavaScript code."]
              },
              {
                question:"Which of the following is not a unary operator?",
                answers:["instanceof","delete","typeof","void"]
              },
              {
                question:"Inside which HTML element do we put the JavaScript?",
                answers:["&ltscript&gt","&ltjs&gt","&ltscripting&gt","&ltjavascript&gt"]
              }
            ],
          },
         ]

     let score = 0;
      const questionsDisplay = document.querySelector(".continue-button button");
      const displayNone = document.getElementsByClassName("display-none");
      const displayGame = document.querySelector(".gameplay-container")
      questionsDisplay.addEventListener("click",() => {
          for (var i = 0; i <displayNone.length; i++) {        
              displayNone[i].style.display ="none"; 
              displayGame.style.display = "block";
          }
      });
   var choiceByUser = document.querySelector(".select-selected")
  
   choiceByUser.onclick = () => {
     var select= document.getElementById("select-code").selectedIndex;
     var q = (document.getElementsByTagName("option")[select].value)
     var continueBtn =document.getElementById("continue")
     continueBtn.onclick =  gameStart(q)

    }
    let quesNumber=1
    function gameStart(q){

  var random = Math.floor(Math.random() * mainArray[q]["set"].length)
  var options = shuffle(mainArray[q]["set"][random]["answers"])
  console.log(quesNumber);

  for(var i=0; i<4;i++){
    var question = document.getElementById("questions")
    question.innerHTML ="Q" + quesNumber +"] " + mainArray[q]["set"][random]["question"]
    
    let answer = document.querySelectorAll(".btn-options")[i]
    answer.innerHTML = options[i]
  }
  for(var i=0; i<4;i++){
    let option = document.querySelectorAll(".btn-options")[i]
    const correctOption = unshuffledArray[q]["set"][random]["answers"][0]
    if(option.innerHTML === correctOption){
      setTimeout(function(){
        option.classList.remove("correct")},300)
    }
    option.onclick = ()=>{
      quesNumber++

      ;
      if(correctOption===option.innerText){
        score++
        option.classList.add("correct")
        setTimeout(function(){
          option.classList.remove("correct")},300)
      }
      else{
        option.classList.add("wrong")
          setTimeout(function(){
            option.classList.remove("wrong")},300)   
      }
      

      document.getElementById("score").innerHTML = "Score: " +score
 
      setTimeout(function(){
        gameStart(q) },300)
    }
  }
var endgame = document.getElementById("home")
endgame.onclick = ()=>{
  displayGame.style.display = "none";
  var finalp = document.querySelectorAll(".final-page")
  console.log(finalp);
  for (var i = 0; i <finalp.length; i++) {
  finalp[i].style.display = "block"
      }

  var finalscore = document.getElementById("final-score")
  finalscore.innerText = "Your Score is : " + score + " / " + (quesNumber-1)
  var avg = document.getElementById("accuracy")
  avg.innerText = "your Accuracy was : " + (score/(quesNumber-1) * 100) + "%"

    }

}
