function filterOdd(...rest)
{    let xy=[];
    rest.forEach(element => {
        if(element%2!=0)
            xy.push(element);
    }); return xy;
}
function filterEven(...rest)
{
    let xy=[];
    rest.forEach(element => {
        if(element%2==0)
            xy.push(element);
    }); return xy;
}
function generateRandomList(n=7)
{   let num=[];
    for(let a=0;a<n;a++){
        num.push(Math.floor(Math.random()*100));
    } return num;
}
export{filterEven,filterOdd,generateRandomList};