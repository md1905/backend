const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const hundreds = "hundred";

function numberToWords(num) {
    if (num === 0) return "zero";
    if (num > 999 || num < 0) return null; // Out of range

    let words = "";
    if (Math.floor(num / 100) > 0) {
        words += units[Math.floor(num / 100)] + " " + hundreds;
        num %= 100;
        if (num > 0) words += " ";
    }
    if (num >= 11 && num <= 19) {
        words += teens[num - 10];
    } else {
        if (Math.floor(num / 10) > 0) {
            words += tens[Math.floor(num / 10)];
            num %= 10;
            if (num > 0) words += " ";
        }
        if (num > 0) {
            words += units[num];
        }
    }
    return words.trim();
}

module.exports = numberToWords;
