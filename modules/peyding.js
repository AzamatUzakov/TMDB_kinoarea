



fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => reload_peyding_posters(res.results))

function reload_peyding_posters(arr) {
    let peyding_posters = document.querySelector('.peyding_posters')
    /*    for (let item of arr) { */
    for (let item of arr) {

        let box_posters = document.createElement('div')
        let hovered = document.createElement('div')
        let poster_items = document.createElement('img')
        let h2_total = document.createElement('h2')
        let p_jeners = document.createElement('p')
        let btn = document.createElement('button')
        let btn_a_href = document.createElement('a')



        box_posters.classList.add('box_posters_peyding')
        poster_items.classList.add("poster_items_peyding")
        h2_total.classList.add("h2")
        p_jeners.classList.add("p")
        btn.classList.add('act_btn')
       // hovered.classList.add('hovereds')

        btn_a_href.innerHTML = 'Карточка фильма'


        /*      poster_items.src = import.meta.env.VITE_PICTURE_URL + item.poster_path
             h2_total.innerHTML = item.title.slice(0, 30) + '...'
      */

        h2_total.innerHTML = item.title
        poster_items.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${item.poster_path})`



        peyding_posters.append(box_posters)
        box_posters.append(poster_items, h2_total, p_jeners,hovered)
        poster_items.append()
        hovered.append(btn)
        btn.append(btn_a_href)


        box_posters.onmouseenter = () => {
            hovered.classList.add('hovereds')
            console.log('move');
            btn.style.display = 'block'
            setTimeout(() => {
                btn.style.scale = 1
            }, 10);

        }



        setTimeout(() => {
            box_posters.onmouseleave = () => {
                hovered.classList.remove('hovereds')

                btn.style.display = 'none'
                btn.style.scale = 0

                console.log('movi');
            }
        }, 1);


        btn.onclick = () => {
            btn_a_href.href = "/id/id.html?id=" + item.id
        }
        fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
            },
        })
            .then((res) => res.json())
            .then((res) => {
                let info_ganr_tx = ``
                for (const el of item.genre_ids) {
                    const genres = res.genres.filter(obj => obj.id === el);
                    info_ganr_tx = info_ganr_tx + genres[0].name + `, `
                }
                p_jeners.innerHTML = info_ganr_tx.slice(0, -2)
            })


    }

}
reload_peyding_posters()