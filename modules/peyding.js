



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



        box_posters.classList.add('box_posters_peyding')
        poster_items.classList.add("poster_items_peyding")
        h2_total.classList.add("h2")
        p_jeners.classList.add("p")

   /*      poster_items.src = import.meta.env.VITE_PICTURE_URL + item.poster_path
        h2_total.innerHTML = item.title.slice(0, 30) + '...'
 */

        p_jeners.innerHTML = ""
        h2_total.innerHTML =item.title  
        poster_items.src= import.meta.env.VITE_PICTURE_URL + item.poster_path


        peyding_posters.append(box_posters)
        box_posters.append(poster_items, h2_total, p_jeners, hovered)


        box_posters.onmouseenter = () => {
            hovered.classList.add('hovered')
            console.log('move');

        }



        setTimeout(() => {
            box_posters.onmouseleave = () => {
                hovered.classList.remove('hovered')

                console.log('move');

            }
        }, 1);

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