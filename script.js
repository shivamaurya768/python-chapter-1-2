let q = [
  ["Q-->1. What is an algorithm?", {
    "A. A computer device": false,
    "B. A step-by-step method to solve a problem": true,
    "C. A type of memory": false,
    "D. A flowchart symbol": false
  }],
  ["Q-->2. Which property means an algorithm must be clear and exact?", {
    "A. Finite": false,
    "B. Definite": true,
    "C. Random": false,
    "D. Infinite": false
  }],
  ["Q-->3. What does a flowchart represent?", {
    "A. A graphical representation of an algorithm": true,
    "B. A keyboard shortcut": false,
    "C. A compiler": false,
    "D. A storage device": false
  }],
  ["Q-->4. Which symbol is used for Start/End in a flowchart?", {
    "A. Rectangle": false,
    "B. Diamond": false,
    "C. Oval": true,
    "D. Parallelogram": false
  }],
  ["Q-->5. Which symbol is used for a process?", {
    "A. Diamond": false,
    "B. Rectangle": true,
    "C. Oval": false,
    "D. Circle": false
  }],
  ["Q-->6. Which symbol is used for a decision?", {
    "A. Rectangle": false,
    "B. Parallelogram": false,
    "C. Oval": false,
    "D. Diamond": true
  }],
  ["Q-->7. Which symbol is used for input/output?", {
    "A. Rectangle": false,
    "B. Parallelogram": true,
    "C. Diamond": false,
    "D. Oval": false
  }],
  ["Q-->8. What do arrows in a flowchart show?", {
    "A. Data storage": false,
    "B. Flow direction": true,
    "C. Program errors": false,
    "D. Memory size": false
  }],
  ["Q-->9. What is pseudocode?", {
    "A. A human-readable way to write an algorithm": true,
    "B. A hardware language": false,
    "C. A flowchart shape": false,
    "D. A binary file": false
  }],
  ["Q-->10. What does a compiler do?", {
    "A. Translates a program line by line": false,
    "B. Converts an entire program into machine code at once": true,
    "C. Draws flowcharts": false,
    "D. Deletes syntax errors automatically": false
  }],
  ["Q-->11. What does an interpreter do?", {
    "A. Translates the whole program at once": false,
    "B. Converts machine code into text": false,
    "C. Translates and executes line by line": true,
    "D. Builds a flowchart": false
  }],
  ["Q-->12. What is debugging?", {
    "A. Writing documentation": false,
    "B. Finding and removing errors": true,
    "C. Printing output": false,
    "D. Running a printer test": false
  }],
  ["Q-->13. Why is testing done?", {
    "A. To check whether the program works correctly": true,
    "B. To change the monitor size": false,
    "C. To create variables": false,
    "D. To install hardware": false
  }],
  ["Q-->14. Why is documentation important?", {
    "A. It increases internet speed": false,
    "B. It removes all bugs automatically": false,
    "C. It helps explain and maintain the program": true,
    "D. It creates machine code": false
  }],
  ["Q-->15. In sequential processing, what happens?", {
    "A. Steps are executed in order": true,
    "B. Steps are repeated forever": false,
    "C. A decision is always made": false,
    "D. Output comes before input": false
  }],
  ["Q-->16. What is decision-based processing?", {
    "A. Processing that repeats steps only": false,
    "B. Processing based on a condition": true,
    "C. Processing without input": false,
    "D. Processing that uses only output": false
  }],
  ["Q-->17. What is iterative processing?", {
    "A. A process with repetition or looping": true,
    "B. A process with no output": false,
    "C. A process with one decision only": false,
    "D. A process that only stores files": false
  }],
  ["Q-->18. Which of these is a translator?", {
    "A. Compiler": true,
    "B. Monitor": false,
    "C. Mouse": false,
    "D. Printer": false
  }],
  ["Q-->19. What is the purpose of a terminal symbol?", {
    "A. To show start and stop": true,
    "B. To show input only": false,
    "C. To show calculation only": false,
    "D. To show data storage": false
  }],
  ["Q-->20. What is the main purpose of an algorithm?", {
    "A. To make a computer faster": false,
    "B. To solve a problem in steps": true,
    "C. To store files": false,
    "D. To display graphics": false
  }],
  ["Q-->21. Which property means an algorithm must end after a limited number of steps?", {
    "A. Infinite": false,
    "B. Finite": true,
    "C. Ambiguous": false,
    "D. Random": false
  }],
  ["Q-->22. Which of these is an example of a problem-solving algorithm?", {
    "A. Turning on a monitor": false,
    "B. Reversing digits of a number": true,
    "C. Cleaning a keyboard": false,
    "D. Opening a folder": false
  }],
  ["Q-->23. Which symbol represents the input of data in a flowchart?", {
    "A. Parallelogram": true,
    "B. Oval": false,
    "C. Rectangle": false,
    "D. Diamond": false
  }],
  ["Q-->24. Which symbol represents an action or calculation?", {
    "A. Diamond": false,
    "B. Oval": false,
    "C. Rectangle": true,
    "D. Parallelogram": false
  }],
  ["Q-->25. Which symbol is used to make a yes/no choice?", {
    "A. Rectangle": false,
    "B. Diamond": true,
    "C. Oval": false,
    "D. Parallelogram": false
  }],
  ["Q-->26. What is the full form of GCD?", {
    "A. General Code Design": false,
    "B. Greatest Common Divisor": true,
    "C. Graphical Control Device": false,
    "D. Global Common Data": false
  }],
  ["Q-->27. What is the reverse of the number 1234?", {
    "A. 4321": true,
    "B. 2341": false,
    "C. 1243": false,
    "D. 4312": false
  }],
  ["Q-->28. Which of these numbers is prime?", {
    "A. 9": false,
    "B. 12": false,
    "C. 11": true,
    "D. 15": false
  }],
  ["Q-->29. What is factorial of 5?", {
    "A. 25": false,
    "B. 120": true,
    "C. 15": false,
    "D. 60": false
  }],
  ["Q-->30. What comes next in Fibonacci series after 0, 1, 1, 2?", {
    "A. 4": false,
    "B. 5": false,
    "C. 3": true,
    "D. 6": false
  }],
  ["Q-->31. What does decimal to binary conversion produce?", {
    "A. Base-16 number": false,
    "B. Base-10 number": false,
    "C. Base-2 number": true,
    "D. Text output": false
  }],
  ["Q-->32. Which algorithm is used to find the largest number in a list?", {
    "A. Comparison algorithm": true,
    "B. Formatting algorithm": false,
    "C. Drawing algorithm": false,
    "D. Compression algorithm": false
  }],
  ["Q-->33. What is the output of a sum algorithm?", {
    "A. Product of numbers": false,
    "B. Total sum": true,
    "C. Reverse number": false,
    "D. Prime check": false
  }],
  ["Q-->34. What does a compiler usually produce?", {
    "A. Executable code": true,
    "B. Flowchart symbols": false,
    "C. Input data": false,
    "D. Keyboard shortcuts": false
  }],
  ["Q-->35. Which translator works line by line?", {
    "A. Compiler": false,
    "B. Interpreter": true,
    "C. Assembler only": false,
    "D. Printer": false
  }],
  ["Q-->36. Which process helps in finding errors in a program?", {
    "A. Editing images": false,
    "B. Formatting": false,
    "C. Debugging": true,
    "D. Printing": false
  }],
  ["Q-->37. Which of the following is a reason for testing a program?", {
    "A. To check correctness": true,
    "B. To change file name": false,
    "C. To increase RAM": false,
    "D. To create hardware": false
  }],
  ["Q-->38. Which term refers to a clear explanation of program steps?", {
    "A. Compilation": false,
    "B. Encryption": false,
    "C. Documentation": true,
    "D. Execution": false
  }],
  ["Q-->39. What is the main use of arrows in a flowchart?", {
    "A. Show direction of control flow": true,
    "B. Show data storage": false,
    "C. Show comments only": false,
    "D. Show decision only": false
  }],
  ["Q-->40. Which one is a standard flowchart symbol for output?", {
    "A. Parallelogram": true,
    "B. Diamond": false,
    "C. Oval": false,
    "D. Rectangle": false
  }],
  ["Q-->41. Which structure uses a condition to select between paths?", {
    "A. Sequential": false,
    "B. Decision": true,
    "C. Iterative": false,
    "D. Random": false
  }],
  ["Q-->42. Which structure repeats a set of steps?", {
    "A. Iterative": true,
    "B. Sequential": false,
    "C. Decision": false,
    "D. Terminal": false
  }],
  ["Q-->43. In a flowchart, a rectangle means:", {
    "A. Start/End": false,
    "B. Process": true,
    "C. Input/Output": false,
    "D. Decision": false
  }],
  ["Q-->44. In a flowchart, an oval means:", {
    "A. Decision": false,
    "B. Process": false,
    "C. Start/End": true,
    "D. Input/Output": false
  }],
  ["Q-->45. In a flowchart, a diamond means:", {
    "A. Process": false,
    "B. Input/Output": false,
    "C. Start/End": false,
    "D. Decision": true
  }],
  ["Q-->46. What does an algorithm for exchanging two values do?", {
    "A. Swaps the values of two variables": true,
    "B. Deletes both values": false,
    "C. Multiplies both values": false,
    "D. Converts both values to text": false
  }],
  ["Q-->47. Which of these is a valid example of iterative processing?", {
    "A. One-time input only": false,
    "B. Repeating until a condition is met": true,
    "C. Random selection only": false,
    "D. No steps at all": false
  }],
  ["Q-->48. What is the output of reversing 5678?", {
    "A. 6587": false,
    "B. 5678": false,
    "C. 7856": false,
    "D. 8765": true,
  }],
  ["Q-->49. What is the main aim of problem solving using algorithms?", {
    "A. To organize steps logically": true,
    "B. To store music": false,
    "C. To edit photos": false,
    "D. To increase brightness": false
  }],
  ["Q-->50. Which tool helps programmers understand program logic visually?", {
    "A. Scanner": false,
    "B. Speaker": false,
    "C. Flowchart": true,
    "D. Keyboard": false
  }],
  ["Q-->51. Which statement about algorithms is correct?", {
    "A. They must be precise and ordered": true,
    "B. They can be unclear": false,
    "C. They must be infinite": false,
    "D. They must always use graphics": false
  }],
  ["Q-->52. Which of the following is a valid output for prime test of 13 ?", {
    "A. Even": false,
    "B. Composite": false,
    "C. Prime": true,
    "D. Negative": false
  }],
  ["Q-->53. What is the result of 4 factorial ?", {
    "A. 24": true,
    "B. 16": false,
    "C. 12": false,
    "D. 20": false
  }],
  ["Q-->54. Which of these is the first step in a good algorithm?", {
    "A. Understand the problem": true,
    "B. Print the result": false,
    "C. Close the program": false,
    "D. Ignore input": false
  }],
  ["Q-->55. Which of these is NOT a flowchart symbol?", {
    "A. Oval": false,
    "B. Triangle": true,
    "C. Rectangle": false,
    "D. Diamond": false
  }],
  ["Q-->56. What is the meaning of 'finite' in an algorithm?", {
    "A. It has no output": false,
    "B. It runs forever": false,
    "C. It ends after a limited number of steps": true,
    "D. It uses only graphs": false
  }],
  ["Q-->57. Which one is used for input in a flowchart?", {
    "A. Parallelogram": true,
    "B. Diamond": false,
    "C. Oval": false,
    "D. Rectangle": false
  }],
  ["Q-->58. Which one is used for output in a flowchart?", {
    "A. Rectangle": false,
    "B. Parallelogram": true,
    "C. Oval": false,
    "D. Diamond": false
  }],
  ["Q-->59. Which translator detects errors after each line?", {
    "A. Interpreter": true,
    "B. Compiler": false,
    "C. Assembler": false,
    "D. Linker": false
  }],
  ["Q-->60. Which translator is faster for execution after translation?", {
    "A. Compiler": true,
    "B. Interpreter": false,
    "C. Flowchart": false,
    "D. Debugger": false
  }],
  ["Q-->61. What is the purpose of an upper triangular matrix problem?", {
    "A. To count vowels": false,
    "B. To sort words alphabetically": false,
    "C. To print files": false,
    "D. To identify zeros below the main diagonal": true,
  }],
  ["Q-->62. Which problem asks for the largest element in an array?", {
    "A. Comparison problem": true,
    "B. Printing problem": false,
    "C. Audio problem": false,
    "D. Sorting screen problem": false
  }],
  ["Q-->63. Which of these is a common step in sum algorithms?", {
    "A.Delete all numbers": false, 
    "B. Turn off the computer": false,
    "C. Initialize total to zero": true,
    "D. Convert to image": false
  }],
  ["Q-->64. Which property ensures an algorithm gives the same meaning to everyone?", {
    "A. Definite": true,
    "B. Infinite": false,
    "C. Vague": false,
    "D. Slow": false
  }],
  ["Q-->65. What is the main use of pseudocode before coding?", {
    "A. To plan logic simply": true,
    "B. To compile directly": false,
    "C. To replace testing": false,
    "D. To make hardware": false
  }],
  ["Q-->66. Which of these is an example of a decision-based algorithm?", {
    "A. Adding two numbers only": false,
    "B. Checking if a number is even or odd": true,
    "C. Displaying a logo": false,
    "D. Saving a file": false
  }],
  ["Q-->67. Which symbol is used to connect different parts of a flowchart?", {
    "A. Connector": true,
    "B. Terminal": false,
    "C. Decision": false,
    "D. Process": false
  }],
  ["Q-->68. What does a well-designed flowchart help with?", {
    "A. Stopping all errors forever": false,
    "B. Increasing monitor brightness": false,
    "C. Replacing the CPU": false,
    "D. Understanding program logic": true
  }],
  ["Q-->69. Which of these is a correct statement about compiler and interpreter?", {
    "A. Compiler translates all at once; interpreter line by line": true,
    "B. Both only print output": false,
    "C. Both are hardware devices": false,
    "D. Both create flowcharts": false
  }],
  ["Q-->70. Which number is a factor of 12?", {
    "A. 7": false,
    "B. 5": false,
    "C. 4": true,
    "D. 11": false
  }],
  ["Q-->71. What is the result of 0, 1, 1, 2, 3, ___ in Fibonacci?", {
    "A. 2": false,
    "B. 3": false,
    "C. 5": true,
    "D. 8": false
  }],
  ["Q-->72. Which of these is a common output of reverse digits algorithm?", {
    "A. 321": true,
    "B. 123": false,
    "C. 231": false,
    "D. 3120": false
  }],
  ["Q-->73. What does documentation usually contain?", {
    "A. Program details and instructions": true,
    "B. Only errors": false,
    "C. Only hardware parts": false,
    "D. Only pictures": false
  }],
  ["Q-->74. What is the main reason for flowcharts in programming?", {
    "A. To visualize solution logic": true,
    "B. To replace memory": false,
    "C. To increase CPU speed": false,
    "D. To format text": false
  }],
  ["Q-->75. Which of the following is a valid characteristic of an algorithm?", {
    "A. It should have input and output": true,
    "B. It should never end": false,
    "C. It should be confusing": false,
    "D. It should be hardware-based": false
  }],
  ["Q-->76. Which of these is a sequence of steps in order?", {
    "A. Random processing": false,
    "B. Sequential processing": true,
    "C. Parallel error": false,
    "D. Memory process": false
  }],
  ["Q-->77. Which algorithm would likely use a loop?", {
    "A. Printing numbers from 1 to 10": true,
    "B. Displaying one fixed image": false,
    "C. Naming a file": false,
    "D. Opening a folder": false
  }],
  ["Q-->78. Which of these is a correct use of a decision box?", {
    "A. Printing a page": false,
    "B. Storing a file": false,
    "C. Checking whether a number is greater than 10": true,
    "D. Turning on a light": false
  }],
  ["Q-->79. Which of these is a correct use of a process box?", {
    "A. Ending the program": false,
    "B. Asking a question": false,
    "C. Starting the program": false,
    "D. Adding two numbers": true
  }],
  ["Q-->80. What is the result of a good testing process?", {
    "A. New keyboard": false,
    "B. Faster monitor": false,
    "C. Correct and reliable program": true,
    "D. Bigger file size": false
  }],
  ["Q-->81. Which of these is a property of a good algorithm?", {
    "A. Effective": true,
    "B. Hidden": false,
    "C. Unlimited": false,
    "D. Random": false
  }],
  ["Q-->82. Which symbol comes first in most flowcharts?", {
    "A. Process rectangle": false,
    "B. Decision diamond": false,
    "C. Start/End oval": true,
    "D. Connector circle": false
  }],
  ["Q-->83. Which symbol often comes after input in a simple flowchart?", {
    "A. Process": true,
    "B. Terminal": false,
    "C. Output only": false,
    "D. No symbol": false
  }],
  ["Q-->84. Which of the following best describes debugging?", {
    "A. Printing a file": false,
    "B. Drawing a diagram": false,
    "C. Writing machine code": false,
    "D. Locating and fixing program mistakes": true
  }],
  ["Q-->85. What is one advantage of a compiler?", {
    "A. It produces faster executable programs": true,
    "B. It only works line by line": false,
    "C. It does not translate code": false,
    "D. It draws flowcharts": false
  }],
  ["Q-->86. What is one advantage of an interpreter?", {
    "A. It creates an executable file": false,
    "B. Errors are found quickly during execution": true,
    "C. It runs only once": false,
    "D. It works without source code": false
  }],
  ["Q-->87. Which term means 'step-by-step solution'?", {
    "A. Memory": false,
    "B. Monitor": false,
    "C. Compiler": false,
    "D. Algorithm": true,
  }],
  ["Q-->88. Which of these is an example of sequential logic?", {
    "A. Decision only": false,
    "B. Output, decision, input": false,
    "C. Input, process, output": true,
    "D. Loop only": false
  }],
  ["Q-->89. Which of these is a correct output for GCD of 8 and 12?", {
    "A. 3": false,
    "B. 4": true,
    "C. 8": false,
    "D. 12": false
  }],
  ["Q-->90. Which of these numbers is divisible by 2?", {
    "A. 14": true,
    "B. 15": false,
    "C. 17": false,
    "D. 19": false
  }],
  ["Q-->91. What is the next number in the Fibonacci sequence after 5, 8?", {
    "A. 9": false,
    "B. 10": false,
    "C. 11": true,
    "D. 13": false
  }],
  ["Q-->92. Which of these is an algorithmic task?", {
   
    "A. Changing wallpaper": false,
    "B. Finding the sum of numbers in a list": true,
    "C. Repairing speaker": false,
    "D. Charging battery": false
  }],
  ["Q-->93. What does an upper triangular matrix have below the diagonal?", {
    "A. Zeros": true,
    "B. Ones only": false,
    "C. Random numbers": false,
    "D. Text values": false
  }],
  ["Q-->94. Which of these is a common use of flowcharts?", {
    "A. Designing program logic": true,
    "B. Increasing storage size": false,
    "C. Installing drivers": false,
    "D. Formatting a disk": false
  }],
  ["Q-->95. What should an algorithm avoid?", {
    "A. Ambiguity": true,
    "B. Clarity": false,
    "C. Order": false,
    "D. Input": false
  }],
  ["Q-->96. Which of these is a correct statement about flowcharts?", {
    "A. They use standard symbols": true,
    "B. They are only used for hardware": false,
    "C. They are written in binary": false,
    "D. They cannot show decisions": false
  }],
  ["Q-->97. Which of these is a correct statement about pseudocode?", {
    "A. It is not strict syntax like a programming language": true,
    "B. It is a hardware language": false,
    "C. It is only for output": false,
    "D. It is a compiler": false
  }],
  ["Q-->98. What is the purpose of a decision in an algorithm?", {
    "A. To choose between two or more paths": true,
    "B. To store data": false,
    "C. To print documents": false,
    "D. To update hardware": false
  }],
  ["Q-->99. Which of these is a correct example of a loop-based algorithm?", {
    "A. Printing numbers from 1 to 100": true,
    "B. Displaying one welcome message": false,
    "C. Writing one file name": false,
    "D. Turning off a computer": false
  }],
  ["Q-->100. What is the main benefit of planning with an algorithm before coding?", {
    "A. It reduces confusion in solving the problem": true,
    "B. It removes the need for input": false,
    "C. It makes hardware faster": false,
    "D. It deletes errors automatically": false
  }]
];
        let index = 0;
        let total = 0;
        let answered = new Array(q.length).fill(false);
        let selectedAnswers = new Array(q.length).fill(null);
        let que = document.getElementById("question");
        let feedback = document.getElementById("feedback");
        let h2 = document.createElement("h2");
        que.appendChild(h2);

        let buttons = [];
        let s_btn;
        let h_solov=document.getElementById("h_solov");
        for(let i=1;i<=q.length;i++){
            s_btn=document.createElement("button");
             s_btn.id=`sbtn${i}`;
            s_btn.className="sbtn";
            s_btn.textContent=i;
            h_solov.appendChild(s_btn);
        }
