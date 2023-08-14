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
    let search_box_img = document.createElement('img');
    let add_box = document.createElement('div');

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
    search_box.classList.add('search_box');
    add_box.classList.add('add_box');



    link_one.innerHTML = "Афиша";
    link_two.innerHTML = "Медиа";
    link_three.innerHTML = 'Фильм';
    link_foor.innerHTML = 'Актёры';
    link_five.innerHTML = 'Новости';
    link_six.innerHTML = 'Подборки';
    link_eayt.innerText = 'Категории';
    add_box.innerHTML = "Войти";

    link_one.href ="#"
    link_two.href ="#"
    link_three.href ="#"
    link_foor.href ="#"
    link_five.href ="#"
    link_six.href ="#"
    link_eayt.href ="#"
    add_box.href ="#"

    cinema_icons_img.src = "../public/cinema 1.svg";
    kino_icons_img.src = "../public/kinoarea.png";
    vk_img.src = "../public/vk.png";
    insta_img.src = "../public/instagram.png";
    face_img.src = "../public/facebook.png";
    twitter_img.src = "../public/twitter.png";
    search_box_img.src = "../public/search.png";

    header.append(icos_flex, link_a_block, search_button);
    icos_flex.append(kinoarea_icons_blocks, vk_ins_face_twitt_icons_blocks);

    kinoarea_icons_blocks.append(cinema_icons, kino_icons);
    cinema_icons.append(cinema_icons_img);
    kino_icons.append(kino_icons_img);
    vk_ins_face_twitt_icons_blocks.append(vk_img, insta_img, face_img, twitter_img);

    link_a_block.append(link_one, link_two, link_three, link_foor, link_five, link_six, link_eayt);

    search_button.append(btn_flex);
    btn_flex.append(search_box, add_box);
    search_box.append(search_box_img);
}

headers_reload();