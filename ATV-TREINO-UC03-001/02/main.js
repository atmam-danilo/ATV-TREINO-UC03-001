let numero1;
let numero2;

numero1=prompt(" Digite um número.")
numero2=prompt(" Digite outro número.")

if (numero1>numero2) {
    alert(`O número ${numero1} é maior que o número ${numero2}.`)
} else {
    if (numero1==numero2) {
        alert(`O número ${numero1} é igual ao número ${numero2}`)
    } else {
        alert(` O número ${numero1} é menor que o número ${numero2}`)
    }
}