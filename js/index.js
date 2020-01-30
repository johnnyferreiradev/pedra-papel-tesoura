const jogadas = ['pedra', 'papel', 'tesoura'];

// pedra papel = papel
// pedra tesoura = pedra
// papel pedra = papel
// papel teoura = tesoura
// tesoura pedra = pedra
// tesoura papel = tesoura

function calcularResultado(jogadaJogador, jogadaMaquina) {
	const codigoJogada = {
		pedrapapel: 'papel',
		pedratesoura: 'pedra',
		papelpedra: 'papel',
		papelteoura: 'tesoura',
		tesourapedra: 'pedra',
		tesourapapel: 'tesoura',
	}

	
	const codigoString = jogadaJogador + jogadaMaquina;
	
	return codigoJogada[codigoString];
}

	const maquina = parseInt(Math.random() * 3);
	let jogador = parseInt(prompt('1 - Pedra\n2 - Papel\n3 - Tesoura'));
	
	let resultado = calcularResultado(jogadas[jogador - 1], jogadas[maquina]);

	if(jogadas[jogador - 1] == jogadas[maquina]){
		console.log('empate')
	} else {
		if(resultado == jogadas[jogador - 1]) {
			console.log(`Você venceu, a maquina jogou ${jogadas[maquina]}`);
		} else {
			console.log(`Você perdeu, a maquina jogou ${jogadas[maquina]}`);
		}
	}
