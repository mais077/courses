const btn = document.getElementById('show-more');
// let summ = 0;
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
btn.addEventListener('click', () => {
    // summ += 1;
    // console.log(`кликнули ${summ} раз`);
    // alert(`кликнули ${summ} раз`)
    btn.classList.add('hidden')
    card1.classList.remove('hidden')
    card2.classList.remove('hidden')

})
