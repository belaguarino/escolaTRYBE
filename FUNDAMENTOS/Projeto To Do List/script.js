let listaOrdenada = document.getElementById('lista-tarefas');
let string = '';

window.onload = function () {
  let btnEnviar = document.getElementById('criar-tarefa');
  let novaTarefa = document.getElementById('texto-tarefa');
  let btnApagar = document.getElementById('apaga-tudo');
  let btnMoverCima = document.getElementById('mover-cima');
  let btnMoverBaixo = document.getElementById('mover-baixo');
  let btnSalvar = document.getElementById('salvar-tarefas');
  let btnRemoveSelecao = document.getElementById('remover-selecionado');
  let btnRemover = document.getElementById('remover-finalizados');
  let selecao = document.querySelectorAll('.selecionado');

  //Função Criar
  btnEnviar.onclick = function () {
    if (novaTarefa.value.length > 0) {
      let lista = document.createElement('li');
      lista.innerHTML += novaTarefa.value;
      listaOrdenada.appendChild(lista);
      novaTarefa.value = string;
      return;
    } else {
      alert('Você precisa digitar uma tarefa!');
      return;
    }
  };

  //Função Apagar tudo
  btnApagar.onclick = function () {
    listaOrdenada.innerHTML = null;
    return;
  };

  //Função Remover Completos
  btnRemover.onclick = function () {
    let tarefaCompleta = document.querySelectorAll('.completed');
    for (let i = 0; i < tarefaCompleta.length; i++) {
      tarefaCompleta[i].remove();
    }
    return;
  };

  //Função Salvar
  btnSalvar.addEventListener('click', () => {
    let listagem = listaOrdenada.innerHTML;
    localStorage.setItem('listaSalva', listagem);
    alert('Sua lista foi salva!');
  });

  function recuperar() {
    listaOrdenada.innerHTML = localStorage.getItem('listaSalva');
  }

  recuperar();

  //Função RemoverSelecao
  btnRemoveSelecao.addEventListener('click', () => {
    let tarefaSelecionada = document.querySelectorAll('.selecionado');
    for (let i = 0; i < tarefaSelecionada.length; i++) {
      tarefaSelecionada[i].remove();
    }
  });

  //Função Mover

  btnMoverCima.addEventListener('click', () => {
    if (document.querySelector('.selecionado') === null) {
      return;
    }
    const parent = document.querySelector('.selecionado').parentNode;
    const previous =
      document.querySelector('.selecionado').previousElementSibling;
    const current = document.querySelector('.selecionado');

    if (previous === null) {
      alert('Fim da lista.');
    } else {
      parent.insertBefore(current, previous);
    }
  });

  // Mover elemento para baixo
  btnMoverBaixo.addEventListener('click', () => {
    if (document.querySelector('.selecionado') === null) {
      return;
    }
    const parent = document.querySelector('.selecionado').parentNode;
    const next = document.querySelector('.selecionado').nextElementSibling;
    const current = document.querySelector('.selecionado');

    if (next === null) {
      alert('Fim da lista.');
    } else {
      parent.insertBefore(next, current);
    }
  });
};

//Função de mudar a cor ao clicar
listaOrdenada.addEventListener('click', (event) => {
  const selecao = document.querySelectorAll('.selecionado');
  for (let i = 0; i < selecao.length; i++) {
    selecao[i].classList.remove('selecionado');
    selecao[i].style.backgroundColor = '';
  }
  event.target.classList.add('selecionado');
  const cinza = document.querySelector('.selecionado');
  cinza.style.backgroundColor = 'rgb(128, 128, 128)';
});

//Função de taxar ao clicar
listaOrdenada.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});
