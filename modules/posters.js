
let posters = document.querySelector('.posters')
let showingAllPosters = false
/* 

fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => { 


    }) */
fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
}
)
    .then((res) => res.json())
    .then((res) => reload_posters(res.results));


function reload_posters(arr) {
    posters.innerHTML = ""
    let body = document.querySelector('body')
    const toShow = showingAllPosters ? arr.length : 8
    for (let item of arr.slice(0, toShow)) {

        /*     for (let item = 0; item < 10; item++) {
         */



   /*      fetch(
            `https://api.themoviedb.org/3/movie/${item.id}now_playing?language=en-US&page=1`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
            },
        }
        )
            .then((res) => res.json())
            .then(res =>{

                box_posters.onmouseenter = () => {
                    body.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
                }

            })
 */
        /*   setTimeout(() => {
              box_posters.onmouseleave = () => {
  
              }
          }, 1); */

        let show_btn = document.querySelector('.new_btn')
        let box_posters = document.createElement('div')
        let hovered = document.createElement('div')
        let poster_items = document.createElement('img')
        let reytings = document.createElement('div')
        let h2_total = document.createElement('h2')
        let p_jeners = document.createElement('p')
        let btn = document.createElement('button')
        let btn_href = document.createElement('a')


        box_posters.classList.add('box_posters')
        poster_items.classList.add("poster_items")
        reytings.classList.add("reyting")
        h2_total.classList.add("h2")
        p_jeners.classList.add("p")
        btn.classList.add('act_btn')


        poster_items.src = import.meta.env.VITE_PICTURE_URL + item.poster_path
        h2_total.innerHTML = item.title
        reytings.innerHTML = item.vote_average;



        btn_href.innerHTML = "Карточка фильма"


        posters.append(box_posters)
        box_posters.append(poster_items, h2_total, p_jeners, reytings, hovered)
        hovered.append(btn)
        btn.append(btn_href)

        box_posters.onmouseenter = () => {
            hovered.classList.add('hovered')
            btn.style.display = 'block'
            setTimeout(() => {
                btn.style.scale = 1
                hovered.style.alignItems = 'center'
            }, 10);
            console.log('move');

        }



        setTimeout(() => {
            box_posters.onmouseleave = () => {
                hovered.classList.remove('hovered')
                btn.style.display = 'none'
                btn.style.scale = 0

                console.log('move');

            }
        }, 1);

        btn.onclick = () => {
            btn_href.href = "/id/id.html?id=" + item.id
        }


        show_btn.innerHTML = showingAllPosters ? 'Скрыть' : 'Показать все'
        show_btn.onclick = () => {
            // showPosters.style.scale = '0.8'
            showingAllPosters = !showingAllPosters
            reload_posters(arr)
        }
    }

}

