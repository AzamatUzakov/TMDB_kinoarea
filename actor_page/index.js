let poster_id = location.search.split('=').at(-1)
console.log(poster_id);



fetch(`https://api.themoviedb.org/3/person/${poster_id}person_id?language=en-US`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})

    .then((res) => res.json())
    .then((res) => actors(res));


function actors(arr) {
    // console.log(arr);
    let img_actors_box = document.querySelector('.img_actors_box')
    console.log(arr);

    let img_item = document.querySelector('.img_item')
    let ru_name = document.querySelector('.ru_name')
    let en_name = document.querySelector('.en_name')
    let carer = document.querySelector('.career')
    let height = document.querySelector('.height')
    let date_birth = document.querySelector('.date_birth')
    let location = document.querySelector('.location')
    let genre = document.querySelector('.genre')
    let films = document.querySelector('.films')
    let heart_box = document.querySelector('.heart_box img')

    ru_name.innerHTML = arr.name
    en_name.innerHTML = arr.name
    carer.innerHTML = arr.popularity
    height.innerHTML = '1.75'
    date_birth.innerHTML = arr.birthday
    location.innerHTML = arr.place_of_birth
    genre.innerHTML = arr.gender
    films.innerHTML = arr.known_for_department

    img_item.src = import.meta.env.VITE_PICTURE_URL + arr.profile_path

    heart_box.onclick = () => {

        const person = JSON.parse(localStorage.getItem('pers')) || []
        person.push(arr)
        localStorage.setItem('pers', JSON.stringify(person))
    }

}




fetch(`
https://api.themoviedb.org/3/person/${poster_id}/movie_credits`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})

    .then((res) => res.json())
    .then((res) => best_film(res.crew));







function best_film(arr) {

    let big_cont = document.querySelector('.poster_contener_best')
    //  for (let i of arr.slice(0, 4)) {
    for (let i of arr) {

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



fetch(`https://api.themoviedb.org/3/person/${poster_id}/images`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})

    .then((res) => res.json())
    .then((res) => reload_img(res.profiles))

function reload_img(arr) {

    let left_photo = document.querySelector('.left_photo')
    let right_block = document.querySelector('.right_block')
    for (let i of arr) {

        left_photo.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${i.file_path})`


        let block_img = document.createElement('div')
        let p = document.createElement('p')

        block_img.classList.add('block_img')
        p.classList.add('p')

        block_img.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${i.file_path})`
        p.innerHTML = 'Почему «Титаник» — великое кино'

        right_block.append(block_img)
        block_img.append(p)
    }


}





fetch(`https://api.themoviedb.org/3/person/${poster_id}/images`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})

    .then((res) => res.json())
    .then((res) => img(res.profiles))

function img(arr) {
    let actor_img = document.querySelector('.actor_img')
    for (let i of arr.slice(0, 6)) {

        let item = document.createElement('img')
        item.classList.add('item')
        item.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${i.file_path})`
        actor_img.append(item)

    }
}