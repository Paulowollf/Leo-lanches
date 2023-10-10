
const entregaRadio = document.getElementById("entrega");
const enderecoInput = document.getElementById("endereco");
const lancheSelect = document.getElementById("lanche");
const lanche2Select = document.getElementById("lanche2");
const bebidaSelect = document.getElementById("bebida");
const quantidade1Input = document.getElementById("quantidade1");
const quantidade2Input = document.getElementById("quantidade2");
const quantidadeBebidaInput = document.getElementById("quantidadeBebida");
const valorTotalSpan = document.getElementById("valorTotal");
const calcularTotalButton = document.getElementById("calcularTotal");

entregaRadio.addEventListener("change", function() {
    if (this.checked) {
        enderecoInput.style.display = "block";
    } else {
        enderecoInput.style.display = "none";
    }
});

calcularTotalButton.addEventListener("click", atualizarTotal);

function atualizarTotal() {
    const lancheValor = parseFloat(lancheSelect.value);
    const lanche2Valor = parseFloat(lanche2Select.value);
    const bebidaValor = parseFloat(bebidaSelect.value);
    const quantidade1 = parseFloat(quantidade1Input.value);
    const quantidade2 = parseFloat(quantidade2Input.value);
    const quantidadeBebida = parseFloat(quantidadeBebidaInput.value);

    const totalLanche1 = lancheValor * quantidade1;
    const totalLanche2 = lanche2Valor * quantidade2;
    const totalBebida = bebidaValor * quantidadeBebida;

    let total = totalLanche1 + totalLanche2 + totalBebida;

    if (entregaRadio.checked) {
        total += 6.00; // Adiciona 6 reais em caso de entrega
    }

    valorTotalSpan.textContent = total.toFixed(2);
}
