//defining variables:
let age: number = 20;
let usrName: string = "Petar";
let haveDringLicense: boolean = false;
let varAny; //if the value is not assigned when declaration happens the type of the variable is ANY

varAny = 45;
varAny = "sdfsdsdfgsd"

//defining enum
enum WeekDay{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

//defining a function i.e. method
function selectDayOfTheWeek(day: WeekDay): void{
    console.log('Selected day is: ', day);
}

//calling a function i.e. method
selectDayOfTheWeek(WeekDay.Monday);
selectDayOfTheWeek(0);

//defining na interface
interface ProductItem{
    itemName: string,
    itemDescription: string,
    itemPrice: number,
    imageUrl: string,
    isAvailable: boolean
}

//using the newly defined interface i.e. custom(user) type
const itemBackPack: ProductItem = {
    itemName: "Backpack",
    itemDescription: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    itemPrice: 29.99,
    imageUrl: "lah blah",
    isAvailable: true
}
