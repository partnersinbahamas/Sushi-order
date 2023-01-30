console.log('Counter');

const minusBtns = document.querySelectorAll('[data-action="minus"]');
const plusBtn = document.querySelectorAll('[data-action="plus"]');

const counters = document.querySelectorAll('[data-counter]');

const ornerBtn = document.querySelectorAll('.btn-outline-warning');

window.addEventListener('click', (event) => {
    if (event.target.dataset.action ==='plus') {

        const parent = event.target.closest('.counter-wrapper');

        let counter = parent.querySelector('[data-counter]');

        if (+counter.innerHTML >= 0) {
            counter.innerHTML++;
        }
    }

    if (event.target.dataset.action === 'minus') {
        const parent = event.target.closest('.counter-wrapper');

        let counter = parent.querySelector('[data-counter]');

        if (+counter.innerHTML > 1) {
            counter.innerHTML--;

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerHTML) === 1) {
            console.log(123);
            event.target.closest('.cart-item').remove();

            toggleCardStatus();
            calculateTotal();
        }

    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calculateTotal();
    }
});

