import { Chart, registerables } from "chart.js";
Chart.register(...registerables)



let poster_id = location.search.split('=').at(-1)
let body = document.querySelector('body')
let hart = document.querySelector('.hart_img')
let heartClass = 'red'



fetch(`https://api.themoviedb.org/3/movie/${poster_id}`, {
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
    },
})
    .then((res) => res.json())
    .then((res) => reload_informations(res))



function reload_informations(arr) {

    console.log(arr);

    let procents_hindred = 5
    let Kinoarea_reyting = 0
    let contener = document.querySelector('.contener')
    let information_flex = document.createElement('div')
    const ctx = document.getElementById('myChart');
    const ctx_two = document.getElementById('myChart_two');



    let bacground_path = document.querySelector('body')
    let posters = document.createElement('div')
    let posters_img = document.createElement('img')
    let box_post = document.createElement('div')
    let title_cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let eng = document.createElement('p')
    let charta_flex_box = document.createElement('div')
    let one_chart_box = document.createElement('div')
    let two_chart_box = document.createElement('div')
    let chart_one_totals = document.createElement('p')
    let chart_two_totals = document.createElement('p')
    let chart_one_name = document.createElement('p')
    let chart_two_name = document.createElement('p')

    let p = document.createElement('p')
    let btn = document.createElement('button')
    let player_btn = document.createElement('img')
    let btn_of_icon_flex_cont = document.createElement('div')
    let icons_box = document.createElement('div')
    let one_icon_img = document.createElement('img')
    let two_icon_img = document.createElement('img')
    let three_icon_img = document.createElement('img')
    let foor_icon_img = document.createElement('img')
    let five_icon_img = document.createElement('img')

    information_flex.classList.add('information_flex')
    posters.classList.add('posters')
    box_post.classList.add('box_post')
    posters_img.classList.add('posters_img')
    title_cont.classList.add('title_contener')
    h1.classList.add('h1')
    eng.classList.add('eng')
    p.classList.add('p')
    btn.classList.add('buttons')
    btn_of_icon_flex_cont.classList.add('btn_of_icon_flex_cont')
    icons_box.classList.add('icons_box')

    charta_flex_box.classList.add('charta_flex_box')
    one_chart_box.classList.add('one_chart_box')
    two_chart_box.classList.add('two_chart_box')
    chart_two_totals.classList.add('pull')
    chart_one_totals.classList.add('pull')



    body.style.backgroundImage = ` url(https://image.tmdb.org/t/p/original${arr.backdrop_path})`
    posters_img.src = import.meta.env.VITE_PICTURE_URL + arr.poster_path
    player_btn.src = "/public/player_btn.png"
    one_icon_img.src = '/public/vk.png'
    two_icon_img.src = '/public/instagram.png'
    three_icon_img.src = '/public/facebook.png'
    foor_icon_img.src = '/public/twitter.png'
    five_icon_img.src = '/public/tri tochki.png'



    h1.innerHTML = arr.original_title
    eng.innerHTML = arr.original_title
    p.innerHTML = arr.overview
    btn.innerHTML = "Смотреть трейлер"

    chart_one_name.innerHTML = 'Kinoarea'
    chart_two_name.innerHTML = "IMDb"


    contener.prepend(information_flex)
    information_flex.prepend(box_post, posters, title_cont)
    box_post.prepend(posters_img)
    title_cont.prepend(h1, eng, charta_flex_box, p, btn_of_icon_flex_cont)
    btn_of_icon_flex_cont.prepend(btn, icons_box)
    icons_box.prepend(one_icon_img, two_icon_img, three_icon_img, foor_icon_img, five_icon_img)
    btn.prepend(player_btn)
    charta_flex_box.prepend(one_chart_box, two_chart_box)
    one_chart_box.prepend(ctx, chart_one_totals, chart_one_name)
    two_chart_box.prepend(ctx_two, chart_two_totals, chart_two_name)

    /* function hart() {
        if (localStorage.setItem('cinema')) {
            
        }
    } */
    hart.onclick = () => {
        const cinemas = JSON.parse(localStorage.getItem('cinema')) || []
        cinemas.push(arr)
        localStorage.setItem('cinema', JSON.stringify(cinemas))


        /*     if (!hart.classList.contains('hart_active')) {
                hart.classList.add('hart_active');
                localStorage.setItem('heartIconColor', heartClass);
            } else {
                hart.classList.remove('hart_active');
                localStorage.removeItem('heartIconColor');
            } */
    }



    fetch(
        `https://api.themoviedb.org/3/movie/${poster_id}now_playing?language=en-US&page=1`, {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M`
        },
    }
    )

        .then((res) => res.json())
        .then(res => {
            Kinoarea_reyting = res.vote_average


            chart_one_totals.innerHTML = Kinoarea_reyting
            chart_two_totals.innerHTML = Kinoarea_reyting

            /*      function police() {
                     if (Kinoarea_reyting > 8) {
                         let moree = '#4BCB36'
                     } else if (Kinoarea_reyting < 7) {
                         let moree_teo = '#89CB36'
                     } else if (Kinoarea_reyting < 5) {
                         let moree_three = "#CB6C36"
                     }else{
                         let moree
                     }
     
                 } */

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: [''],
                    datasets: [{
                        label: '# of Votes',
                        data: [Kinoarea_reyting, procents_hindred],
                        borderWidth: 0,
                        backgroundColor: [

                            '#4BCB36',

                            'rgba(255, 255, 255, 0)',


                        ]
                    }]
                },
                options: {
                    cutout: 25,

                    cutoutPercentage: 1,
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false,
                        },


                    },
                }
            });


            new Chart(ctx_two, {
                type: 'doughnut',
                data: {
                    labels: [''],
                    datasets: [{
                        label: '# of Votes',
                        data: [Kinoarea_reyting, procents_hindred],
                        borderWidth: 0,
                        backgroundColor: [

                            '#4BCB36',

                            'rgba(255, 255, 255, 0)',


                        ]
                    }]
                },
                options: {
                    cutout: 25,

                    cutoutPercentage: 1,
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    }
                }
            });
        })
}
