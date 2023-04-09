import React, { useEffect, useState ,useRef} from "react";
import "./SnakeLadder_copy.css";

import Dice from "react-dice-roll";
const NUM_CELLS = 100;
const SNAKE_LADDERS:any = {
  6:100,
  5:100,
  9:100,
  10:100,
  11:100,
  14: 4,
  19: 8,
  22: 20,
  28: 21,
  36: 16,
  47: 26,
  49: 11,
  51: 7,
  56: 53,
  62: 18,
  64: 60,
  71: 28,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

interface Player {
  name: string;
  pos: number;
}

const SnakeLadder_copy = () => {
  let rolldics= new Audio ("SnakesAndLadder_rpg-dice-rolling-95182.mp3")
  const [players, setPlayers] = useState<Player[]>([
    { name: "Player 1", pos: 1 }
  ]);
  const [players2, setPlayers2] = useState<Player[]>([
    { name: "Player 2", pos: 1 }
  ])
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState("");
  const [rollnumber,setrollnumber]=useState<any>(0)
const [playername,setPlayersname]=useState<string>("")

const hadlevalue=(value:number)=>{
  rolldics.play()
  handleRoll(value)

}

const hadlevalue1=(value1:number)=>{
  rolldics.play()
  handleRoll1(value1)

}


  const handleRoll = (roll:number) => {
  
    if (winner) return;
    
    setrollnumber(roll)

    const newPlayers = [...players];
    const currentPlayer = newPlayers[turn];
    let newPos= Math.min(currentPlayer.pos + roll);
    if(newPos>100){
      newPos=currentPlayer.pos
    }
    const newPlayerPos = SNAKE_LADDERS[newPos] || newPos;
    currentPlayer.pos = newPlayerPos;
    if (newPlayerPos === 100) {
      setWinner(currentPlayer.name);
    } else {
      setTurn((turn + 1) % players.length);
    }
    setPlayers(newPlayers);
    setPlayersname(currentPlayer.name)
    if(newPlayerPos<100){
      setTimeout(()=>{
        const roll:any = Math.floor(Math.random() * 6) + 1
        hadlevalue1(roll)
      },3000)
    }
   
   
  };
  const handleRoll1 = (roll:number) => {
  
    if (winner) return;

    setrollnumber(roll)
    const newPlayers = [...players2];
    const currentPlayer = newPlayers[turn];
    let newPos= Math.min(currentPlayer.pos + roll);
    if(newPos>100){
      newPos=currentPlayer.pos
    }
    const newPlayerPos = SNAKE_LADDERS[newPos] || newPos;
    currentPlayer.pos = newPlayerPos;

    if (newPlayerPos === 100) {
      
      setWinner(currentPlayer.name)
    } else {
      setTurn((turn + 1) % players2.length);
    }
    setPlayers2(newPlayers);
    setPlayersname(currentPlayer.name)
  
  };
  return (
    <div style={{display:"flex"}}>
       <Dice onRoll={(value) => hadlevalue(value)} />
    <div className="game-board">
      
      {players.map((player,index)=>{
              
              if(player.pos>=11 && player.pos<=20 || player.pos>=31 && player.pos<=40 || player.pos>=51 && player.pos<=60||
            player.pos>=71 && player.pos<=80||player.pos>=91 && player.pos<=100){
           return<div
          key={index}
          className={`player `}
          style={{
            right: `${((player.pos - 1) % 10) * 10}%`,
            bottom: `${Math.floor((player.pos - 1) / 10) * 10}%`,
          }}
        >
         
          {player.name}
        </div>
           }else{
                return<div
          key={index}
          className={`player `}
          style={{
            left: `${((player.pos - 1) % 10) * 10}%`,
            bottom: `${Math.floor((player.pos - 1) / 10) * 10}%`,
          }}
        >
         
          {player.name}
        </div>
           }
          })}
          {players2.map((player,index)=>{
              
              if(player.pos>=11 && player.pos<=20 || player.pos>=31 && player.pos<=40 || player.pos>=51 && player.pos<=60||
            player.pos>=71 && player.pos<=80||player.pos>=91 && player.pos<=100){
           return<div
          key={index}
          className={`player `}
          style={{
            right: `${((player.pos - 1) % 10) * 10}%`,
            bottom: `${Math.floor((player.pos - 1) / 10) * 10}%`,
          }}
        >
         
          {player.name}
        </div>
           }else{
                return<div
          key={index}
          className={`player `}
          style={{
            left: `${((player.pos - 1) % 10) * 10}%`,
            bottom: `${Math.floor((player.pos - 1) / 10) * 10}%`,
          }}
        >
         
          {player.name}
        </div>
           }
          })}
     
    </div>
    {/* { winner && <div className="winner">{winner} wins!</div>} */}
    <div>
<h1>{winner}</h1>

    </div>
    </div>
  );
};

export default SnakeLadder_copy;