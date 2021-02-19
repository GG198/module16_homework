function getPercents(number, percent) {
    if (typeof number === 'number' && typeof percent === 'number' && number >= 0 && percent >= 0){
       return number / 100 * percent ;
    } else {
        return "number & percent  должны быть положительными числами и > 0!";
    }
}
module.exports = getPercents;