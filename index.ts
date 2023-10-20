// import ProgressBar from "progress"

// const bar = new ProgressBar(":bar :percent :rate/bps :etas :current/:total", {total:40});

// const time = setInterval(() =>{
//     bar.tick();
//     if(bar.complete){
//         console.log("process completed");
//         clearInterval(time);
//     }
// },100)

// 1 + 2 + 3 + 4 + 5 + 6

const addup = () =>{
    let count:number = 6;
    const arr: Array<number> =[]

    for (let i = 0; i <= count; i++) {
        arr.push(i);        
    }

    return arr.reduce((a, b) =>{
        return a + b;
    });
}

const addup2=()=>{
    let count = 6;
    const arr=[]
    let total = 0;

    for(let i =1; i <=count; i++){
        total +=i;
    }
    return total;
};

// step 3;
const addUp3 = () =>{
    return (n * (n + 1)) 
}