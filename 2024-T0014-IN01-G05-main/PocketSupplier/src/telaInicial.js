// criando uma class para o código ficar mais organizado

class TelaInicial extends Phaser.Scene {
  constructor() {
    super({ key: "TelaInicial" });
  }

  preload() {
    // adicionando imagens
    this.load.image("background", "assets/tela_menu.png");
    this.load.image("startButton", "assets/botao_start.png");
    this.load.image("languageButton", "assets/botao_idioma.png");
    this.load.image("exitButton", "assets/botao_sair.png");
  }

  create() {

    // Adiciona o fundo
    var telaBackground = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "background");
    telaBackground.setScale(gameState.alturaJogo / telaBackground.height);
    console.log(gameState.alturaJogo / telaBackground.height);

    var exitButton = this.add.image(gameState.larguraJogo / 1.45, gameState.alturaJogo / 1.25, "exitButton").setScale(1.5)

    var languageButton = this.add.image (gameState.larguraJogo / 3, gameState.alturaJogo / 1.25, "languageButton").setScale(1.5)

    // Adiciona o botão de Start
    var startButton = this.add.image(gameState.larguraJogo / 1.95, gameState.alturaJogo / 1.25, "startButton").setScale(1.5);
    startButton.setInteractive();
    startButton.on("pointerdown", () => {
      this.scene.start("TelaJogo");
      // Adicione aqui a lógica para iniciar o jogo ou mudar para a próxima cena
      console.log("Iniciar jogo!");
      this.scene.stop("TelaInicial");
    });
    this
  }
}
