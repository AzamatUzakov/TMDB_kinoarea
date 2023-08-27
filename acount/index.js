
let pages = document.querySelectorAll('.pages')
let pages_btn = document.querySelectorAll('[data-page]')









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


fetch(`https://api.themoviedb.org/3/account/20294516`,{
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})

.then((res) => res.json())
.then((res) => console.log(res))