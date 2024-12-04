function sort() {
    let price = document.getElementById("price");
    let title = document.getElementById("title");

    document.getElementById('node_for_insert').innerHTML = '';

    if (price.checked) {
        getResponce();
    }

    if (title.checked) {
        getResponce1();
    }
}



async function getResponce() {
    let responce = await fetch("shop.json");
    let content = await responce.text();
    content = JSON.parse(content);
    content = content.splice(0, 6);

    let content_price = content.sort((a, b) => a.price - b.price);

    let node_for_insert = document.getElementById("node_for_insert");

    for (let key in content_price) {
        node_for_insert.innerHTML += `
            <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content_price[key].img}>
                <h5 class="card-title">${content_price[key].title}</h5>
                <p class="card-text">${content_price[key].description}. Цена ${content_price[key].price} р.</p>
                <input type="hidden" name="vendor_code" value=${content_price[key].vendor_code}>
                <p class="card-text">!!Заказать!! <input class="w-25" type="number" value="0" name="check" min="0"></p>
            </li>`;
    }
}



async function getResponce1() {
    let responce = await fetch("shop.json");
    let content = await responce.text();
    content = JSON.parse(content);
    content = content.splice(0, 6);

    let content_title = content.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        return nameA.localeCompare(nameB);
    });

    let node_for_insert = document.getElementById("node_for_insert");

    for (let key in content_title) {
        node_for_insert.innerHTML += `
            <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                <img style="width: 180px" class="align-self-center" src=${content_title[key].img}>
                <h5 class="card-title">${content_title[key].title}</h5>
                <p class="card-text">${content_title[key].description}. Цена ${content_title[key].price} р.</p>
                <input type="hidden" name="vendor_code" value=${content_title[key].vendor_code}>
                <p class="card-text">!!Заказать!! <input class="w-25" type="number" value="0" name="check" min="0"></p>
            </li>`;
    }
}

sort();
