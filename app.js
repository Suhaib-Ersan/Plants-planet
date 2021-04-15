var user_name = prompt('Whats your name?');
var greeting;
var today = new Date();
var hourNow = today.getHours();

if (hourNow > 18) {
  greeting = 'Good evening';
} else if (hourNow > 12) {
  greeting = 'Good afternoon';
} else if (hourNow > 0) {
  greeting = ' Good morning';
} else {
  greeting = 'Welcome';
}

entered_password = '';
while (entered_password != 'secret') {
  entered_password = prompt("please enter 'secret' in the field below ")
}

var plant_choice = '';
while (
  plant_choice !== ('green') && plant_choice !== ('red')
) {
  var plant_choice = prompt("Which would you prefer, a 'green' or a 'red' plant?");
}

var plant_choice_number = prompt('how many plants do you want?')
if (plant_choice == 'green') {
  choosen_plant_pic = "<img src='https://cdn.fleur.hk/media/cache/98/63/9863dcfe233f397f8f3645024e122f09.jpg'/>";
} else if (plant_choice == 'red') {
  var choosen_plant_pic = "<img src='https://ui.assets-asda.com/dm/asdagroceries/T_5054781326533_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=2LlUJ1&fmt=jpg&fit=constrain,1&wid=256&hei=256' alt='rose'/>";
}
x = 0;
for (var i = 1; i <= plant_choice_number; i++) {
  document.write(choosen_plant_pic);
  x++;
  document.write(x)
}

var name_space2 = document.getElementById('name_space')
name_space2.innerHTML = user_name;
var greeting_space2 = document.getElementById('greeting_space')
greeting_space2.innerHTML = greeting;
