// function kali (a,b){
//     return a*b;
// }
// var hasil=kali(3,5);
// console.log(hasil);

// const tambah = (x,y)=> x + y;
// console.log(tambah(3,6));

// function string (a,b){
//     return a + ' ' +b;
// }
// let jadi = string ('halo', 'aqila');
// console.log (jadi);

// function greet (name){
// console.log ('halo, '+name+'!');
// };
// greet ('aqila');

// let person={
//     fullName:function(){
//         return this.firstName + ' ' +this.lastName;
//     }
// }

// let person1={
//     firstName:"aqila",
//     lastName:"zhafira"
// }
// let fullName = person.fullName.call(person1);
// console.log(fullName);

// let person = {
//     fullName: function(kota, negara) {
//         return this.firstName + " " + this.lastName + " sedang di " + kota + ", " + negara + ". ";
//     }
// }

// let person1 = {
//     firstName:"aqila",
//     lastName:"zhafira"
// }

// let fullName = person.fullName.apply(person1, ["Semarang", "Indonesia"]);
// console.log(fullName);

let person ={
    name: 'aqila',
    city: 'Semarang',
    greet: function() {
        return 'halo ' + this.name + ', ' + 'selamat datang di ' + this.city + '!';
    }
};
let greetaqila = person.greet.bind(person);
console.log (greetaqila());