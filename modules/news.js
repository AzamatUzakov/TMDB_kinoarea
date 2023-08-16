

function news_reload() {
let rigt_img_new = document.querySelector('.rigt_img_new')

    for (let i = 0; i < 3; i++) {

        let bac_img = document.createElement('div')
        let date = document.createElement('div')
        let title_p = document.createElement('div')
        let hovered_new = document.createElement('div')
        let ho = document.createElement('div')

        bac_img.classList.add('bac_img')
        date.classList.add("date")
        title_p.classList.add('title_p')
        hovered_new.classList.add('hovered_new')

        date.innerHTML = "15 Апр 2020"
        title_p.innerHTML = "Как изменили Соника с последнего анонса"

        rigt_img_new.append(ho)
        ho.append(bac_img,hovered_new)
        bac_img.append(date,title_p)


        bac_img.onmouseenter = () => {
            hovered_new.classList.add('hovered_new')
            console.log('move');

        }



        setTimeout(() => {
            bac_img.onmouseleave = () => {
                hovered_new.classList.remove('hovered_new')

                console.log('move');

            }
        }, 0); 

    }
}

news_reload()