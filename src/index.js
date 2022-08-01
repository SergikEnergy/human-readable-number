module.exports = function toReadable(number) {
    let numbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let numberTeen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let numberTy = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let numberHundred = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let NumberArr = String(number).split("");
    let L = NumberArr.length;
    let resultArray = [];
    if (number > 0 && Number.isInteger(number) && typeof number === "number") {
        for (let elem in numbers) {
            if (NumberArr[L - 1] === elem) {
                resultArray.unshift(numbers[elem]);
            }
        }
        for (let elem in numberTeen) {
            if (NumberArr[L - 2] + NumberArr[L - 1] === elem) {
                resultArray.pop();
                resultArray.unshift(numberTeen[elem]);
            }
        }

        for (let elem in numberTy) {
            if (NumberArr[L - 2] === elem) {
                resultArray.unshift(numberTy[elem]);
            }
        }
        for (let elem in numberHundred) {
            if (NumberArr[L - 3] === elem) {
                resultArray.unshift(`${numberHundred[elem]} hundred`);
            }
        }

        return resultArray.join(" ");
    } else if (number === 0) return "zero";
    else {
        return false;
    }
};
