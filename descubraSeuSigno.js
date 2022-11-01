
let dia = null;
let mes = null;
let dtNascimento = null;
let resultado = window.document.getElementById("signo");
let signoImg = document.createElement('img');
signoImg.src = './capricornio.png';
signoImg.style.width = '200px';
signoImg.style.height = '153.58px';


function descobrirSigno() {

    dtNascimento = window.document.getElementById("nascimento").valueAsDate;
    dia = dtNascimento.getUTCDate();
    mes = dtNascimento.getUTCMonth() + 1;


    switch (mes) {

        case 1:
            if (dia >= 1 && dia <= 20) {
                //resultado.innerHTML = `<br>Seu signo e Capricornio!<br><br><img src="./img/capricornio.png" alt="" width="200px">`;
                signoImg.src = './img/capricornio.png'
                resultado.innerHTML = `<br>Seu signo é Capricornio!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Capricornio");

            } else if (dia >= 21 && dia <= 31) {
                //resultado.innerHTML = `<br>Seu signo e Aquario!<br><br><img src="./img/aquario.png" alt="" width="200px">`;
                signoImg.src = './img/aquario.png'
                resultado.innerHTML = `<br>Seu signo é Aquário!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Aquario");
            }
            break;

        case 2:
            if (dia >= 1 && dia <= 19) {
                //resultado.innerHTML = `<br>Seu signo e Aquario!<br><br><img src="./img/aquario.png" alt="" width="200px">`;
                signoImg.src = './img/aquario.png'
                resultado.innerHTML = `<br>Seu signo é Aquário!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Aquario");
            } else if (dia >= 20 && dia <= 31) {
               //resultado.innerHTML = `<br>Seu signo e Peixes!<br><br><img src="./img/peixes.png" alt="" width="200px">`;
               signoImg.src = './img/peixes.png'
               resultado.innerHTML = `<br>Seu signo é Peixes!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Peixes");
            }
            break;

        case 3:
            if (dia >= 1 && dia <= 20) {
                //resultado.innerHTML = `<br>Seu signo e Peixes!<br><br><img src="./img/peixes.png" alt="" width="200px">`;
                signoImg.src = './img/peixes.png'
                resultado.innerHTML = `<br>Seu signo é Peixes!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Peixes");
            } else if (dia >= 21 && dia <= 31) {
                //resultado.innerHTML = `<br>Seu signo e Aries!<br><br><img src="./img/aries.png" alt="" width="200px">`;
                signoImg.src = './img/aries.png'
                resultado.innerHTML = `<br>Seu signo é Áries!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Aries");
            }
            break;

        case 4:
            if (dia >= 1 && dia <= 20) {
                //resultado.innerHTML = `<br>Seu signo e Aries!<br><br><img src="./img/aries.png" alt="" width="200px">`;
                signoImg.src = './img/aries.png'
                resultado.innerHTML = `<br>Seu signo é Áries!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Aries");
            } else if (dia >= 21 && dia <= 30) {
                //resultado.innerHTML = `<br>Seu signo e Touro!<br><br><img src="./img/touro.png" alt="" width="200px">`;
                signoImg.src = './img/touro.png'
                resultado.innerHTML = `<br>Seu signo é Touro!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Touro");
            }
            break;

        case 5:
            if (dia >= 1 && dia <= 21) {
                //resultado.innerHTML = `<br>Seu signo e Touro!<br><br><img src="./img/touro.png" alt="" width="200px">`;
                signoImg.src = './img/touro.png'
                resultado.innerHTML = `<br>Seu signo é Touro!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Touro");
            } else if (dia >= 22 && dia <= 31) {
                //resultado.innerHTML = `<br>Seu signo e Gemeos!<br><br><img src="./img/gemeos.png" alt="" width="200px">`;
                signoImg.src = './img/gemeos.png'
                resultado.innerHTML = `<br>Seu signo é Gêmeos!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Gemeos");
            }
            break;

        case 6:
            if (dia >= 1 && dia <= 21) {
                //resultado.innerHTML = `<br>Seu signo e Gemeos!<br><br><img src="./img/gemeos.png" alt="" width="200px">`;
                signoImg.src = './img/gemeos.png'
                resultado.innerHTML = `<br>Seu signo é Gêmeos!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Gemeos");
            } else if (dia >= 22 && dia <= 30) {
                //resultado.innerHTML = `<br>Seu signo e Cancer!<br><br><img src="./img/cancer.png" alt="" width="200px">`;
                signoImg.src = './img/cancer.png'
                resultado.innerHTML = `<br>Seu signo é Câncer!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Cancer");
            }
            break;

        case 7:
            if (dia >= 1 && dia <= 22) {
                //resultado.innerHTML = `<br>Seu signo e Cancer!<br><br><img src="./img/cancer.png" alt="" width="200px">`;
                signoImg.src = './img/cancer.png'
                resultado.innerHTML = `<br>Seu signo é Câncer!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Cancer");
            } else if (dia >= 23 && dia <= 31) {
                //resultado.innerHTML = `<br>Seu signo e Leao!<br><br><img src="./img/leao.png" alt="" width="200px">`;
                signoImg.src = './img/leao.png'
                resultado.innerHTML = `<br>Seu signo é Leão!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Leao");
            }
            break;

        case 8:
            if (dia >= 1 && dia <= 23) {
                //resultado.innerHTML = `<br>Seu signo e Leao!<br><br><img src="./img/leao.png" alt="" width="200px">`;
                signoImg.src = './img/leao.png'
                resultado.innerHTML = `<br>Seu signo é Leão!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Leao");
            } else if (dia >= 24 && dia <= 31) {
                //resultado.innerHTML = `<br>Seu signo e Virgem!<br><br><img src="./img/virgem (2).png" alt="" width="200px">`;
                signoImg.src = './img/virgem (2).png'
                resultado.innerHTML = `<br>Seu signo é Virgem!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Virgem");
            }
            break;

        case 9:
            if (dia >= 1 && dia <= 23) {
                //resultado.innerHTML = `<br>Seu signo e Virgem!<br><br><img src="./img/virgem (2).png" alt="" width="200px">`;
                signoImg.src = './img/virgem (2).png'
                resultado.innerHTML = `<br>Seu signo é Virgem!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Virgem");
            } else if (dia >= 24 && dia <= 30) {
                //resultado.innerHTML = `<br>Seu signo e Libra!<br><br><img src="./img/libra.png" alt="" width="200px">`;
                signoImg.src = './img/libra.png'
                resultado.innerHTML = `<br>Seu signo é Libra!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Libra");
            }
            break;

        case 10:
            if (dia >= 1 && dia <= 23) {
                //resultado.innerHTML = `<br>Seu signo e Libra!<br><br><img src="./img/libra.png" alt="" width="200px">`;
                signoImg.src = './img/libra.png'
                resultado.innerHTML = `<br>Seu signo é Libra!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Libra");
            } else if (dia >= 24 && dia <= 31) {
                //resultado.innerHTML = `<br>Seu signo e Escorpiao!<br><br><img src="./img/escorpiao.png" alt="" width="200px">`;
                signoImg.src = './img/escorpiao.png'
                resultado.innerHTML = `<br>Seu signo é Escorpião!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Escorpiao");
            }
            break;

        case 11:
            if (dia >= 1 && dia <= 22) {
                //resultado.innerHTML = `<br>Seu signo e Escorpiao!<br><br><img src="./img/escorpiao.png" alt="" width="200px">`;
                signoImg.src = './img/escorpiao.png'
                resultado.innerHTML = `<br>Seu signo é Escorpião!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Escorpiao");
            } else if (dia >= 23 && dia <= 30) {
                //resultado.innerHTML = `<br>Seu signo e Sagitario!<br><br><img src="./img/sagitario.png" alt="" width="200px">`;
                signoImg.src = './img/sagitario.png'
                resultado.innerHTML = `<br>Seu signo é Sagitário!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Sagitario");
            }
            break;

        case 12:
            if (dia >= 1 && dia <= 21) {
                //resultado.innerHTML = `<br>Seu signo e Sagitario!<br><br><img src="./img/sagitario.png" alt="" width="200px">`;
                signoImg.src = './img/sagitario.png'
                resultado.innerHTML = `<br>Seu signo é Sagitário!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Sagitario");
            } else if (dia >= 22 && dia <= 31) {
                //resultado.innerHTML = `<br>Seu signo e Capricornio!<br><br><img src="./img/capricornio.png" alt="" width="200px">`;
                signoImg.src = './img/capricornio.png'
                resultado.innerHTML = `<br>Seu signo é Capricornio!<br>`+document.querySelector('#signocanva').appendChild(signoImg).innerHTML;
                console.log("Capricornio");
            }
            break;

        default:
            resultado.innerHTML = `<br><br><b>Signo não registrado</b>`;
            console.log("<br>Signo não registrado");
            break;
    }

}