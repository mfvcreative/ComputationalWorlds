
const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

console.log("hello")

const mainCharPath = './sprites/main.png'
ASSET_MANAGER.queueDownload(mainCharPath)

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	e = new Entity()
	e.CSprite = ASSET_MANAGER.cache[mainCharPath]
	gameEngine.entities.push(e)
	gameEngine.init(ctx);

	gameEngine.start();
});
