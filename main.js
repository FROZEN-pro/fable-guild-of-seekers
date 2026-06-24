class MenuScene extends Phaser.Scene {
    constructor() { super('MenuScene'); }
    
    preload() {
        this.load.image('menu_bg', 'https://i.ibb.co/placeholder/menu-bg.jpg'); // keyin chiroyli background qo'shamiz
        this.load.image('emblem', 'https://ibb.co/rKhVk4dd');
    }
    
    create() {
        // Background (hozircha rang)
        this.cameras.main.setBackgroundColor('#1a120b');
        
        this.add.image(640, 360, 'emblem').setScale(0.6).setAlpha(0.15);
        
        this.add.text(640, 180, 'FABLE', { fontSize: '82px', fill: '#c9a66b', fontStyle: 'bold' }).setOrigin(0.5);
        this.add.text(640, 270, 'GUILD OF SEEKERS', { fontSize: '48px', fill: '#ffd700' }).setOrigin(0.5);
        
        const startBtn = this.add.text(640, 420, 'SARGUZASHTNI BOSHLASH', { 
            fontSize: '38px', fill: '#fff', backgroundColor: '#3d2a1f', padding: { x: 30, y: 15 }
        }).setOrigin(0.5).setInteractive();
        
        startBtn.on('pointerdown', () => this.scene.start('GuildHallScene'));
        startBtn.on('pointerover', () => startBtn.setStyle({ fill: '#ffd700' }));
        startBtn.on('pointerout', () => startBtn.setStyle({ fill: '#fff' }));
    }
}

class GuildHallScene extends Phaser.Scene {
    constructor() { super('GuildHallScene'); }
    
    preload() {
        this.load.image('knight_portrait', 'https://ibb.co/yBNPkSt2');
        this.load.image('emblem', 'https://ibb.co/rKhVk4dd');
        // Sprite sheet (agar bir nechta frame bo'lsa, keyinroq spritesheet qilamiz)
        this.load.image('knight_sprite', 'https://ibb.co/nNMSgTqb');
    }
    
    create() {
        this.cameras.main.setBackgroundColor('#2c1f14');
        
        // Guild Hall fon matni
        this.add.text(640, 60, 'GUILD HALL', { fontSize: '42px', fill: '#ffd700' }).setOrigin(0.5);
        this.add.text(640, 110, 'Sarguzashtchilar Gildiyasi', { fontSize: '24px', fill: '#ccc' }).setOrigin(0.5);
        
        // Emblem
        this.add.image(200, 100, 'emblem').setScale(0.8);
        
        // Knight Portrait (chap tomonda)
        this.add.image(300, 380, 'knight_portrait').setScale(0.7);
        
        // Knight Sprite (o'rtada, harakatlanadigan)
        this.knight = this.add.image(640, 420, 'knight_sprite').setScale(2.5);
        
        this.add.text(640, 200, 'Sizning Qahramoningiz: Knight', { 
            fontSize: '28px', fill: '#fff' 
        }).setOrigin(0.5);
        
        // Harakat ko'rsatmasi
        this.add.text(640, 620, 'WASD yoki Arrow klavishlari bilan harakatlaning', { 
            fontSize: '20px', fill: '#aaa' 
        }).setOrigin(0.5);
        
        // Keyboard input
        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('W,A,S,D');
    }
    
    update() {
        if (!this.knight) return;
        
        const speed = 4;
        let moved = false;
        
        if (this.cursors.left.isDown || this.keys.A.isDown) {
            this.knight.x -= speed;
            moved = true;
        }
        if (this.cursors.right.isDown || this.keys.D.isDown) {
            this.knight.x += speed;
            moved = true;
        }
        if (this.cursors.up.isDown || this.keys.W.isDown) {
            this.knight.y -= speed;
            moved = true;
        }
        if (this.cursors.down.isDown || this.keys.S.isDown) {
            this.knight.y += speed;
            moved = true;
        }
        
        // Chegaralar
        this.knight.x = Phaser.Math.Clamp(this.knight.x, 50, 1230);
        this.knight.y = Phaser.Math.Clamp(this.knight.y, 150, 650);
    }
}

const game = new Phaser.Game(config);
