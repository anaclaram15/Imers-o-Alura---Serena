function pesquisar() {
    
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
        section.innerHTML = "<p>É preciso digitar antes de pesquisar</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

// itera sobre cada dado da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
//   cria um novo elemento
resultados +=`
<div>
    <h2 class="subtitulo">${dado.titulo}</h2>
    <p class="descrição-meta">${dado.descricao}
    </p>
    <a href="${dado.link}" target="_blank" class="links">Plataformas</a>
</div>
`;
    }

}

  if (!resultados) {
    resultados = "<p>Nenhum resultado parecido com sua digitação</p>"
  }
section.innerHTML = resultados
    
}

