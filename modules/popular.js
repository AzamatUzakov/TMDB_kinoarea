
let pop_cont = document.querySelector('.pop_cont')


fetch('https://api.themoviedb.org/3/movie/popular?language=uz-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => popular(res.results))

function popular(arr) {
    for (let i of arr) {
        let divPopular = document.createElement('div');
        let divImg = document.createElement('img');
        let divRatings = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        divPopular.classList.add('box_popular');
        divImg.classList.add('box_img');
        divRatings.classList.add('pop_reytings');
        h3.classList.add('h3')

        divImg.src = import.meta.env.VITE_PICTURE_URL + i.poster_path
        h3.innerHTML = i.title.slice(0,13)
        if (i.title.length > divImg.length){
            i.title.slice(0,10)
        }
            divRatings.innerHTML = i.vote_average

        pop_cont.append(divPopular)
        divPopular.append(divImg, divRatings, h3, p);

        


        fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
            },
        })
            .then((res) => res.json())
            .then((res) => {
                let info_ganr_tx = ``
                for (const el of i.genre_ids) {
                    const genres = res.genres.filter(obj => obj.id === el);
                    info_ganr_tx = info_ganr_tx + genres[0].name + `, `
                }
                p.innerHTML = info_ganr_tx.slice(0, -2)
            })

    }
}
