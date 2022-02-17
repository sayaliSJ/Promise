const a=new Promise((resolve,reject)=>{
    console.log(1);
    this.setTimeout(()=>{
        console.log(2)
    },0);
    resolve('success');
})

a.then(res=>console.log(res));
console.log(4); //1 4 success 2


let p=()=>{
    console.log(1);

    this.setTimeout(()=>{
        console.log(2)
    },0);
    console.log(9);
}

p();
console.log(4);// 1 9 4 2