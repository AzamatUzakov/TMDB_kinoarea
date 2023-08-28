function headers_reload() {
    let header = document.querySelector('header');
    let icos_flex = document.createElement('div');
    let kinoarea_icons_blocks = document.createElement('div');
    let cinema_icons = document.createElement('div');
    let cinema_icons_img = document.createElement('img');
    let kino_icons = document.createElement('div');
    let kino_icons_img = document.createElement('img');
    let vk_ins_face_twitt_icons_blocks = document.createElement('div');
    let vk_img = document.createElement('img');
    let insta_img = document.createElement('img');
    let face_img = document.createElement('img');
    let twitter_img = document.createElement('img');
    let link_a_block = document.createElement('div');
    let link_one = document.createElement('a');
    let link_two = document.createElement('a');
    let link_three = document.createElement('a');
    let link_foor = document.createElement('a');
    let link_five = document.createElement('a');
    let link_six = document.createElement('a');
    let link_eayt = document.createElement('a');
    let search_button = document.createElement('div');
    let btn_flex = document.createElement('div');
    let search_box = document.createElement('div');
    // let search_box_img = document.createElement('img');
    let add_box = document.createElement('div');
    let odobrity_btn = document.createElement('button')
    let login = document.createElement('button')
    let exit = document.createElement('button')

    icos_flex.classList.add('icos_flex');
    kinoarea_icons_blocks.classList.add('kinoarea_icons_blocks');
    vk_ins_face_twitt_icons_blocks.classList.add('vk_ins_face_twitt_icons_blocks');
    link_a_block.classList.add('link_a_block');
    link_one.classList.add('a');
    link_two.classList.add('a');
    link_three.classList.add('a');
    link_foor.classList.add('a');
    link_five.classList.add('a');
    link_six.classList.add('a');
    link_eayt.classList.add('a');
    search_button.classList.add('search_button');
    btn_flex.classList.add('btn_flex');
    //  search_box.classList.add('search_box');
    add_box.classList.add('add_box');
    odobrity_btn.classList.add('defoult_btn')
    login.classList.add('odobrity_btn')
    exit.classList.add('defoult_btn')


    link_one.innerHTML = "Афиша";
    link_two.innerHTML = "Медиа";
    link_three.innerHTML = 'Фильм';
    link_foor.innerHTML = 'Актёры';
    link_five.innerHTML = 'Новости';
    link_six.innerHTML = 'Подборки';
    link_eayt.innerText = 'Категории';
    add_box.innerHTML = "Войти";
    odobrity_btn.innerHTML = "Одобрить"
    login.innerHTML = "Login"
    exit.innerHTML = "Выйти"


    link_one.href = "#"
    link_two.href = "#"
    link_three.href = "#"
    link_foor.href = "#"
    link_five.href = "#"
    link_six.href = "#"
    link_eayt.href = "#"
    add_box.href = "#"

    cinema_icons_img.src = "../public/cinema 1.svg";
    kino_icons_img.src = "../public/kinoarea.png";
    vk_img.src = "../public/vk.png";
    insta_img.src = "../public/instagram.png";
    face_img.src = "../public/facebook.png";
    twitter_img.src = "../public/twitter.png";
    //  search_box_img.src = "../public/search.png";

    header.append(icos_flex, link_a_block, search_button);
    icos_flex.append(kinoarea_icons_blocks, vk_ins_face_twitt_icons_blocks);

    kinoarea_icons_blocks.append(cinema_icons, kino_icons);
    cinema_icons.append(cinema_icons_img);
    kino_icons.append(kino_icons_img);
    vk_ins_face_twitt_icons_blocks.append(vk_img, insta_img, face_img, twitter_img);

    link_a_block.append(link_one, link_two, link_three, link_foor, link_five, link_six, link_eayt);

    search_button.append(btn_flex);
    btn_flex.append(search_box, add_box, login, odobrity_btn, exit);
    //   search_box.append(search_box_img);


    kino_icons.onclick = () => {
        location.assign('/')
    }

    add_box.onclick = () => {
        location.assign("../acount/index.html")
    }

    let API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWIwNmU5YzExYTA2NzFmNmFhYjUwNzU4ZjBhYzczMSIsInN1YiI6IjY0ZDg5YjVlZjQ5NWVlMDI5NDMwNWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aoDhRlGV-Iv_PiTmdIt1LCgA7Ho2vh4aV50M04VXY7M"
    let reqToken = ""

    login.onclick = () => {
        fetch("https://api.themoviedb.org/4/auth/request_token", {
            method: 'POST',
            dataType: 'json',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': "application/json"
            },
            start_time: new Date().getTime()
        })
            .then((res) => res.json())
            .then(res => {
                if (res.success) {
                    reqToken = res.request_token
                    window.open(`https://www.themoviedb.org/auth/access?request_token=${res.request_token}`)
                }
            })
    }


    odobrity_btn.onclick = () => {
        fetch(`https://api.themoviedb.org/4/auth/access_token`, {
            method: 'POST',
            dataType: 'json',
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ request_token: reqToken }),
            start_time: new Date().getTime()
        })
            .then((res) => res.json())
            .then(res => {
                if (res.success) {
                    localStorage.setItem('user_auth', JSON.stringify(res))
                    location.reload()
                }
            })

    }/*  */
    let user_auth = JSON.parse(localStorage.getItem('user_auth')) || null
    if (user_auth) {
        fetch(`https://api.themoviedb.org/3/account/${user_auth?.account_id}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': "application/json"
            },
        })
            .then(res => res.json())
            .then(res => console.log(res))

    }
    exit.onclick = () => {
        localStorage.removeItem('user_auth')
        location.reload()
    }

}

headers_reload();