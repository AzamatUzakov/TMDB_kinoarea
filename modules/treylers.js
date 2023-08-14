

let scroll_video_treylers = document.querySelector('.scroll_video_treylers')

function reload_trilers() {
    for (let item = 0; item < 20; item++) {
        let box_photo = document.createElement('div')
        let elem_photo = document.createElement('div')
        let player = document.createElement('div')
        let p_names= document.createElement('p')


        box_photo.classList.add('box_photo')
        elem_photo.classList.add("elem_photo")
            p_names.classList.add("p")

        p_names.innerHTML = "Мулана"


        scroll_video_treylers.append(box_photo)
        box_photo.append(elem_photo,p_names)
        elem_photo.append(player)

    }

}
reload_trilers()
