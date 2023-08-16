


function reload_peyding_posters() {
    let peyding_posters = document.querySelector('.peyding_posters')
    /*    for (let item of arr) { */

    for (let item = 0; item < 4;item++) {

        let box_posters = document.createElement('div')
        let hovered = document.createElement('div')
        let poster_items = document.createElement('img')
        let h2_total = document.createElement('h2')
        let p_jeners = document.createElement('p')



        box_posters.classList.add('box_posters_peyding')
        poster_items.classList.add("poster_items_peyding")
        h2_total.classList.add("h2")
        p_jeners.classList.add("p")

   /*      poster_items.src = import.meta.env.VITE_PICTURE_URL + item.poster_path
        h2_total.innerHTML = item.title.slice(0, 30) + '...'
 */

        p_jeners.innerHTML = "Триллер"
        h2_total.innerHTML ="Прощай"


        peyding_posters.append(box_posters)
        box_posters.append(poster_items, h2_total, p_jeners, hovered)


        box_posters.onmouseenter = () => {
            hovered.classList.add('hovered')
            console.log('move');

        }



        setTimeout(() => {
            box_posters.onmouseleave = () => {
                hovered.classList.remove('hovered')

                console.log('move');

            }
        }, 1);

    }

}
reload_peyding_posters()