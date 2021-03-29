function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')

    var filmeFavorito = campoFilmeFavorito.value

    if(filmeFavorito.endsWith('.jpg')){
        listarFilmesNaTela(filmeFavorito)
    } else if(filmeFavorito.endsWith('</iframe>')){
        listarFilmesNaTela(filmeFavorito)
    } else {
        alert("Imagem/Iframe inválidos")
    }

    campoFilmeFavorito.value = ""
}


function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')

    if(filme.endsWith('.jpg')){
        var elementoFilme = "<img src=" + filme + ">"
        listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
    } else {
        listaFilmes.innerHTML = listaFilmes.innerHTML + filme
    }
}