$(document).ready(function() {
  Object.keys(salads).forEach((k, i) => {
    console.log(salads[k].name);
    var line = document.createElement("li");
    var text = document.createTextNode(salads[k].name.toString());
    var link = document.createTextNode(salads[k].hyperlink.toString());
    line.appendChild(text);
    var element = document.getElementById("salad_list");
    element.appendChild(line);
    element.appendChild(link);
  })
});


function check() {
  //find salad name & ingredients
  Object.keys(salads).forEach((k, i) => {
    // console.log(salads[k].name, salads[k].ingredients)
    var arrayLength = salads[k].ingredients.length
    var arrayOfSalads = []
    //iterate through ingredients to see if it matches input
    for (var i = 0; i < arrayLength; i++) {
      if(salads[k].ingredients[i] === $('#first_ingredient').val()){
        arrayOfSalads.push(salads[k].name);
      }
    }
    //print array of salads
    for (var x = 0; x < arrayOfSalads.length; x++){
      var line = document.createElement("li");
      var text = document.createTextNode(arrayOfSalads[x].toString());
      line.appendChild(text);
      var element = document.getElementById("filtered_salad_list");
      element.appendChild(line);
    }
  })
  return
}

 

 



    