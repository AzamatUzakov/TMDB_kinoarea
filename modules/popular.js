
let pop_cont = document.querySelector('.pop_cont')

function popular() {
    for (let i = 0; i < 4; i++) {

        let divPopular = document.createElement('div');
        let divImg = document.createElement('div');
        let divRatings = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        divPopular.classList.add('box_popular');
        divImg.classList.add('box_img');
        divRatings.classList.add('pop_reytings');

        divRatings.innerHTML='7.30'
        h3.innerHTML = 'joker';
        p.innerHTML = 'triler';
        pop_cont.append(divPopular)
        divPopular.append(divImg, divRatings, h3, p);
    }
}
popular()