// const random = (randomButton) => {
//     if (randomButton === next){
//         list.appendChild[length - 1] 
//         thumb.appendChild[length - 1]
//     } else {
//         list.prepend[length]
//         thumb.prepend[length]
//     }
// }


let bckButton = document.querySelector("#back")
let nxtButton = document.querySelector("#next")

let container = document.querySelector(".container")

let list = document.querySelector(".list")
let thumb = document.querySelector(".thumb")

function randomButton(type) {
    let listItens = document.querySelectorAll(".list-itens")
    let thumbItens = document.querySelectorAll(".thumb-itens")

    if (type === "next") {
        list.appendChild(listItens[0])
        thumb.appendChild(thumbItens[0])
        container.classList.add("next")
    } else {
        list.prepend(listItens[listItens.length - 1])
        thumb.prepend(thumbItens[listItens.length - 1])
        container.classList.add("back")
    }

    setTimeout(() => {
        container.classList.remove("next")
        container.classList.remove("back")
    }, 3000);
}

let sj = document.querySelector("#sj")
let lb = document.querySelector("#lb")
let cente = document.querySelector("#cente")
let mntl = document.querySelector("#mntl")
let mrc = document.querySelector("#mrc")



function capacity(type) {

    if (type === "sj") {
        sj.innerHTML = "21.880"
        setTimeout(() => {
            sj.innerHTML = ""
        }, 3000);
    } if (type === "lb") {
        lb.innerHTML = "54.000"
        setTimeout(() => {
            lb.innerHTML = ""
        }, 3000);
    } if (type === "cente") {
        cente.innerHTML = "60.235"
        setTimeout(() => {
            cente.innerHTML = ""
        }, 3000);
    } if (type === "mntl") {
        mntl.innerHTML = "84.567"
        setTimeout(() => {
            mntl.innerHTML = ""
        }, 3000);
    } if (type === "mrc") {
        mrc.innerHTML = "78.838"
        setTimeout(() => {
            mrc.innerHTML = ""
        }, 3000);
    }

}

let firstCuriosity = document.querySelector("#first-curiosity")
let secondCuriosity = document.querySelector("#second-curiosity")
let thirdCuriosity = document.querySelector("#third-curiosity")
let fourthCuriosity = document.querySelector("#fourth-curiosity")
let fifthCuriosity = document.querySelector("#fifth-curiosity")

function curiosity(type) {

    if (type === "sj") {
        firstCuriosity.innerHTML = `An interesting curiosity about São Januário Stadium, 
        located in Rio de Janeiro, is that it is one of the oldest and most traditional football stadiums in Brazil,
         serving as the home of Club de Regatas Vasco da Gama since its inauguration in 1927.
          In addition to hosting numerous achievements of Vasco da Gama, 
          São Januário also played an important historical role as an inclusive space for sports,
           particularly during a period when football in Brazil faced racial segregation.`
        setTimeout(() => {
            firstCuriosity.innerHTML = ""
        }, 10000);
    }

    if (type === "lb") {
        secondCuriosity.innerHTML = `The designation "La Bombonera" comes from its characteristic shape resembling a box of chocolates, 
        due to its unique architecture and the steep incline of the stands,
         which creates an intense and vibrant atmosphere during matches.`
        setTimeout(() => {
            secondCuriosity.innerHTML = ""
        }, 10000);
    }

    if (type === "cente") {
        thirdCuriosity.innerHTML = `It was built to host the first FIFA World Cup in 1930. 
        Besides being the stage for the historic final between Uruguay and Argentina,
         in which Uruguay became the first world football champion, 
         the Centenario Stadium is recognized as a significant milestone in global sports history.
          Its architecture and historical significance make it one of the most iconic and revered stadiums among football enthusiasts worldwide.`
        setTimeout(() => {
            thirdCuriosity.innerHTML = ""
        }, 10000);
    }

    if (type === "mntl") {
        fourthCuriosity.innerHTML = `Furthermore, the Monumental de Núñez has been the venue for important events
         such as finals of national and international cups, including the 1978 World Cup held in Argentina,
          where the stadium was one of the main venues.`
        setTimeout(() => {
            fourthCuriosity.innerHTML = ""
        }, 10000);
    }

    if (type === "mrc") {
        fifthCuriosity.innerHTML = `A fascinating curiosity about Maracanã Stadium
         is that it has been the venue for sports other than football. 
         In 1952, during the Pan American Games held in Rio de Janeiro, Maracanã was used for athletics competitions.`
        setTimeout(() => {
            fifthCuriosity.innerHTML = ""
        }, 10000);
    }
}


//  setTimeout(() => {
//     sj.classList.remove("sj")
//  }, 3000);

// const SOUTHAMERICA_STADIUS = {
//     SJ: "caldeirao",
//     LB: "bombonera",
//     CENTE: "centenario",
//     MNTL: "monumental",
//     MRC: "maraca"
// }

// const stadiums = [SOUTHAMERICA_STADIUS.SJ, SOUTHAMERICA_STADIUS.LB, SOUTHAMERICA_STADIUS.CENTE,
//     SOUTHAMERICA_STADIUS.MNTL, SOUTHAMERICA_STADIUS.MRC]