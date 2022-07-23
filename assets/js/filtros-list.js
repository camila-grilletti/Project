let listElements = document.querySelectorAll('.list-button-click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=> {

        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling; // Selecciona el elemento adyacente a menú, que es el ul oculto

        if (menu.clientHeight == "0") {
            height=menu.scrollHeight;
        }

        menu.style.height = height+"px";
    })
});