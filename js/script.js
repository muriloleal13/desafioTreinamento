let products = [
    {
        name: "Maçã",
        quantity: 25
    },
    {
        name: "Banana",
        quantity: 12
    },
    {
        name: "Cenoura",
        quantity: 13
    }
];

let table = $("#table-produtos");
let addedProduct = (alert, type) => {
    document.getElementById('span_message').innerHTML = 
        `<div class="alert alert-${alert}" role="alert" id="div1" style="display:none;">
            ${type} to insert product!
        </div>`;
    $('#div1').fadeIn(2000);
    $('#div1').fadeOut(3000);
}

const attTable = () => {
    let newRow = $("<tr>");
    let cols = "<th>Product</td><th>Quantity</td>";  
    newRow.append(cols);
    table.append(newRow);    
    products.map((elem) => {
        let newRow = $("<tr>");
        let cols = `<td> ${elem.name} </td>
                    <td> ${elem.quantity} </td>`;
        newRow.append(cols);
        table.append(newRow);
    });
}

const clearTable = () => {
    $("#table-produtos tr").remove();
    $('#product').val('');
    $('#quantity').val('');
}

const addItem = () => {
    let newProduct = $('#product').val();
    let newQuantity = parseInt($('#quantity').val());
    let arrExists = products.filter(elem => elem.name == newProduct);
    if(typeof(newProduct) !== 'string' || newProduct == ''){
        addedProduct('danger', 'Error');
    }else if(arrExists.length == 0){
        products = [
            ...products,
            { 
                name: product.value,
                quantity: quantity.value
            }
        ];
        addedProduct('success', 'Success');
    }else{
        products.map(elem => {
            if(elem.name == newProduct)
                return elem.quantity = parseInt(elem.quantity) + parseInt(newQuantity);
        });
        addedProduct('warning', 'Warning');
    }
    clearTable();
    attTable();
}

attTable();