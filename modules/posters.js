

let posters = document.querySelector('.posters')


fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
}
)
    .then((res) => res.json())
    .then((res) => reload_posters(res.results))


function reload_posters(arr) {
    posters.innerHTML = ""
    for (let item of arr) {

        /*     for (let item = 0; item < 10; item++) {
         */

        let box_posters = document.createElement('div')
        let hovered = document.createElement('div')
        let poster_items = document.createElement('img')
        let reytings = document.createElement('div')
        let h2_total = document.createElement('h2')
        let p_jeners = document.createElement('p')
        let btn = document.createElement('button')



        box_posters.classList.add('box_posters')
        poster_items.classList.add("poster_items")
        reytings.classList.add("reyting")
        h2_total.classList.add("h2")
        p_jeners.classList.add("p")
        btn.classList.add('act_btn')


        poster_items.src = import.meta.env.VITE_PICTURE_URL + item.poster_path
        h2_total.innerHTML = item.title
        reytings.innerHTML =item.vote_average;


        p_jeners.innerHTML = "Триллер"
        btn.innerHTML = "Карточка фильма"


        posters.append(box_posters)
        box_posters.append(poster_items, h2_total, p_jeners, reytings, hovered)
        hovered.append(btn)

        box_posters.onmouseenter = () => {
            hovered.classList.add('hovered')
            btn.style.display = 'block'
          setTimeout(() => {
            btn.style.scale =1 
            hovered.style.alignItems = 'center'
          },10);   
            console.log('move');

        }



        setTimeout(() => {
            box_posters.onmouseleave = () => {
                hovered.classList.remove('hovered')
                btn.style.display = 'none'
                btn.style.scale =0

                console.log('move');

            }
        }, 1);

    }

}
reload_posters()