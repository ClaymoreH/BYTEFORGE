const precoProcessador = 899.90;
const precoPlacaVideo = 1899.90;
const precoMemoria = 329.90;
const precoSSD = 459.90;

function simularCompra() {
  
  const qtdProcessador = Number(prompt("Quantos Processadores Ryzen 5 deseja comprar?"));
  const qtdPlacaVideo = Number(prompt("Quantas GeForce RTX 4060 deseja comprar?"));
  const qtdMemoria = Number(prompt("Quantas Memórias RAM 16GB deseja comprar?"));
  const qtdSSD = Number(prompt("Quantos SSD NVMe 1TB deseja comprar?"));

  const quantidades = [qtdProcessador, qtdPlacaVideo, qtdMemoria, qtdSSD];

  for (let i = 0; i < quantidades.length; i++) {
    if (!Number.isFinite(quantidades[i]) || quantidades[i] < 0) {
      alert("Quantidade inválida! Digite números iguais ou maiores que zero.");
      return;
    }
  }

  const totalProcessador = precoProcessador * qtdProcessador;
  const totalPlacaVideo = precoPlacaVideo * qtdPlacaVideo;
  const totalMemoria = precoMemoria * qtdMemoria;
  const totalSSD = precoSSD * qtdSSD;

  const totalCompra = totalProcessador + totalPlacaVideo + totalMemoria + totalSSD;

  if (qtdProcessador === 0 && qtdPlacaVideo === 0 &&
      qtdMemoria === 0 && qtdSSD === 0) {
    alert("Nenhum produto foi selecionado. Que tal escolher uma peça, ein? ¯\_(ツ)_/¯");
    return;
  }

  let resumo = "RESUMO DA SUA COMPRA - BYTEFORGE\n\n";

  if (qtdProcessador > 0) {
    resumo += "Processador Ryzen 5: " + qtdProcessador + " unidade(s) - " +
      (totalProcessador).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + "\n";
  }
  if (qtdPlacaVideo > 0) {
    resumo += "GeForce RTX 4060: " + qtdPlacaVideo + " unidade(s) - " +
      totalPlacaVideo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + "\n";
  }
  if (qtdMemoria > 0) {
    resumo += "Memória RAM 16GB: " + qtdMemoria + " unidade(s) - " +
      totalMemoria.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + "\n";
  }
  if (qtdSSD > 0) {
    resumo += "SSD NVMe 1TB: " + qtdSSD + " unidade(s) - " +
      totalSSD.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) + "\n";
  }

  // Compras a partir de R$ 1.500,00 recebem 10% de desconto.
  const limiteDesconto = 1500;
  const percentualDesconto = 0.10;
  let desconto = 0;

  resumo += "\nSubtotal: " + totalCompra.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  if (totalCompra >= limiteDesconto) {
    desconto = totalCompra * percentualDesconto;
    resumo += "\nDesconto de 10%: -" +
      desconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  } else {
    resumo += "\nDesconto: não aplicado (mínimo de R$ 1.500,00)";
  }

  const totalFinal = totalCompra - desconto;
  resumo += "\n\nTOTAL: " +
    totalFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  alert(resumo);
  volte = "Volte sempre! ツ ";
  alert(volte);

}
