

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => news_reload(res.results))



function news_reload(arr) {
    let rigt_img_new = document.querySelector('.rigt_img_new')
    let background_images = document.querySelector('.news')

    for (let i of arr) {

        /*         background_images.backgroundImage = `url(${import.meta.env.VITE_PICTURE_URL + i.backdrop_path})`
 */

        background_images.src = import.meta.env.VITE_PICTURE_URL + i.backdrop_path

        let bac_img = document.createElement('img')
        let date = document.createElement('div')
        let title_p = document.createElement('div')
        let hovered_new = document.createElement('div')
        let ho = document.createElement('div')

        bac_img.classList.add('bac_img')
        date.classList.add("date")
        title_p.classList.add('title_p')
        hovered_new.classList.add('hovered_new')

bac_img.src = import.meta.env.VITE_PICTURE_URL + i.backdrop_path


        date.innerHTML = "15 Апр 2020"
        title_p.innerHTML = "Как изменили Соника с последнего анонса"

        rigt_img_new.append(ho)
        ho.append(bac_img, hovered_new)
        bac_img.append(date, title_p)


        bac_img.onmouseenter = () => {
            hovered_new.classList.add('hovered_new')
            console.log('move');

        }



        setTimeout(() => {
            bac_img.onmouseleave = () => {
                hovered_new.classList.remove('hovered_new')

                console.log('move');

            }
        }, 0);

    }
}

news_reload()