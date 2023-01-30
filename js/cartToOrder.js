window.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imageSrc: card.querySelector('.product-img').src,
            itemInBox: card.querySelector('[data-items-in-box').innerHTML,
            name: card.querySelector('.item-title').innerHTML,
            weight: card.querySelector('.price__weight').innerHTML,
            price: card.querySelector('.price__currency').innerHTML,
            counter: card.querySelector('[data-counter').innerHTML,
        };

        const order = document.querySelector('.cart-wrapper');

        const cardInOrder = order.querySelector(`[data-id="${productInfo.id}"]`);

        if (cardInOrder) {
            const currentCounter = cardInOrder.querySelector('[data-counter]');

            currentCounter.innerHTML = +currentCounter.innerHTML + +productInfo.counter;
        } else {

        order.insertAdjacentHTML('beforeend', `
        <div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imageSrc}" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.name}</div>
                <div class="cart-item__weight">${productInfo.itemInBox}. / ${productInfo.weight}.</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
    </div>
        `)
    }
    // // const orderMessage = document.querySelector('[data-cart-empty]');
    // const orderMessage = document.querySelector('.alert-secondary');


    // if (order.children.length > 0) {
    //     // const orderMessage = document.querySelector('.alert-secondary');
    //     orderMessage.classList.add('hidden');
    // }
    let cardCounter = card.querySelector('[data-counter]');
    cardCounter.innerHTML = '1';

    toggleCardStatus();
    calculateTotal();
  }
})