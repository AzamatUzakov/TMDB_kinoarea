


let poster_id = location.search.split('=').at(-1)



fetch(`https://api.themoviedb.org/3/movie/${poster_id}/credits`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})

    .then((res) => res.json())
    .then((res) => cast(res.cast))

function cast(arr) {
    console.log(arr);
    let iframes = document.querySelector('.iframes')
    let contener_create_elem = document.querySelector('.contener_create_elem')
    for (let item_cast of arr.slice(0, 10)) {

        let main_box = document.createElement('div')

        let people_img = document.createElement('div')
        let names = document.createElement('h2')
        let org_name = document.createElement('p')
        let ru_name = document.createElement('p')

        people_img.classList.add('people_img')
        main_box.classList.add('main_box')
        names.classList.add('names')
        org_name.classList.add('org_name')
        ru_name.classList.add('ru_name')

        people_img.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${item_cast.profile_path} )`
        if (item_cast.profile_path === null) {
            people_img.style.backgroundImage = ` url(/public/Постер.png)`
        }

        names.innerHTML = item_cast.name
        org_name.innerHTML = item_cast.original_name
        ru_name.innerHTML = item_cast.character

        people_img.onclick = () => {
            location.assign('/actor_page/index.html?id=' + item_cast.id)
            console.log('click');

        }

        contener_create_elem.append(main_box)
        main_box.append(people_img, names, org_name, ru_name)








        fetch(`https://api.themoviedb.org/3/movie/${poster_id}/videos`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
            },
        })
            .then((res => res.json()))
            .then(res => {

                let rnd = Math.floor(Math.random() * res.results.length)
                let selectMovie = res.results[rnd]

                iframes.src = `https://www.youtube.com/embed/${selectMovie.key}`


            })

    }
}


fetch(`https://api.themoviedb.org/3/movie/${poster_id}movie_id/images`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => movie_posters(res.posters))

function movie_posters(arr) {

    let posters_cont = document.querySelector('.posters_cont')
    for (let item of arr.slice(0, 4)) {
        let poster = document.createElement('div')
        poster.classList.add('poster')

        poster.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${item.file_path} )`

        posters_cont.append(poster)

    }
}


fetch(`  https://api.themoviedb.org/3/movie/${poster_id}movie_id/similar?language=en-US&page=1`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => reload_clone(res.results))


function reload_clone(arr) {

    let big_cont = document.querySelector('.big_cont')
    for (let i of arr.slice(0, 4)) {

        let contener_box_img = document.createElement('div')
        let img_box = document.createElement('div')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')

        img_box.classList.add('img_box')
        h1.classList.add('h1')
        p.classList.add('p')

        h1.innerHTML = i.title

        img_box.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${i.poster_path} )`

        if (i.poster_path === null) {
            img_box.style.backgroundImage = ` url(/public/Постер.png)`
        }

        big_cont.append(contener_box_img)
        contener_box_img.append(img_box, h1, p)





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