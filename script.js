$(document).ready(function() {
  Object.keys(salads).forEach((k, i) => {
    var line = document.createElement("li");
    var text = document.createTextNode(salads[k].name.toString());

    var a = document.createElement('a');
    var linkText = document.createTextNode(salads[k].hyperlink.toString());
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = salads[k].hyperlink.toString();

    line.appendChild(text);
    
    var element = document.getElementById("salad_list");
    element.appendChild(line);
    element.appendChild(a);
  })
});

function check() {
  $("#filtered_salad_list").empty();
  $('#result').text('Salads that contain these ingredients:')

  var searchArray = []
  searchArray.push($('#first_ingredient').val());
  searchArray.push($('#second_ingredient').val());
  searchArray.push($('#third_ingredient').val());
  var searchArrayLength = searchArray.length
  console.log(searchArrayLength);
  console.log(searchArray);

  //find salad name & ingredients
  Object.keys(salads).forEach((k, i) => {

    var arrayLength = salads[k].ingredients.length
    var arrayOfSalads = []
    for (var j = 0; j < searchArrayLength; j++){
      for (var i = 0; i < arrayLength; i++) {
        if(salads[k].ingredients[i] === searchArray[j]){
          arrayOfSalads.push(salads[k].name);
        }
      }
    }
    filterSalads(arrayOfSalads)
  })
  return
}

 function filterSalads(arrayOfSalads) {
  var uniqueSalads = []
  $.each(arrayOfSalads, function(i, el){
    if($.inArray(el, uniqueSalads) === -1) uniqueSalads.push(el);
  });

  for (var x = 0; x < uniqueSalads.length; x++){
    var line = document.createElement("li");
    var text = document.createTextNode(uniqueSalads[x].toString());
    line.appendChild(text);
    var element = document.getElementById("filtered_salad_list");
    element.appendChild(line);
    $("input[type=text], textarea").val("");
  }
 }
   