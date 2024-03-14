// criando uma class para mudar de cena
class TelaJogo extends Phaser.Scene {
  constructor() {
    super({ key: "TelaJogo" });
  }

  preload() {
    //adicionando vídeo
    this.load.video("video", "assets/Cena_rua.mp4", "canplay", false, true);
  }
  create() {
    // criando uma cena com vídeo
    const video = this.add.video(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "video");
    video.setScale(gameState.alturaJogo / video.height);
    video.on('complete', function () {
      // Muda para outra cena
      this.scene.start('CenaTeste');
    }, this)
    video.play(false);
  }
}
