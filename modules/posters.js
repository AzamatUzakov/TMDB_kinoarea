


let posters = document.querySelector('.posters')

function reload_posters() {
    for (let item = 0; item < 20; item++) {
        let box_posters = document.createElement('div')
        let poster_items = document.createElement('div')
        let reytings = document.createElement('div')
        let h2_total = document.createElement('h2')
        let p_jeners = document.createElement('p')


        box_posters.classList.add('box_posters')
        poster_items.classList.add("poster_items")
        reytings.classList.add("reyting")
        h2_total.classList.add("h2")
        p_jeners.classList.add("p")

        reytings.innerHTML = "6.50"
        h2_total.innerHTML = "Побег из Претории"
        p_jeners.innerHTML = "Триллер"


        posters.append(box_posters)
        box_posters.append(poster_items,h2_total,p_jeners)
        poster_items.append(reytings)

    }

}
reload_posters()