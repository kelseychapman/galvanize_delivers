 //  $(document).ready(function(){
 //   $('.carousel').carousel();
 // });


   $(document).ready(function() {

     $('.button-collapse').sideNav();
     $('.parallax').parallax();

     $('#menu').find('.card').on('click', function() {
       let price = $(this).find('.price').text()
       let title = $(this).find('.card-title').text()

       addToCart(price, title);
     });

     $('.slider').slider({full_width: true,pause:true});
    //  $('.slider').slider('pause');

    $('.parallax').parallax();

  Materialize.updateTextFields();

     // find price & title
     var addToCart = function(price, title) {
       $('#cart').append(`<tr><td>${title}</td>
       <td>${price}</td></tr>`)
       console.log(`Price: ${price} Title:${title}`);
       updateTotal(price);
     }
     var updateTotal = function(price) {
       let price_value = getValue(price)
       let current_subtotal = getValue($('#subtotal').text())
       let current_tax = getValue($('#tax').text())
       let current_total = getValue($('#total').text())
       current_subtotal += price_value
       current_tax = current_subtotal * 0.085
       current_total = current_subtotal + current_tax

       console.log(`current total= ${current_total}`);

       $('#subtotal').text('$' + current_subtotal.toFixed(2))
       $('#tax').text('$' + current_tax.toFixed(2))
       $('#total').text('$' + current_total.toFixed(2))
     }
     var getValue = function(value) {
       return parseFloat(value.replace(/\$/, ""))
     }


   });






//
// //below this is for the menu add button
// var names = ['Charizard', 'Bulbasaur', 'Onyx', 'Mewtwo', 'Chansey'];
// var $section = $('section');
//
// $('#add-pokemon').on('click', function() {
//   var name = names[Math.floor(Math.random() * names.length)];
//   var $div = $(`<div class="pokemon">${name}</div>`);
//   $section.append($div);
// });
//
// $('section').on('click', '.pokemon', function(event) {
// 	console.log($(event.target))
//   var $target = $(event.target);
//   $target.remove();
//   console.log(`Buh-bye, ${$target.text()}!`);
// });
