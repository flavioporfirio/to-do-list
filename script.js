const btnReload = document.querySelector(".btn-reload");
const btnReload1 = document.querySelector(".btn-reload1");
const btnPlus = document.querySelector(".btn");
const btnNovaLista = document.querySelector(".new-list");
const btnNovoDia = document.querySelector(".novo-dia");
const time = new Date();
const actualDay = time.getDate();
let newDate = 0;
let cont = 0;

//FIXME;
function formatDate(date) {
  // formata a data para o formato DD/MM/YYYY
  return `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
}

const takeTextInput = function () {
  return document.querySelector(".tarefas").value;
};

const removeTextInput = function () {
  return (document.querySelector(".tarefas").value = "");
};

const lineContent = function (takeText, time) {
  return `<input type='checkbox' class='checkbox-round' /> <p>${takeText}`;
};

const createNewLine = function () {
  return document.createElement("li");
};

const createButtonEl = function () {
  return document.createElement("button");
};

const btnRemoveClasses = function (btnRemove) {
  btnRemove.classList.add("btn-remove");
  btnRemove.classList.add("fa-solid");
  btnRemove.classList.add("fa-trash-can");
};

const btnEditClasses = function (btnEdit) {
  btnEdit.classList.add("btn-edita");
  btnEdit.classList.add("fa-sharp");
  btnEdit.classList.add("fa-solid");
  btnEdit.classList.add("fa-pen");
};

btnPlus.addEventListener("click", function () {
  takeText = takeTextInput();
  // takeText = takeTextInput();
  removeTextInput();
  const linhaCriada = createNewLine();
  const btnRemove = createButtonEl();
  const btnEdit = createButtonEl();

  btnRemoveClasses(btnRemove);
  btnEditClasses(btnEdit);

  linhaCriada.innerHTML = lineContent(takeText);
  linhaCriada.appendChild(btnEdit);
  linhaCriada.appendChild(btnRemove);

  document.querySelector(".lista-tarefas").appendChild(linhaCriada);
  btnRemove.addEventListener("click", function () {
    btnRemove.parentElement.remove();
  });

  btnEdit.onclick = function () {
    const date = formatDate(time);
    const newContent = prompt("New task");
    linhaCriada.innerHTML = `<input type='checkbox' class='checkbox-round' /><p>${newContent}</p>`;
    linhaCriada.appendChild(btnEdit);
    linhaCriada.appendChild(btnRemove);
  };
  console.log(document.querySelector(".lista-tarefas"));
});

btnNovaLista.addEventListener("click", function () {
  const criaOl = document.createElement("ol");
  const criaTitulo = document.createElement("h3");
  let nomeDaSecao = prompt("Digite o nome da nova seção");
  const btnRemove = createButtonEl();

  btnRemoveClasses(btnRemove);

  criaTitulo.classList.add("novo-titulo");
  criaTitulo.innerHTML = nomeDaSecao;
  criaOl.appendChild(criaTitulo);
  criaOl.appendChild(btnRemove);

  btnRemove.addEventListener("click", function () {
    btnRemove.parentElement.remove();
  });
  console.log(criaOl);

  document.querySelector(".lista-tarefas").appendChild(criaOl);
});

btnNovoDia.addEventListener("click", function () {
  const criaOl = document.createElement("ol");
  const criaTitulo = document.createElement("h3");
  const date = formatDate(time);
  const btnRemove = createButtonEl();

  btnRemoveClasses(btnRemove);

  btnRemove.addEventListener("click", function () {
    btnRemove.parentElement.remove();
  });
  criaTitulo.innerHTML = date;
  criaOl.appendChild(criaTitulo);
  criaOl.appendChild(btnRemove);
  document.querySelector(".lista-tarefas").appendChild(criaOl);
});
