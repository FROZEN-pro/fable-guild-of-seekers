const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#1a120b',
    physics: { default: 'arcade', arcade: { debug: false } },
    scene: [MenuScene, GuildHallScene],
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }
};

class MenuScene extends Phaser.Scene {
    constructor() { super('MenuScene'); }
    preload() {
        this.load.image('emblem', 'https://ibb.co/rKhVk4dd');
    }
    create() {
        this.cameras.main.setBackgroundColor('#1a120b');
        this.add.image(640, 360, 'emblem').setScale(0.5).setAlpha(0.2);
        
        this.add.text(640, 180, 'FABLE', { fontSize: '82px', fill: '#c9a66b', fontStyle: 'bold' }).setOrigin(0.5);
        this.add.text(640, 270, 'GUILD OF SEEKERS', { fontSize: '48px', fill: '#ffd700' }).setOrigin(0.5);
        
        const startBtn = this.add.text(640, 420, 'SARGUZASHTNI BOSHLASH', { 
            fontSize: '38px', fill: '#fff', backgroundColor: '#3d2a1f', padding: {x:30, y:15}
        }).setOrigin(0.5).setInteractive({ useHandCursor: true });
        
        startBtn.on('pointerdown', () => this.scene.start('GuildHallScene'));
    }
}

class GuildHallScene extends Phaser.Scene {
    constructor() { super('GuildHallScene'); }
    preload() {
        this.load.image('knight_portrait', 'https://ibb.co/yBNPkSt2');
        this.load.image('knight_sprite', 'https://ibb.co/nNMSgTqb');
        this.load.image('emblem', 'https://ibb.co/rKhVk4dd');
    }
    create() {
        this.cameras.main.setBackgroundColor('#2c1f14');
        this.add.text(640, 60, 'GUILD HALL', { fontSize: '42px', fill: '#ffd700' }).setOrigin(0.5);
        this.add.image(200, 120, 'emblem').setScale(0.7);
        this.add.image(300, 380, 'knight_portrait').setScale(0.65);
        
        this.knight = this.add.image(700, 420, 'knight_sprite').setScale(2.8);
        
        this.add.text(640, 200, 'Sizning Qahramoningiz: Knight', { fontSize: '28px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(640, 620, 'WASD / Strelkalar bilan harakatlaning', { fontSize: '20px', fill: '#aaa' }).setOrigin(0.5);
        
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('W,A,S,D');
    }
    update() {
        if (!this.knight) return;
        const speed = 5;
        if (this.cursors.left.isDown || this.keys.A.isDown) this.knight.x -= speed;
        if (this.cursors.right.isDown || this.keys.D.isDown) this.knight.x += speed;
        if (this.cursors.up.isDown || this.keys.W.isDown) this.knight.y -= speed;
        if (this.cursors.down.isDown || this.keys.S.isDown) this.knight.y += speed;
        
        this.knight.x = Phaser.Math.Clamp(this.knight.x, 100, 1180);
        this.knight.y = Phaser.Math.Clamp(this.knight.y, 180, 620);
    }
}

const game = new Phaser.Game(config);
