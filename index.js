function load() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('foto')
    
    let data = new Date()
    let meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    let semana = ['domingo','segunda','terça','quarta','quinta','sexta','sabado']
    let dia = data.getDay()
    let mes = data.getMonth()
    let hora = data.getHours().toString().padStart(2, "0")
    let minuto = data.getMinutes().toString().padStart(2, "0")
    let segundos = data.getSeconds().toString().padStart(2, "0")
    let diaSemana = semana[dia]
    let diaMes = `${data.getDate().toString().padStart(2, "0")} de ${meses[mes]}`

    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `<h2>Agora são ${hora}:${minuto}:${segundos}</h2><h3>${diaSemana}-feira, dia ${diaMes}, Manha.</h3>`
        img.innerHTML = '<img  src="./img/manha.png">'
        document.body.style.backgroundColor = "#A0BBD6"
    } else if(hora < 6){
        msg.innerHTML = `<h2>Agora são ${hora}:${minuto}:${segundos}</h2><h3>${diaSemana}-feira, dia ${diaMes}, Madrugada.</h3>`
        img.innerHTML = '<img  src="./img/madrugada.png">'
        document.body.style.backgroundColor = "#061117"
    } else if(hora < 18){
        msg.innerHTML = `<h2>Agora são ${hora}:${minuto}:${segundos}</h2><h3>${diaSemana}-feira, dia ${diaMes}, Tarde.</h3>`
        img.innerHTML = '<img  src="./img/tarde.png">'
        document.body.style.backgroundColor = "#EC7800"
    } else {
        msg.innerHTML = `<h2>Agora são ${hora}:${minuto}:${segundos}</h2><h3>${diaSemana}-feira, dia ${diaMes}, Noite.</h3>`
        img.innerHTML = '<img  src="./img/noite.png">'
        document.body.style.backgroundColor = "#3E3353"
    }

}

setInterval(load, 1000)
