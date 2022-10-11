import express from 'express';
import Player from "../src/Player.js";
import GameRPS from "../src/GameRPS.js"

const router = express.Router();

router.post("/", (req, res) => {
    const name = req.body.player
    const player = new Player(name)
    const game = new GameRPS(player)
    req.app.locals.game = game

    res.render("game", {
        name: name

    });
    
})



export default router; 
