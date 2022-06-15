function bin(){
    var str=document.getElementById("contents").value;
    var textToBinary = (str = '') => {
       var res = '';
       res = str.split('').map(char => {
          return char.charCodeAt(0).toString(2);
       }).join(' ');
       return res;
    };
    
    document.getElementById("decrypt").innerHTML=textToBinary(str);
    }

function myFunction(){

      // Input field
      var input = document.getElementById('num');
      // Length of the array storing the numbers
      var myArraySize = Math.floor(input.value.length / 2) + (input.value.length % 2);
      // The array storing the numbers
      var myArray = [];
      
      for (var i = 0; i < myArraySize; i++) {
       myArray[i] = input.value.slice(2*i,2*i+2);
        if(myArray[i] == 00){
          myArray[i]='A';
        } else if(myArray[i] == 01){
          myArray[i]='C';
        }else if(myArray[i]== 11){
          myArray[i]='G';
        }else if(myArray[i] == 10){
          myArray[i]='T';
        }else{
          alert("invalid input!!");
        }
      }

      // Output the array
      document.getElementById('demo').innerHTML = myArray;
    } 

