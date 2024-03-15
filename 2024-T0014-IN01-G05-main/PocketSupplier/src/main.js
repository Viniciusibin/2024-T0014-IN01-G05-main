var player;

class CenaTeste extends Phaser.Scene {

    // Adicionando o método construtor
    constructor() {
        super({ key: "CenaTeste" });
    }

    // Carregando nossos arquivos
    preload() {
        this.load.image('tiles', 'assets/conjunto_de_blocos/japaneseCityFree.png');
        this.load.image('tiles1', 'assets/conjunto_de_blocos/OfficeInterior.png');
        this.load.tilemapTiledJSON('map', 'assets/meta.json');
        this.load.spritesheet('player', 'assets/spritePlayer.png', { frameWidth: 146, frameHeight: 150 });
        this.load.image('explicar', 'assets/exclamation.png');
        this.load.image('balaoFala','assets/balao.png')
        this.load.image('letraE','assets/letraE.png')
        this.load.image('letraE2', 'assets/letraE2.png')
        this.load.image('tata2', 'assets/tata_720.png')
    }


    // Criando nossos arquivos
    create() {

        // Zoom da câmera 
        this.cameras.main.setZoom(3);
        // Definindo o centro da nossa câmera
        this.cameras.main.centerOn(0, 0);

        //  Criando o mapa através do comando do tilemap
        var map = this.make.tilemap({ key: 'map' });

        // Mostrando para o código onde está o conjunto de blocos do nosso mapa
        const tiles1 = map.addTilesetImage('OfficeInterior', 'tiles1');
        gameState.tiles = map.addTilesetImage('japaneseCityFree', 'tiles');

        // Criando as camadas estabelecidas no .json, definidas de acordo com o que criamos no aplicativo 'Tiled'
        var chao = map.createLayer('chão', tiles1, 0, 0);
        var paredeSalas = map.createLayer('parede salinha', tiles1, 0, 0);
        var varanda = map.createLayer('varanda', tiles1, 0, 0);
        var planta = map.createLayer('planta', tiles1, 0, 0);
        var lixo = map.createLayer('lixo', tiles1, 0, 0);
        var salaescada = map.createLayer('sala escada', tiles1, 0, 0);
        var armarios = map.createLayer('armarios', tiles1, 0, 0);
        var cafe = map.createLayer('cafe', tiles1, 0, 0);
        var predio = map.createLayer('prédio', tiles1, 0, 0);
        var janelas = map.createLayer('janelas', tiles1, 0, 0);
        var button
        

        // Definindo a propriedade 'colider', criada também no aplicativo 'tiled', como verdadeira, permitindo futuramente a colisão
        chao.setCollisionByProperty({ colider: true });
        janelas.setCollisionByProperty({ colider: true });
        paredeSalas.setCollisionByProperty({ colider: true });
        planta.setCollisionByProperty({ colider: true });
        cafe.setCollisionByProperty({ colider: true });
        armarios.setCollisionByProperty({ colider: true });
        salaescada.setCollisionByProperty({ colider: true });
        lixo.setCollisionByProperty({ colider: true });
        varanda.setCollisionByProperty({ colider: true });
        predio.setCollisionByProperty({ colider: true });

        // Definindo as propriedades do nosso personagem
        player = this.physics.add.sprite(500, 290, 'player').setScale(0.20);
        gameState.tata2 = this.add.image(470,290, 'tata2').setScale(0.2)

        // Criando as animações de andar, todas de acordo com os botões que são pressionadas

        this.anims.create({
            key: 'andarLateral',
            frames: this.anims.generateFrameNumbers('player', { start: 3, end: 5 }), //definição de qual frame será utilizado
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            key: 'andarBaixo',
            frames: this.anims.generateFrameNumbers('player', { start: 6, end: 8 }), //definição de qual frame será utilizado
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            key: 'parado',
            frames: this.anims.generateFrameNumbers('player', { start: 7, end: 7 }), //definição de qual frame será utilizado
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            key: 'andarCima',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }), //definição de qual frame será utilizado
            frameRate: 10,
            repeat: -1,
        });


        // Definindo a colisão entre o jogador e os objetos declarados anteriormente 
        this.physics.add.collider(player, paredeSalas);
        this.physics.add.collider(player, varanda);
        this.physics.add.collider(player, planta);
        this.physics.add.collider(player, lixo);
        this.physics.add.collider(player, salaescada);
        this.physics.add.collider(player, armarios);
        this.physics.add.collider(player, cafe);
        this.physics.add.collider(player, predio);
        this.physics.add.collider(player, janelas);

        // Configurando a câmera para seguir o jogador
        this.cameras.main.startFollow(player, true, 0.05, 0.05);

        this.cursors = this.input.keyboard.createCursorKeys();

        // Definindo a interação e a posição do botão que leva o jogador para a próxima fase
        button = this.add.image(1040, 400, "explicar").setScale(0.1);
        button.setInteractive();
        button.on("pointerdown", () => {
            this.scene.start("Privacity");
            // Leva o jogador para a fase seguinte
            console.log("Iniciar jogo!");
            this.scene.stop("CenaTeste");
        });
        this
        //adicionando o balão de fala
        
        //adicionando o assets da tata
        
        //gameState.tata1 = this.add.image(player.x -50, player.y +50, 'tata').setScale(0.6)
        
        //definindo a tata invisível para só aparecer quando apertar o 'E'
        
        //gameState.tata1.visible = false;
        
        //Adicionando outro assets da tata para passar a ideia de movimento
        
        //gameState.tata2 = this.add.image(player.x -50, player.y +49, 'tata').setScale(0.6)
        
        //gameState.tata2.visible = false;
        
        //adicionando o diálogo
        
        
        //adicionando o botão na letra E
        //definindo outras letras E para ocorrer o pisque
        
        gameState.letraE = this.add.image(500, player.y - 50, 'letraE').setScale(0.3);
        gameState.letraE3 = this.add.image(500, player.y - 50, 'letraE').setScale(0.3);
        gameState.letraE2 = this.add.image(500, player.y - 50, 'letraE2').setScale(0.3);
        //definição pisque
        gameState.letraEInterval = setInterval(() => {
            gameState.letraE3.visible = !gameState.letraE3.visible;
        }, 600);

        gameState.letraEInterval2 = setInterval(() => {
        gameState.letraE2.visible = !gameState.letraE2.visible;
        }, 500);


        //adicionando dialogo
        gameState.dialogoIndex = 0; // Índice para controlar qual texto do diálogo será exibido
        
        gameState.balaoFala = this.add.image( 500, 327, "balaoFala").setScale(0.5);
        
        gameState.balaoFala.visible = false; // Inicialmente, o balão de fala não deve ser visível
        
        gameState.textoDialogo = this.add.text(415,315, "Olá, tudo bem? Fabricinho me falou muito \n sobre você, e sua vontade de aprender mais sobre \n o processo de contratação de fornecedores da Meta, \n então vamos começar…", { fontSize: '97%', color: "black" ,fontFamily :'Verdana', fontWeight: 'extrablack', align: 'justify',wordWrap: { width: 270 }});
        
        gameState.textoDialogo.visible = false // Inicialmente, o texto do diálogo não deve ser visível
        
        gameState.dialogos = [
            "Olá, tudo bem? Fabricinho me falou muito \n sobre você, e sua vontade de aprender mais sobre \n o processo de contratação de fornecedores da Meta, \n então vamos começar…",
            "Como pode ver o escritório está tendo um problema \n com falta de cadeiras, uma oportunidade perfeita \n para  você  aprender sobre como avaliar as \ncaracterísticas de um fornecedor.",
            "Antes disso vou te dar algumas instruções \n de como avaliar um fornecedor baseado em sua Segurança \n e privacidade, Atividades Políticas e Anticorrupção,\n Reputação da marca e Netzero & Saúde Ambiental",
            "Primeiramente vamos falar sobre Segurança e privacidade - Para garantir segurança e privacidade, uma empresa deve ter firewalls, criptografia e sistemas de autenticação robustos, junto com políticas claras de acesso e treinamento para funcionários.",
            "Além disso, é crucial ter políticas de privacidade transparentes, práticas responsáveis de coleta e armazenamento de dados, consentimento informado e minimização de dados para proteger informações confidenciais.",
            
            
        ];
    gameState.letraE.setInteractive();
   
    gameState.letraE.on("pointerdown", () => {
    
    if (!gameState.textoDialogo.visible) {
        // Se o texto do diálogo não estiver visível, mostre o balão de fala e o primeiro texto
        gameState.balaoFala.visible = true;
        gameState.textoDialogo.visible = true;
        gameState.textoDialogo.setText(gameState.dialogos[gameState.dialogoIndex]); // Define o primeiro texto do diálogo
    } else {
        // Se o texto do diálogo já estiver visível, apenas atualize o texto para o próximo na lista
        gameState.dialogoIndex = (gameState.dialogoIndex + 1) % gameState.dialogos.length; // Avança para o próximo texto na lista circularmente
        gameState.textoDialogo.setText(gameState.dialogos[gameState.dialogoIndex]); // Atualiza o texto do diálogo
    }
    });
    }

    update() {
        // Chamando a câmera
        const cam = this.cameras.main;
        // Velocidade do personagem
        player.body.setVelocity(0);
        //     gameState.textoDialogo.setText(gameState.dialogos[gameState.dialogoIndex])
        //    }
        //    else
        //    {
            //     gameState.dialogoIndex = (gameState.dialogoIndex + 1) % gameState.dialogos.length; // Avança para o próximo texto na lista circularmente
            //     gameState.textoDialogo.setText(gameState.dialogos[gameState.dialogoIndex]);
            //    }
            
            // Atribuindo animação para cada um dos sentidos que o jogador decidir seguir
            if (this.cursors.left.isDown) {
            player.body.setVelocityX(-200);
            player.anims.play('andarLateral', true)
            player.flipX = true
        } else if (this.cursors.right.isDown) {
            player.body.setVelocityX(200);
            player.anims.play('andarLateral', true)
            player.flipX = false
            
            
        }
        else {
            player.setVelocityX(0)
            player.anims.play('parado', true)
            
        }
        
        if (this.cursors.up.isDown) {
            player.body.setVelocityY(-200);
            player.anims.play('andarCima', true)
            
        } else if (this.cursors.down.isDown) {
            player.body.setVelocityY(200);
            player.anims.play('andarBaixo', true)
        }
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey('E'))) {
            // Se a tecla "E" for pressionada, mostrar o balão de fala
            gameState.balaoFala.visible = true;
            gameState.textoDialogo.visible = true;
            if (!gameState.textoDialogo.visible) {
                // Se o texto do diálogo não estiver visível, mostre o balão de fala e o primeiro texto
                gameState.balaoFala.visible = true;
                gameState.textoDialogo.visible = true;
                gameState.textoDialogo.setText(gameState.dialogos[dialogoIndex]); // Define o primeiro texto do diálogo
            } else {
                // Se o texto do diálogo já estiver visível, apenas atualize o texto para o próximo na lista
                gameState.textoDialogo.setText(gameState.dialogos[gameState.dialogoIndex]); // Atualiza o texto do diálogo
                gameState.dialogoIndex = (gameState.dialogoIndex + 1) % gameState.dialogos.length; // Avança para o próximo texto na lista circularmente
            }
    }
    
}

}
