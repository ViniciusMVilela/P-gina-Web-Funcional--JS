window.onload = function  (){
let frutas = [
    {
        descricao:'Mamão Papaia', preco:'4.70'
    },
    {
        descricao:'Laranja', preco:'3.70'
    },
    {
        descricao:'Manga', preco:'2.80'
    },
    {
        descricao:'Melão', preco:'5.89'
    },
    {
        descricao:'Melancia', preco:'13.30'
    },
]

const ul = document.querySelector("#produtos");

(function () { 
 
    for (fru of frutas){
        const filhoLi = document.createElement('li');

        for(listaFrutas in fru){
            if(listaFrutas == 'preco'){
            ul.appendChild(filhoLi).setAttribute('data-preco', fru[listaFrutas]);
            }  else{
                ul.appendChild(filhoLi).textContent = `${fru[listaFrutas]}`;
            } 
        
        }
    }

}) ()

let cesta =[]
const cestaCliente = document.querySelector('#cestaDoCliente');
const totalCompraCliente = document.querySelector('#mostraTotalCompra');

let itemProdutos = document.querySelectorAll('#produtos > li');

let total = 0;

itemProdutos.forEach(function(item){
    item.addEventListener('click',function(){
        if(cesta.indexOf(item.textContent) !=-1){
             alert(` o item ${item.textContent} já está na sua cesta`)
        } else {
            total += Number(item.dataset.preco);
            cesta.push(item.textContent);
            let itemCesta = document.createElement('li');
            cestaCliente.appendChild(itemCesta).textContent =item.textContent;
            totalCompraCliente.value = total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
        }
    })
})




}

 