function romanToNumber(){

    const regExpr = /^[IVXLCDM]+$/;
    const RomanNumberTextbox = document.getElementById('romanNumberToConvert');
    const romanNumber = RomanNumberTextbox.value.toLocaleUpperCase();
    const restults = document.getElementById('results');

    if(regExpr.test(romanNumber)){
        let romanArray =  romanNumber.split('');
        let intNumber = 0;
        for (let i = 0; i < romanArray.length; i++) {
            let char = romanArray[i];
            let nextChar = ' ';
            if ((i+1)<romanArray.length){
                nextChar = romanArray[i+1];
            }
            switch (char){
                case 'I':
                    if (nextChar == 'V'){
                        intNumber = intNumber + 4;
                        i++;
                    }
                    else{
                        if (nextChar == 'X'){
                            intNumber = intNumber + 9;
                            i++;
                        }
                        else {
                            intNumber = intNumber + 1;
                        }
                    }              
                    break;
                case 'V':
                    intNumber = intNumber + 5;
                    break;
                case 'X':
                    if (nextChar == 'L'){
                        intNumber = intNumber + 40;
                        i++;
                    }
                    else{
                        if (nextChar == 'C'){
                            intNumber = intNumber + 90;
                            i++;
                        }
                        else {
                            intNumber = intNumber + 10;
                        }
                    }  
                    break;
                case 'L':
                    intNumber = intNumber + 50;
                    break;
                case 'C':
                    if (nextChar == 'D'){
                        intNumber = intNumber + 400;
                        i++;
                    }
                    else{
                        if (nextChar == 'M'){
                            intNumber = intNumber + 900;
                            i++;
                        }
                        else {
                            intNumber = intNumber + 100;
                        }
                    }  
                    break;
                case 'D':
                    intNumber = intNumber + 500;
                    break;
                case 'M':
                    intNumber = intNumber +1000;
                    break;
                default:
                    restults.value = "Invalid roman numeral!";
                    intNumber = 0;
            }
          }
        restults.value = intNumber;
    } else {
        restults.value = "Invalid roman numeral!";
    }
    
    
}