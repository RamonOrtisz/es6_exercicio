let alunos = [
    {nome: 'Ramon', nota: 8},
    {nome: 'Ana Lucia', nota: 10},
    {nome: 'BBoy', nota: 4},
    {nome: 'Silva', nota: 2},
];

function filtrarAlunos(aprovados) {
    return aprovados.filter(alunos => alunos.nota >= 6);
    
    let alunosAprovados = filtrarAlunos(alunos);
    
    console.log("Alunos aprovados:");
    console.log(alunosAprovados);
}

// function filtrarReprovados(reprovados) {
//     return reprovados.filter(aluno => aluno.nota < 6);
// }

// let alunosReprovados = filtrarReprovados(alunos);

// console.log("Alunos reprovados:");
// console.log(alunosReprovados);