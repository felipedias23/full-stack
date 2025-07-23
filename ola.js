// Constantes nome, idade, profissão, ano atual e se já fez aniversário este ano

const nome = "Luis Felipe Dias";
const idade = 26;
const profissao = "Programador Full Stack";
const anoAtual = 2025;
const fezAniversario = false; // Altere para 'true' se já tiver feito aniversário este ano

// Se fez aniversário, subtrai apenas a idade do ano atual
// Se não fez aniversário, subtrai o ano pela idade - 1

const anoNascimento = fezAniversario ? anoAtual - idade : anoAtual - idade - 1;

// Mensagem do cartão de visita

console.log('-----------------------------');
console.log(`Olá, ${nome}!`);
console.log(`Tens ${idade} anos.`);
console.log(`Profissão: ${profissao}`);
console.log(`Nasceste em ${anoNascimento}.`);
console.log('-----------------------------');