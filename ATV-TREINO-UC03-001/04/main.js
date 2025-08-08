let vendedor
let salario
let vendas
let comissao
let total

vendedor = prompt(" Digite o nome do vendedor");
salario = parseFloat(prompt(` Digite o salário fixo de ${vendedor}`));
vendas = parseFloat(prompt(" Digite o valor total das vendas")); //parseFloat transforma o texto recebido em Float (valor real)

if (vendas > 5000) {
    comissao = (vendas * 15) / 100;

} else if (vendas >= 1500) {
    comissao = (vendas * 10) / 100;
} else {
    comissao = (vendas * 5) / 100;
}

total = salario + comissao;
alert(` O valor total que ${vendedor} deve receber (salário + comissão) é de ${total} .`);

