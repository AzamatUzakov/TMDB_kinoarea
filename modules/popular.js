
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
        let divImg = document.createElement('div');
        let divRatings = document.createElement('div');
        let hovered = document.createElement('div')
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let btn = document.createElement('button')
        let btn_a_href = document.createElement('a')

        divPopular.classList.add('box_popular');
        divImg.classList.add('box_img');
        divRatings.classList.add('pop_reytings');
        h3.classList.add('h3')
        btn.classList.add('act_btn')


        btn_a_href.innerHTML = 'Карточка фильма'

        divImg.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${i.poster_path})`
        h3.innerHTML = i.title.slice(0, 13)
        if (i.title.length > divImg.length) {
            i.title.slice(0, 10)
        }
        divRatings.innerHTML = i.vote_average

        pop_cont.append(divPopular)
        divPopular.append(divImg, divRatings, h3, p);
        divImg.append(hovered)
        hovered.append(btn)
        btn.append(btn_a_href)



        divPopular.onmouseenter = () => {
            hovered.classList.add('popular_hovered')
            btn.style.display = 'block'
            setTimeout(() => {
                btn.style.scale = 1
            }, 10);




            setTimeout(() => {
                divPopular.onmouseleave = () => {
                    hovered.classList.remove('popular_hovered')
                    btn.style.display = 'none'
                    btn.style.scale = 0

                    console.log('movi');
                }
            }, 1);

            btn.onclick = () => {
                btn_a_href.href = "/id/id.html?id=" + i.id
            }
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
}
