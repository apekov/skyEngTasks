const items = document.querySelectorAll('.item');
const popapLayer = document.querySelector('.hidden');
let popapBlock = document.querySelector('.popap_block .info_block');

items.forEach(item => {
    item.onclick = function(event) {
        this.classList.add('popap');
        popapBlock.innerHTML = this.innerHTML;
        popapLayer.style.display = 'block';
    };
})

document.addEventListener('click', e => {
    let target = e.target;
    let hiddenElem = target.closest('.hidden');
    // let popapElem = target.closest('.popap_block') ? target.closest('.popap_block') : null;

    if (target.classList.contains('close')) {
        hiddenElem.style.display = 'none';
    } else if (target.classList.contains('hidden')) {
        hiddenElem.style.display = 'none';
    }
})