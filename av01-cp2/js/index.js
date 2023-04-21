const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const result = document.querySelector("#result");


soma = () => {
    const Number1 = n1.value
    const Number2 = n2.value
    const calc = Number(Number1) + Number(Number2)
    result.innerText= `Resultado:${calc}`
}