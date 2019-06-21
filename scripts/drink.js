whatCanIDrink = function(age) {
    return age < 0 ? "Error" 
    : age < 14 ? "Drink Toddy" 
    : age < 18 && age>=14 ? "Drink Coke" 
    : age < 21 && age>=18 ? "Drink Beer" 
    : age < 130 ? "Drink Whisky" 
    : "Error2";
};
//     if(age<0){
//         return "Error";
//     } 
//     else if (age<14){
//         return "Drink Toddy";
//     }
//     else if (age<18 && age>=14){
//         return "Drink Coke";
//     }
//     else if (age<21 && age>=18){
//         return "Drink Beer";
//     }
//     else if (age<130){
//         return "Drink Whisky";
//     }
//     else {
//         return "Error2";
//     }
// };
