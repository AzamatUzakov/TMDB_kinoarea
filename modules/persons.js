


function persons() {
    let place_flex_conetner = document.querySelector('.place_flex_conetner')
    for (let i = 0; i < 2; i++) {

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


        place_title.innerHTML = "1-ое место"
        h4.innerHTML = "Квентин Тарантино"
        pig.innerHTML = "Quentin Tarantino"
        p.innerHTML = "57 лет"

        place_flex_conetner.prepend(img_place)
        img_place.prepend(place_title, place_cont_avtor)
        place_cont_avtor.prepend(h4, pig, p)

    }

} persons()


function table_persons() {
    let place_table_box = document.querySelector('.place_table_box')

    for (let i = 0; i < 3; i++) {

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

        h2_table.innerHTML = "Тино Брасс"
        p_doc.innerHTML = "Tinto Brass"
        p_years.innerHTML = '87 лет'
        place_index.innerHTML = "3-ое место"

        place_table_box.append(three_place, hr)
        three_place.append(titles, place_index)
        titles.append(h2_table, p_doc, p_years)


    }
}
table_persons()