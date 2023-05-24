$(document).ready(function() {
    
    $('.btn-dark').click(function() {
      var price = parseFloat($(this).data('price'));
      
      var itemName = $(this).closest('.card').find('.card-title').text();
      var cartItem = $('<li class="list-group-item"></li>').text(itemName + ' - Precio: ' + price + ' euros');
      $('#cartItems').append(cartItem);
      
      var totalPrice = parseFloat($('#totalPrice').text());
      totalPrice += price;
      $('#totalPrice').text(totalPrice);
    });
  });
  