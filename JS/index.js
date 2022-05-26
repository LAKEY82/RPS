const handOptions={
    'rock':"./Assets/Rock.png",
    'Paper':"./Assets/Paper.png",
    'scissers':"./Assets/Scissors.png"
}

let SCORE = 0;

const pickUserHand =(hand)=>{
   console.log(hand);

   //hide the page
   let hands=document.querySelector(".hands");
   hands.style.display="none";

   //show the next page with the hands picked

   let contenst=document.querySelector(".contenst");
   contenst.style.display="flex";

   //set what the picked 
    document.getElementById("userPickImage").src=handOptions[hand];
   
    let cpHand= pickComputerHand();
    referee(hand,cpHand)
}

const pickComputerHand = ()=>{
    let hands =['rock', 'Paper', 'scissers' ]
    let cpHand= hands[Math.floor(Math.random()*3)]

    document.getElementById("cpimage").src=handOptions[cpHand];

  return cpHand;
}

const referee=(userhand, cpHand)=>{

if (userhand == 'Paper' && cpHand == 'scissers'){
        setDecicion("YOU LOSE!");
    }else if(userhand == 'Paper' && cpHand =='rock'){
        setDecicion("YOU WIN!");
        setscore(SCORE+1);
    }else if(userhand =='Paper' && cpHand=='Paper'){
        setDecicion("TIE!");
    
    
    }else if(userhand=='rock' && cpHand=='Paper'){
        setDecicion("YOU LOSE!");
    }else if(userhand=='rock' && cpHand=='scissers'){
        setDecicion("YOU WIN!");
        setscore(SCORE+1);
    }else if(userhand=='rock' && cpHand=='rock'){
        setDecicion("TIE!");
    }

    else if(userhand=='scissers' && cpHand=='scissers'){
        setDecicion("TIE!");
    }else if(userhand=='scissers' && cpHand=='Paper'){
        setDecicion("WIN!");
        setscore(SCORE+1);
    }else if(userhand=='scissers'&& cpHand=='rock'){
        setDecicion("LOSE!");
    }

}

const restartGame = ()=>{
    let hands=document.querySelector(".hands");
    hands.style.display="flex";
 
    //show the next page with the hands picked
 
    let contenst=document.querySelector(".contenst");
    contenst.style.display="none";
}



const setDecicion =(decicion)=>{
   document.querySelector(".decicion h1").innerText=decicion;
}

const setscore = (score) =>{
    SCORE=score;
    document.querySelector(".score h1").innerText=score;
}