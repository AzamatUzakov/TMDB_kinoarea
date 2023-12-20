    

let scroll_video_treylers = document.querySelector('.scroll_video_treylers')
let real_iframe = document.querySelector('.iframes')

fetch(
    'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
}
).then((res) => res.json())
    .then((res) =>reload_trilers(res.results))

function reload_trilers(arr) {
    scroll_video_treylers.innerHTML = ""
    for (let item of arr) {
        let box_photo = document.createElement('div')
        let hovered = document.createElement('div')
        let elem_photo = document.createElement('img')
        let player = document.createElement('img')
        let p_names = document.createElement('p')

        box_photo.classList.add('box_photo')
        elem_photo.classList.add("elem_photo")
        p_names.classList.add("p")
        player.classList.add('player')

        p_names.innerHTML = item.original_title
        player.src = "/public/player.png"
        elem_photo.src = import.meta.env.VITE_PICTURE_URL + item.backdrop_path

        scroll_video_treylers.append(box_photo)
        box_photo.append(elem_photo, p_names, player, hovered)





        box_photo.onmouseenter = () => {
            hovered.classList.add('hovereds')

        }



        setTimeout(() => {
            box_photo.onmouseleave = () => {
                hovered.classList.remove('hovereds')


            }
        }, 0);


        fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
            },
        })
            .then((res => res.json()))
            .then(res => {

                let rnd = Math.floor(Math.random() * res.results.length)
                let selectMovie = res.results[rnd]
                    hovered.onclick = () => {
                    real_iframe.src = `https://www.youtube.com/embed/${selectMovie.key}`
                    console.log('click');
                }
            })

    }
}

