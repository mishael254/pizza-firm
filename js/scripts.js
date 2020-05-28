
function WholePizzas(pizzaType,pizzaCrust,pizzaToppings) {
    this.firstOption = pizzaType
    this.secondOption = pizzaCrust
    this.thirdOption = pizzaToppings
  }


  var output = function(firstOption,secondOption,thirdOption) {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var info = ["check cart-list"]
    var warning = ["order has been added to cart!"]
    if (firstOption,secondOption,thirdOption) {
      return info
    } else {
      return warning
    }
  }



  var output = function(name, email,location) {
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var info = ["order has been sent successfuly it will be delivered soon enough thankyou for choosing pizza firm"]
  var warning = ["option added to cart"]
  if (name,email ,location) {
    return info
  } else {
    return warning
  }
}



  // user interface logic
$(document).ready(function() {
  $("form#new-option").submit(function(event) {
    event.preventDefault();

    var inputtedfirstOption = $("input:radio[name=sizes]:checked").val();
var inputtedsecondOption = $("input:radio[name=crust]:checked").val();
var inputtedthirdOption = $("input:radio[name=toppings]:checked").val();


     var newWholePizzas = new WholePizzas(inputtedfirstOption, inputtedsecondOption, inputtedthirdOption);
    var newWholePizzas = new WholePizzas(inputtedfirstOption, inputtedsecondOption, inputtedthirdOption);

    $("ul#cart-list").append("<li><span class='option'>" + newWholePizzas.firstOption + newWholePizzas.secondOption + newWholePizzas.thirdOption +  "</span> pizza</li>");


    $("input:radio[name=sizes]:checked").val("");
    $("input:radio[name=crust]:checked").val("");
    $("input:radio[name=toppings]:checked").val("");


        var firstOption = $("input#new-first-option").val();
        var secondOption = $("input#new-second-option").val();
        var thirdOption = $("input#new-third-option").val();
        var result = output(firstOption,secondOption,thirdOption)
        alert(result)


  });
  $("#blanks form").submit(function(event) {
      var name = $("input#name").val();
      var email = $("input#email").val();
      var location = $("input#location").val();
      var result = output(name, email ,location)
      alert(name + result)
      event.preventDefault();
   });

});
