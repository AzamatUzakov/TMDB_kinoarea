
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
        pages.forEach(page => {
            if (id === page.id) {
                page.classList.add('active')
            } else {
                page.classList.remove('active')
            }

        })



    }

})
console.log(pages_btn);


fetch(`https://api.themoviedb.org/3/account/20294516`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})

    .then((res) => res.json())
    .then((res) => console.log(res))