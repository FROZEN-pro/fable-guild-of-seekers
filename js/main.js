class MenuScene extends Phaser.Scene {
    constructor() { super('MenuScene'); }
    
    preload() {
        // Background va logo (keyin ImgBB linklarini qo'shamiz)
        this.load.image('menu_bg', 'https://i.ibb.co/placeholder/menu-bg.jpg');
    }
    
    create() {
        this.add.image(640, 360, 'menu_bg').setScale(1.2);
        
        this.add.text(640, 200, 'FABLE', { fontSize: '72px', fill: '#c9a66b', fontStyle: 'bold' }).setOrigin(0.5);
        this.add.text(640, 280, 'GUILD OF SEEKERS', { fontSize: '42px', fill: '#ffd700' }).setOrigin(0.5);
        
        const startBtn = this.add.text(640, 420, 'SARGUZASHTNI BOSHLASH', { 
            fontSize: '36px', fill: '#fff', backgroundColor: '#3d2a1f' 
        }).setOrigin(0.5).setPadding(20).setInteractive();
        
        startBtn.on('pointerdown', () => {
            this.scene.start('GuildHallScene');
        });
        
        this.add.text(640, 650, 'Semi-Realistic Fantasy • Multiplayer Co-op', { 
            fontSize: '18px', fill: '#aaa' 
        }).setOrigin(0.5);
    }
}

class GuildHallScene extends Phaser.Scene {
    constructor() { super('GuildHallScene'); }
    preload() {
        // Knight assetlarini keyin qo'shamiz
    }
    create() {
        this.add.text(640, 100, 'GUILD HALL - Xush kelibsiz, Sarguzashtchi!', { 
            fontSize: '32px', fill: '#ffd700' 
        }).setOrigin(0.5);
        
        this.add.text(640, 200, 'Sizning birinchi qahramoningiz: Knight', { 
            fontSize: '24px', fill: '#fff' 
        }).setOrigin(0.5);
        
        // Knight sprite joylash (keyin animatsiya qo'shamiz)
        this.knight = this.add.text(640, 400, '🛡️ Knight (placeholder)', { fontSize: '120px' }).setOrigin(0.5);
        
        this.add.text(640, 550, 'WASD yoki Arrow bilan harakatlaning (keyingi bosqichda)', { 
            fontSize: '20px', fill: '#ccc' 
        }).setOrigin(0.5);
    }
}

const game = new Phaser.Game(config);