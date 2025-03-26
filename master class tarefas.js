let lista_tarefas = [];


function adicionar_tarefa(tarefa) {
    if (tarefa && typeof tarefa === 'string') {
        lista_tarefas.push(tarefa);
        console.log(`Tarefa \"${tarefa}\" adicionada com sucesso!`);
    } else {
        console.log("Por favor, forneça uma tarefa válida em formato de string.");
    }
}


adicionar_tarefa("Finalizar implementação da lista de tarefas");
console.log("Lista atual de tarefas:", lista_tarefas);
function removertarefas(teste){}