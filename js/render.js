const container = document.querySelector('#products-container');

async function getProducts() {
    const responcse = await fetch('./js/products.json');

    const productsArray = await responcse.json();

    console.log(productsArray);

    for (const product of productsArray) {

        console.log(product);
        container.insertAdjacentHTML('beforeend', `
        <div class="col-md-6">
			<div class="card mb-4" data-id="01">
				<img class="product-img" src="img/roll/${product.imgSrc}" alt="">
					<div class="card-body text-center">
						<h4 class="item-title">${product.title}</h4>
						<p><small data-items-in-box class="text-muted">${product.itemInBox} шт.</small></p>

						<div class="details-wrapper">
							<div class="items counter-wrapper">
								<div class="items__control" data-action="minus">-</div>

								<div class="items__current" data-counter>1</div>

								<div class="items__control" data-action="plus">+</div>
							</div>

							<div class="price">
								<div class="price__weight">${product.weight}г.</div>
								  <div class="price__currency">${product.price} UAH</div>
							   </div>
							</div>

							<button data-cart type="button" class="btn btn-block btn-outline-warning btn-orderrrr">+ в корзину</button>
							</div>
						</div>
					</div>
        `)
    }
}

getProducts();