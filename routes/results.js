import express from "express";
import Computer from '../src/Computer.js'
import GameRPS from '../src/GameRPS.js';

const router = express.Router();


router.post(`/`, (req, res) => {
    const game = req.app.locals.game
    const computer = new Computer()
    const playerName = game.player.name
    const playerChoice = req.body.choice
    const result = game.result(computer, playerChoice)


    res.render('results', {
        playerChoice: playerChoice,
        Name: playerName,
        computer: computer,
        result: result
    });

});

export default router;
