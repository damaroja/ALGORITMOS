





//Create a function that show me  what the linear compexity is 

const linearComplexity = (n) => {
    for (let i = 0; i < n; i++) {
            let a = i
    }   
}


const AverageComplexity = (n) => {
    let arr = [];
    for (let i = 1; i<n; i++) {
        const t1 = performance.now();
        linearComplexity(n);
        const t2 = performance.now(); 
        arr.push(t2-t1);
    }
    return arr.reduce((a,b) => a+b, 0)/n;
}

