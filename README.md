# RPS Challenge

Instructions
-------

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9:30am Monday morning

Task
----

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

* Forking this repo
* TEST driving development of your app

Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

In code review we'll be hoping to see:

* All tests passing
* High test coverage
* The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )



#### RPS Challenge
Instructions
-------
To install and run this project on your machine, please follow these steps:
- install all depencies use command "npm i"
- to see the game on your browser use the command "npm start"

## Logic
I started installing express and ejs

I tried again testing from the beggining , but I had so much errors, and as I was falling behind I focused on finishing the challenge.

I kept everything simple, i didnt want to overthink all too much, so on my domain modeling I knew I needed 2 classes. 


| Object   | Property | Message        | Output  |
| -------- | -------- | -------------- | ------- |
| Player   | name     | player.name    | @string |
|          | choice   | playerChoice   |         |
| Computer | name     | computer.name  | @string |
|          | choice   | computerChoice |         |

I followed Ed's Battle project as a sort of a guide.

I didnt style it although I tried, but not sure how to as I am not familiar with ejs 

I redid my if statement as I wasnt getting my result to display on the ejs file, and I managed to make it display




### TO PLAY
For the game, You need to enter your name, and submit. You will be redirected to the choices page, once you pick your choice the game redirects you to the results page.
I tried working on my routes to play again without having to go back to home page, but I kept getting and error for it. 


