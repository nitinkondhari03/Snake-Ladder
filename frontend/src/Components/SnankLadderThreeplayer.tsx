import React, { useState } from "react";
import "./SnakeLadder.css";


import Dice from "react-dice-roll";


const NUM_CELLS = 100;
const SNAKE_LADDERS:any = {
  7: 100,
  8: 100,
  9: 100,
  10: 100,
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

const SnankLadderThreeplayer = () => {
  let rolldics= new Audio ("SnakesAndLadder_rpg-dice-rolling-95182.mp3")
  const [players, setPlayers] = useState<Player[]>([
    { name: "Player 1", pos: 1 },
    { name: "Player 2", pos: 1 },
    { name: "Player 3", pos: 1 }
  ]);
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState("");
  const [rollnumber,setrollnumber]=useState<number>(0)
const [playername,setPlayersname]=useState<any>('')
const [count,setcount]=useState<number>(0)




const hadlevalue=(value:number)=>{
   rolldics.play()
  handleRoll(value)
  setcount(count+1)

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
    if (newPlayerPos === NUM_CELLS) {
      setWinner(currentPlayer.name);
    } else {
      setTurn((turn + 1) % players.length);
      
    }
    setPlayers(newPlayers);
    setPlayersname(currentPlayer.name)
  
  };



 

  return (
    <>
    {!winner?<div className="twoplarer" style={{display:"flex"}}>
      <div style={{display:"block",marginLeft:"auto"}}>
    <div style={{margin:"auto"}} >
    <h1 style={{color:"white"}}>{"Player 1"}</h1>
      {count==0 &&<Dice size={150} onRoll={(value) => hadlevalue(value)} />
      }
      {playername=="Player 1"&& <h1>Last Roll{rollnumber}</h1>}
     {playername=="Player 3" &&
    <Dice size={150}  onRoll={(value) =>  hadlevalue(value)} />}
    </div>

    <div style={{margin:"auto",marginTop:"200px"}} >
    <h1 style={{color:"white"}}>{"Player 3"}</h1>
    
      {playername=="Player 3"&& <h1>Last Roll{rollnumber}</h1>}
     {playername=="Player 2" &&
    <Dice size={150}  onRoll={(value) =>  hadlevalue(value)} />}
    </div>
    </div>
    <div className="game-board">
      {/* {[...Array(NUM_CELLS)].map((_, index) => (
        <div key={index} className="cell">
          
        </div>
      ))} */}
      {/* {players.map((player, index) => (
       
        <div
          key={index}
          className={`player player-${index}`}
          style={{
            left: `${((player.pos - 1) % 10) * 10}%`,
            bottom: `${Math.floor((player.pos - 1) / 10) * 10}%`,
          }}
        >
         
          {player.name}
        </div>
      ))} */}
      {players.map((player,index)=>{
              
              if(player.pos>=11 && player.pos<=20 || player.pos>=31 && player.pos<=40 || player.pos>=51 && player.pos<=60||
            player.pos>=71 && player.pos<=80||player.pos>=91 && player.pos<=100){
           return<div
          key={index}
          className={`player player-${index}`}
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
          className={`player player-${index}`}
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
 <div style={{margin:"auto"}}>
 <h1 style={{color:"white"}}>{"Player 2"}</h1>
    {playername=="Player 1"&& <Dice  size={150} onRoll={(value) => hadlevalue(value)} />}
   
   {playername=="Player 2"&& <h1>Last Roll is {rollnumber}</h1>}
<h1>{winner}</h1>
    </div>
    </div>:
<div className="winner">
<div className="blackgroudimhj">

</div>
  <h1 style={{color:"yellow"}}>{winner}</h1>
</div>
    }
    </>
  );
};

export default SnankLadderThreeplayer ;