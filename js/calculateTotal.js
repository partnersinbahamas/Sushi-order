// function calculateTotal() {
//     const order = document.querySelector('.cart-wrapper');

//     const prices = order.querySelectorAll('.price__currency');
//     const counters = order.querySelectorAll('[data-counter]');
//     let sumEl = document.querySelector('.total-price');

//     prices.forEach((price) => {
//         // console.log([price.innerHTML]);

//         counters.forEach((counter) => {
//             const priceArr = price.innerHTML.split(' ');
//             const priceNum = priceArr[0];

//             // console.log('111', +priceNum);

//             // console.log(+totalSum.innerHTML)

//             let totalSum = sumEl.innerHTML;
//             totalSum = parseInt(priceNum) * parseInt(counter.innerHTML);

//             console.log(totalSum);

//             sumEl.innerHTML = totalSum;

//         })
//     });


// }


function calculateTotal() {
    // const order = document.querySelector('.cart-wrapper');
    const itemsInOrder = document.querySelectorAll('.cart-item');
    const totalSumEl = document.querySelector('.total-price');

    // let totalSum = +totalSumEl.innerText;

    let totalPrice = 0;

    itemsInOrder.forEach((item) => {
        const counet = item.querySelector('[data-counter]');
        const priceEL = item.querySelector('.price__currency');
        const currentPrice = parseInt(counet.innerText) * parseInt(priceEL.innerText);

        totalPrice += currentPrice;
    });

    totalSumEl.innerText = totalPrice;

    const deliveryEL = document.querySelector('.delivery-cost');

    if (totalPrice < 600) {
        deliveryEL.innerHTML = '150 UAH'

    } else {
        deliveryEL.innerHTML = 'Бесплатно'
    }

}

