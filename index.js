let number1 = '3123213221213232332333334444445555556666667777';
let number2 = '33332132233566767456789012345678901234567890';

let sum = (number1, number2) => {
    let arrayObj = {
        array1: number1.split(''),
        array2: number2.split('')
    };
    let lenArray = [arrayObj.array1.length, arrayObj.array2.length];
    let maxLen = Math.max.apply(null, lenArray);
    let sumNumbers = [];
    let buff = 0;

    for (let i = 1; i <= maxLen; i++) {
        let elem1 = arrayObj.array1[lenArray[0] - i] ? Number(arrayObj.array1[lenArray[0] - i]) : 0;
        let elem2 = arrayObj.array2[lenArray[1] - i] ? Number(arrayObj.array2[lenArray[1] - i]) : 0;
        let ostatok = (elem1 + elem2 + buff) % 10;

        buff = Math.floor((elem1 + elem2 + buff) / 10);
        sumNumbers.push(ostatok);
    }
    return sumNumbers.reverse().join('');
}

// console.log(sum(number1, number2));