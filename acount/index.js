
let pages = document.querySelectorAll('.pages')
let pages_btn = document.querySelectorAll('[data-page]')
let gravatar_img = document.querySelector('.gravatar')
let name = document.querySelector('.name')

let API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M"

let user_auth = JSON.parse(localStorage.getItem('user_auth')) || null
if (user_auth) {
    fetch(`https://api.themoviedb.org/3/account/${user_auth?.account_id}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
    })

        .then(res => res.json())
        .then(res => {
            gravatar_img.src = `https://www.gravatar.com/avatar/${res.avatar.gravatar.hash}`
            name.innerHTML = res.username
        })

}








pages_btn.forEach(btn => {
    btn.onclick = () => {
        let id = btn.getAttribute('data-page')
        console.log(id);
        pages_btn.forEach(btn => btn.classList.remove('active'))
        pages.forEach(page => {
            if (id === page.id) {
                page.classList.add('active')
            } else {
                page.classList.remove('active')
            }

        })

        btn.classList.add('active')

    }

})


fetch(`https://api.themoviedb.org/3/account/20294516`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})

    .then((res) => res.json())
    .then((res) => console.log(res))




let cinema = JSON.parse(localStorage.getItem('cinema')) || []

fetch(`https://api.themoviedb.org/3/movie/${cinema.id}`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => console.log(res))


cinems(cinema)

function cinems(arr2) {
console.log(arr2);

    for (let arr of arr2) {
        let conteners = document.querySelector('.conteners')
        let box = document.createElement('div')
        let item_img = document.createElement('img')
        let titles = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')


        box.classList.add('box')
        item_img.classList.add('item_photo')
        h2.classList.add('h2')
        p.classList.add('p')

        item_img.src = import.meta.env.VITE_PICTURE_URL + arr.poster_path

        h2.innerHTML = arr.original_title
        p.innerHTML = 'geners'

        conteners.append(box)
        box.append(item_img, titles)
        titles.append(h2, p)
    }
}


function persons_local(arr) {

    for (let item = 0; item < 10; item++) {

        let conteners = document.querySelector('.conteners')
        let box = document.createElement('div')
        let item_img = document.createElement('img')
        let titles = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')


        box.classList.add('box')
        item_img.classList.add('item_photo')
        h2.classList.add('h2')
        p.classList.add('p')

        item_img.src = import.meta.env.VITE_PICTURE_URL + arr.poster_path

        h2.innerHTML = arr.original_title
        p.innerHTML = 'geners'

        conteners.append(box)
        box.append(item_img, titles)
        titles.append(h2, p)
    }
}

persons_local()