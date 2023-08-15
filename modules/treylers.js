

let scroll_video_treylers = document.querySelector('.scroll_video_treylers')



function reload_trilers() {
    for (let item = 0; item < 20; item++) {
        let box_photo = document.createElement('div')
         let hovered = document.createElement('div')
       let elem_photo = document.createElement('div')
        let player = document.createElement('img')
        let p_names = document.createElement('p')


        box_photo.classList.add('box_photo')
        elem_photo.classList.add("elem_photo")
        p_names.classList.add("p")
        player.classList.add('player')

        p_names.innerHTML = "Мулана"
        player.src = "/public/player.png"


        scroll_video_treylers.append(box_photo)
        box_photo.append(elem_photo,p_names)
        elem_photo.append(player,hovered)




      box_photo.onmouseenter = () => {
            hovered.classList.add('hovereds')
            console.log('move');

        }



        setTimeout(() => {
            box_photo.onmouseleave = () => {
                hovered.classList.remove('hovereds')

                console.log('move');

            }
        }, 0); 

    }
}

reload_trilers()
