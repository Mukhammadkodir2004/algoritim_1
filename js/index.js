
  function sumArray (arr){
    var total =0;
    for ( var i=0; i < arr.length; i++){
        total+=arr[i];
    }
    return total;

  }
  var elText = document.querySelector(`.text`);
  var arr= [2,3,4,5,6,14,56,12,45];
  var total =sumArray(arr);
  elText.textContent=`total:`+ total;

 