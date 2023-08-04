const btnPlus = document.querySelector(".btn");
const btnNovaLista = document.querySelector(".new-list");
const taskList = document.querySelector(".lista-tarefas");

const lineContent = function (takeText) {
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

btnPlus.addEventListener("click", function (e) {
  takeText = document.querySelector(".tarefas").value;
  document.querySelector(".tarefas").value = "";

  const linhaCriada = createNewLine();
  const btnRemove = createButtonEl();
  const btnEdit = createButtonEl();

  btnRemoveClasses(btnRemove);
  btnEditClasses(btnEdit);

  linhaCriada.innerHTML = lineContent(takeText);
  linhaCriada.appendChild(btnEdit);
  linhaCriada.appendChild(btnRemove);

  taskList.appendChild(linhaCriada);
  btnRemove.addEventListener("click", function () {
    btnRemove.parentElement.remove();
  });

  btnEdit.onclick = function () {
    const newContent = prompt("New task");
    if (typeof newContent != "string") {
      linhaCriada.innerHTML = `<input type='checkbox' class='checkbox-round' /><p>${takeText}</p>`;
    } else {
      linhaCriada.innerHTML = `<input type='checkbox' class='checkbox-round' /><p>${newContent}</p>`;
    }
    linhaCriada.appendChild(btnEdit);
    linhaCriada.appendChild(btnRemove);
  };
  console.log(linhaCriada);
});

btnNovaLista.addEventListener("click", function (e) {
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

  taskList.appendChild(criaOl);
});
