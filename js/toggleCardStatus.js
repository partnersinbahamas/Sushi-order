function toggleCardStatus() {
    const order = document.querySelector('.cart-wrapper');
    const orderMessage = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');


    if (order.children.length > 0) {
        orderMessage.classList.add('hidden');
        orderForm.classList.remove('hidden');
    } else {
        orderMessage.classList.remove('hidden');
        orderForm.classList.add('hidden');
    }
}