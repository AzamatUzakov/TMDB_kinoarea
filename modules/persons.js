


fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => persons(res.results))

function persons(arr) {
    let place_flex_conetner = document.querySelector('.place_flex_conetner')
    for (let i of arr.slice(0, 2)) {
        let img_place = document.createElement('div')
        let place_title = document.createElement('div')
        let place_cont_avtor = document.createElement('div')
        let h4 = document.createElement('h4')
        let pig = document.createElement('p')
        let p = document.createElement('p')


        img_place.classList.add('img_place')
        place_title.classList.add('place_title')
        place_cont_avtor.classList.add('place_cont_avtor')
        h4.classList.add('h4')
        pig.classList.add('pig')
        p.classList.add('p')

        img_place.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${i.profile_path})`
        h4.innerHTML = i.name
        pig.innerHTML = "Популярность  " + i.popularity

        p.innerHTML = "57 лет"

        place_flex_conetner.prepend(img_place)
        img_place.prepend(place_title, place_cont_avtor)
        place_cont_avtor.prepend(h4, pig, p)


           img_place.onclick = () => {
            location.assign('/actor_page/index.html?id=' + item_cast.id)
            console.log('click');

        }

    }

}



fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => table_persons(res.results))

function table_persons(arr) {
    let place_table_box = document.querySelector('.place_table_box')

    for (let i of arr) {
        let three_place = document.createElement('div')
        let titles = document.createElement('div')
        let h2_table = document.createElement('h2')
        let p_doc = document.createElement('p')
        let p_years = document.createElement('p')
        let place_index = document.createElement('div')
        let hr = document.createElement('hr')


        three_place.classList.add('three_place')
        titles.classList.add('titles')
        h2_table.classList.add('h2')
        p_doc.classList.add('doc')
        p_years.classList.add('p_names')
        place_index.classList.add('place_index')
        hr.classList.add('hr')

        h2_table.innerHTML = i.name
        p_doc.innerHTML = i.name
        p_years.innerHTML = "Популярность - " + i.popularity



        place_table_box.append(three_place, hr)
        three_place.append(titles, place_index)
        titles.append(h2_table, p_doc, p_years)

        for (let it = 0; it < arr.length; it++) {
            place_index.innerHTML = it

        }

    }
}

