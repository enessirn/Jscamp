console.log("Merhaba Dünya")

// JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"

{
    let dolarDun = 9.10
}
console.log(dolarDun)
// const ile bir değişken atandığında başka bir değer atanamaz.!!!

const euroDun = 11.8

console.log(euroDun)
//array 
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi","Kamu Kredi","Özel Konut Kredisi"] 

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){

    console.log("<li>"+konutKredileri[i]+"</li>")
}


console.log("</ul>")

console.log (konutKredileri)