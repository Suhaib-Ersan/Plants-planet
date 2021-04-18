
// function ask_prompt(prompt_question, answer1, answer2) {
//   i = '';
//   if /* this is if the question has 2 answers */ ((prompt_question !== undefined) && (answer1 !== undefined) && (answer2 !== undefined)) {

//     while ((i !== answer1) && (i !== answer2) && (i !== null)) {
//       i = prompt(prompt_question)
//     };

//   } else if /* this is if the question only has 1 answer */  ((prompt_question !== undefined) && (answer1 !== undefined)) {

//     while ((i !== answer1) && (i !== null)) {
//       i = prompt(prompt_question)
//     };
//   } else /* this is only if you want the prompt */ {
//     i = prompt(prompt_question)
//   };
//   return i;
// };


// var name_space = document.getElementById('name_space');
// name_space.innerHTML = ask_prompt('Whats your name?');

// var entered_password = '';
// entered_password = ask_prompt("please enter 'secret' in the field below.", 'secret');

// {
//   var plant_choice = '';
//   plant_choice = ask_prompt("Which would you prefer, a 'green' or a 'red' plant?", 'green', 'red');


//   plant_choice_number = 'x';
//   while (isNaN(plant_choice_number)) {
//     plant_choice_number = ask_prompt('how many plants do you want?')
//   };
//   if (plant_choice == 'green') {
//     choosen_plant_pic = "<img src='https://cdn.fleur.hk/media/cache/98/63/9863dcfe233f397f8f3645024e122f09.jpg'/>";
//   } else if (plant_choice == 'red') {
//     var choosen_plant_pic = "<img src='https://ui.assets-asda.com/dm/asdagroceries/T_5054781326533_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=2LlUJ1&fmt=jpg&fit=constrain,1&wid=256&hei=256' alt='rose'/>";
//   };
//   x = 0;
//   for (var i = 1; i <= plant_choice_number; i++) {
//     document.write(choosen_plant_pic);
//     x++;
//     document.write(x)
//   }
// };

// {
//   var greeting;
//   var today = new Date();
//   var hourNow = today.getHours();

//   if (hourNow > 18) {
//     greeting = 'Good evening';
//   } else if (hourNow > 12) {
//     greeting = 'Good afternoon';
//   } else if (hourNow > 0) {
//     greeting = 'Good morning';
//   } else {
//     greeting = 'Welcome';
//   }

//   var greeting_space2 = document.getElementById('greeting_space')
//   greeting_space2.innerHTML = greeting;
// };