// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const mass = [3,5,8];
mass[1] = 10
 console.log(mass);
 
// я не зрозумів 2 елемент з 0 чи з 1 тому написав 2 способи
 const massi = [3,6,9,7];
massi[2] = 10
 console.log(massi);







//  2 Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const stryng = ["ivanD", "Taras","Nazar"]
stryng[3] = "Vadim"
console.log(stryng);

//3 Створити скрипт який поверне суму всіх чисел в масиві.









// 1 cпособ 

const summ = [33,44,76,3,10]
let sub = 0 

for (let i = 0; i < summ.length; i+=1) {
    sub+= summ[i];
    
}

console.log(sub);

// 2 способ

// for (const atachment of summ) {
//     sub += atachment
//     console.log(sub);
    
// }



// 4Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const element = [4,12,81,16,0]
for (let i = 0; i < element.length; i+= 1) {
console.log(element[i]);

    
}


// 5 Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
// const elementStr = ["ivancik", "nazarcik", "vadimcik", "miro", "taras"]



// 1 способ 

// for (let i = 0; i < elementStr.length; i+=1) {
// if (elementStr[i].length > 5) {

//     console.log(elementStr[i]);
// }

// }


// 2 способ
const elementStr = ["ivancik", "nazarcik", "vadimcik", "miro", "taras"]
for (let i = 0; i < elementStr.length; i++) {
if (elementStr[i].length <=5) {
    continue
}
console.log(elementStr[i]);
}





// 6 Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const chisla =[2,5,88,76,44,0,33,21,11,18]

let max = chisla[0]

for (let i = 0; i < chisla.length; i++) {
 if (chisla[i]>max) {
    max=chisla[i]
 }

    
}
console.log(max);





// 7 Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const massivN =[2,5,58,6,44,0,23,21,17,28]
for (let i = 0; i < massivN.length; i++) {
 if (massivN[i]  % 2 === 0 ){
    
console.log(massivN[i]);

 }

}