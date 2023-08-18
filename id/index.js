


let poster_id = location.search.split('=').at(-1)
console.log(poster_id);


fetch(`https://api.themoviedb.org/3/movie/${poster_id}`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => reload_informations(res))



function reload_informations(arr) {
    console.log(arr);
    let contener = document.querySelector('.contener')
    let information_flex = document.createElement('div')

    let bacground_path = document.querySelector('body')
console.log(bacground_path);
    let posters = document.createElement('div')
    let posters_img = document.createElement('img')
    let box_post = document.createElement('div')
    let title_cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let eng = document.createElement('p')
    let p = document.createElement('p')
    let btn = document.createElement('button')



    information_flex.classList.add('information_flex')
    posters.classList.add('posters')
    box_post.classList.add('box_post')
    posters_img.classList.add('posters_img')
    title_cont.classList.add('title_contener')
    h1.classList.add('h1')
    eng.classList.add('eng')
    p.classList.add('p')
    btn.classList.add('buttons')

    bacground_path.backgroundImage = ` url(https://image.tmdb.org/t/p/original${arr.backdrop_path})`
    console.log(arr.backdrop_path);
    posters_img.src = import.meta.env.VITE_PICTURE_URL + arr.poster_path
    h1.innerHTML = arr.original_title
    eng.innerHTML = arr.original_title
    p.innerHTML = arr.overview
    btn.innerHTML = "Перейти"



    contener.append(information_flex)
    information_flex.append(box_post,posters, title_cont)
    box_post.append(posters_img)
    title_cont.append(h1, eng, p, btn)
}