let tbtn=document.getElementsByClassName("sbtn")

        for (let i = 0; i < 4; i++) {
            let btn = document.createElement("button");
            btn.className = "b";
            btn.addEventListener("click", () => ans(btn.textContent));
            que.appendChild(btn);
            buttons.push(btn);
        }
    

        function render() {
            let current = q[index];
            h2.textContent = current[0];
            let options = current[1];
            let keys = Object.keys(options);
            for (let i = 0; i < 4; i++) {
                buttons[i].textContent = keys[i];
                buttons[i].disabled = answered[index];
                buttons[i].style.backgroundColor = ""; 
            }
          
        }





        
        function next() {
            index++;
            if (index >= q.length) {
                index = 0;
            }
            render();
        }

        function privious() {
            index--;
            if (index < 0) {
                index = q.length - 1;
            }
            render();
        }

        function ans(selectedAns) {
            if (answered[index]) return;
            let options = q[index][1];
            selectedAnswers[index] = selectedAns;
            answered[index] = true;
            let temp=index+1;
            document.getElementById(`sbtn${temp}`).style.backgroundColor="green"
            if (options[selectedAns]) {
                total++;
            }
            render();
        }

        function submitQuiz() {
            total = 0; // Recalculate total
            for (let i = 0; i < q.length; i++) {
                let options = q[i][1];
                let correctAnswer = Object.keys(options).find(key => options[key]);
                if (selectedAnswers[i] === correctAnswer) {
                    total++;
                }
            }
            if(confirm("Do you want a  submit in this test")){
                 feedback.value = total;
                // feedback.style.color = "blue";
                document.getElementById("form_main").style.display="block";
                document.getElementById("quiz").style.display="none";
                document.getElementById("hh_solov").style.display="none";
                
                document.getElementById("time").style.display="none";
                showCorrectAnswers();
                
            }
        }

        function showCorrectAnswers() {
            let current = q[index];
            let options = current[1];
            let keys = Object.keys(options);
            let correctAnswer = keys.find(key => options[key]);

            for (let i = 0; i < 4; i++) {
                let btn = buttons[i];
                let btnText = btn.textContent;
                btn.disabled = true; // Disable buttons after submission
                
            }
        }

        // Whenever you render, if already submitted, show correct answer
        function render() {
            let current = q[index];
            h2.textContent = current[0];
            let options = current[1];
            let keys = Object.keys(options);
            for (let i = 0; i < 4; i++) {
                let btn = buttons[i];
                btn.textContent = keys[i];
                btn.disabled = answered[index];
                btn.style.backgroundColor = "";
            }
            feedback.textContent = "";

            // If quiz already submitted, show correct answer for this question
            if (feedback.textContent !== "") {
                showCorrectAnswers();
            }
        }
        
