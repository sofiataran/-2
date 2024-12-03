function sort() {
    let price = document.getElementById("price");
    let title = document.getElementById("title");
    document.getElementById('node_for_insert').innerHTML = '';

    if (price.checked) {
        getResponcePrice();
    } else if (title.checked) {
        getResponceTitle();
    }
}

async function getResponcePrice() {
    let response = await fetch("shop.json");
    let content = await response.json();
    content = content.splice(0, 6);

    content = content.sort((a, b) => a.price - b.price);

    renderProducts(content);
}

async function getResponceTitle() {
    let response = await fetch("shop.json");
    let content = await response.json();
    content = content.splice(0, 6);

    content = content.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        return nameA.localeCompare(nameB);
    });

    renderProducts(content);
}

function renderProducts(products) {
    let node_for_insert = document.getElementById("node_for_insert");

    for (let product of products) {
        node_for_insert.innerHTML += `
            <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${product.img}>
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}. Цена ${product.price} р.</p>
                <input type="hidden" name="vendor_code" value=${product.vendor_code}>
                <p class="card-text">!!Заказать!! <input class="w-25" type="text" value="0" name="check"></p>
            </li>`;
    }
}

sort();
