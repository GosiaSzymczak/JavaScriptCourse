var birthday = new Date(1994, 4, 15, 8, 40, 57);
var birthday2 = new Date(1994, 4, 15, 8, 40, 57);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if(birthday.getTime == birthday2){

    console.log("birthdays are equal")
}else    
    console.log("birthdays are not equal")