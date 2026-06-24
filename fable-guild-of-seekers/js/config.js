const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#1a120b',
    physics: { 
        default: 'arcade', 
        arcade: { debug: false } 
    },
    scene: [MenuScene, GuildHallScene],
    scale: { 
        mode: Phaser.Scale.FIT, 
        autoCenter: Phaser.Scale.CENTER_BOTH 
    }
};