let finalArray=[
    {name:'Angular'},
    {name:'JavaScript'},
    {name:'TypeScript'}
]

let newArray=finalArray.map((e,i=1)=>{
    i++;
    console.log("id: "+i+" "+e.name);
})