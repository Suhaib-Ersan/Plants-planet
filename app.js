var user_name = prompt('Whats your name?');
var plant_choice = prompt('Which do you prefer, Roses or Lilies?');
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

if (plant_choice == 'Roses' || plant_choice == 'roses' || plant_choice == 'Rose' || plant_choice == 'rose') {
  var choosen_plant_pic = "<img src='https://ui.assets-asda.com/dm/asdagroceries/T_5054781326533_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=2LlUJ1&fmt=jpg&fit=constrain,1&wid=256&hei=256' alt='rose'/>";

} else if (plant_choice == 'Lilies' || plant_choice == 'lilies' || plant_choice == 'Lilie' || plant_choice == 'lilie' || plant_choice == 'Llily' || plant_choice == 'lily') {
  choosen_plant_pic = "<img src='https://i.pinimg.com/originals/3a/1f/2e/3a1f2e436f2d25a3f9141143acd6b1ab.jpg'/>";
}
var name_space2 = document.getElementById('name_space')
name_space2.innerHTML = user_name;
var greeting_space2 = document.getElementById('greeting_space')
greeting_space2.innerHTML = greeting;


document.write(choosen_plant_pic);


