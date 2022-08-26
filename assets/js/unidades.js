let inputNumber = document.getElementById('inputNumber');
let total = 0;


function totalCarrito() {
    document.getElementById('total-productos').innerHTML = document.getElementsByName("miCheckbox").length;
    if (document.getElementsByName("miCheckbox").length == 0) {
        agregarSuma(0);
    }
}


function agregarSuma(subtotal) {
    let suma = "$ " + new Intl.NumberFormat('de-DE').format(subtotal);
    document.getElementById("total-precio").innerHTML = suma;
    console.log(document.getElementById("total-precio").innerHTML);
}


function cantidades() {
    document.querySelectorAll('#inputNumber').forEach(item => {
        inputCant = item.value;
        inputNumber.innerHTML = inputCant; 
        if (inputCant != "") {
            if ($(item).closest('.seleccionar__producto').children('#miCheckbox').hasClass("on")) {
                let precioItem = $(item).closest(".otros-datos").children(".otros-datos__precio").children("span").html();
                precioItem = parseFloat(precioItem.replace('$ ', '').replace('.', ''));
                total += precioItem * inputCant;
                console.log("Total: " + total);
                console.log("Cant: " + inputCant);
                console.log("Precio: " + precioItem);
            }
        }
        agregarSuma(total);
    })
    total = 0;
}

document.querySelectorAll('#miCheckbox').forEach(check => {
    check.addEventListener('click', event => {
        if ($(check).hasClass('on')) {
            $(check).removeClass("on");
            cantidades();
        } else {
            $(check).addClass("on");
            cantidades();
        }
    })
})

document.querySelectorAll('.unidades').forEach(item => {
    item.addEventListener('click', event => {
        cantidades();
    })
})

document.querySelectorAll('#seleccionar-todo').forEach(item => {
    item.addEventListener('click', event => {
        var checkboxes = document.getElementsByName('miCheckbox');
        if ($(item).hasClass('on')) {
            $(item).removeClass("on");
            for (var checkbox of checkboxes) {
                checkbox.checked = false;
                $(checkbox).removeClass("on");
            }
        } else {
            $(item).addClass("on");
            for (var checkbox of checkboxes) {
                checkbox.checked = true;
                $(checkbox).addClass("on");
            }
        }
        cantidades();
    })
})

document.querySelectorAll('.trash').forEach(item => {
    item.addEventListener('click', event => {
        $(item).closest(".seleccionar__producto").remove();
        cantidades();
        totalCarrito();
    })
})

document.querySelectorAll('#inputNumber').forEach(item => {
    item.addEventListener('change', event => {
        inputCant = item.value;
        inputNumber.innerHTML = inputCant; 
        if (inputCant > Number(item.max)) {
            inputCant = Number(item.max);
            $(item).val(inputCant);
        }
    })
})

totalCarrito();
