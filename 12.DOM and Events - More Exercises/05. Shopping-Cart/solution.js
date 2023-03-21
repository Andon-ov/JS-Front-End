function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

   let output = document.getElementsByTagName('textarea')[0];
   output.value = ''
   let cart = [];

   function onClick(event) {

       // if (event.target.tagName === 'BUTTON' && event.target.className === 'add-product') {
       if (event.target.tagName === 'BUTTON' && event.target.classList.contains('add-product')) {

           let productElement = event.target.parentElement.parentElement;
           let name = productElement.querySelectorAll('.product-title')[0].textContent;
           let price = Number(productElement.querySelectorAll('.product-line-price')[0].textContent).toFixed(2);

           output.value += `Added ${name} for ${price} to the cart.\n`;

           cart.push({
               name,
               price,
           });

       }

   }

   function checkout() {
       let products = new Set();
       cart.forEach(p => products.add(p.name));

       let total = cart.reduce((t, c) => t + Number(c.price), 0)
       console.log(total)
       console.log(products)

       output.value += `You bought ${[...products.values()].join(', ')} for ${total.toFixed(2)}.\n`
   }

}   