//rule start  
let check=document.getElementById("check_box");
let btn_info=document.getElementById("info__btn");
check.addEventListener('change', function(){
    if(this.checked){
        btn_info.style.display="block";
    }
    else{
        btn_info.style.display="none";
    }
});

function quiz_start(){
    document.getElementById("quiz").style.display="block";
    document.getElementById("hh_solov").style.display="block";
    document.getElementById("detail").style.display="none";
}





// rule end 

        function from_submit(){
            var roll_no=document.getElementById("roll").value;
            var Name=document.getElementById("name").value;
            var f_name=document.getElementById("f_name").value;
            var course=document.getElementById("course").value;
            if(roll_no =="" || Name =="" || f_name =="" || course ==""){
                alert("Please fill all info");
                return;
            }
            document.getElementById("quiz").style.display="none";
            let form_main=document.getElementById("form_main");
            let sub_msg=document.getElementById("sub_msg");
            form_main.style.display="none";
            sub_msg.style.display="block";
            //document.getElementById("form").style.display="block";
        }
    

// show pass 
let check_box=document.getElementById("remember");
let pass=document.getElementById("password")
check_box.addEventListener('change', function(){
    if(this.checked){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
});
// end show password

//login user
let user_name="nscitm@123"
let password="052026";
let login_name=document.getElementById("user");
function login_usar(){
    if(pass.value==password && login_name.value==user_name){
        document.getElementById("detail").style.display="block";
        document.getElementById("login").style.display="none";
        //document.getElementById("quiz").style.display="block";
        

    }else{
        alert("invalid username and password");
    }
}

        let t=document.getElementById("time");
        let total_time=39*60;
        let min=39;
        let sec=60;
       


        function show_time(){
            if(sec==0){
                t.innerHTML="Time out -->"+min+": "+sec;
                sec=60;
                min--;
            }
            t.innerHTML="Time out -->"+min+": "+sec;
            sec--;
        }
    setInterval(show_time, 1000);
    let time_up=60000*35;
    setTimeout(function(){
        alert("your exam finished");
        t.style.display="none";
        submitQuiz();
        }, time_up)
            render();
            //information();


// API call for google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxoxAHhPg2GnBUK6hwpRTNuS8UrSdU8qxgpwANtjRXYl8vJSHHGHAUCjkc_TRPSXhMmEA/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks you ! your test submited"))
                .catch(error => console.error('Error!', error.message))
            })
            function submit__msg(){
                

            }
