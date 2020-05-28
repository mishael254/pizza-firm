
function WholePizzas(pizzaType,pizzaCrust,pizzaToppings) {
    this.firstOption = pizzaType
    this.secondOption = pizzaCrust
    this.thirdOption = pizzaToppings
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
  });
});
