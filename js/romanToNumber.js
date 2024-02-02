function romanToNumber(){
    const RomanNumberTextbox = document.getElementById('romanNumberToConvert');
    const romanNumber = RomanNumberTextbox.value;
    const restults = document.getElementById('results');
    restults.value = romanNumber;
}