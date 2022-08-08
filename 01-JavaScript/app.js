function carregar() {
    var msg01 = document.getElementById('msg-01');
    var msg02 = document.getElementById('msg-02')
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg02.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        msg01.innerHTML = 'Bom Dia!!!'
        img.src = "IMG/Manhã.jpg";
        document.body.style.background = "#335426";
    } else if (hora >= 12 && hora <= 18) {
        msg01.innerHTML = 'Boa Tarde!!!'
        img.src = "IMG/Tarde.jpg";
        document.body.style.background = "#FD8304";
    } else {
        msg01.innerHTML = 'Boa Noite!!!'
        img.src = "IMG/Noite.jpg";
        document.body.style.background = "#0254C0";
    }
}