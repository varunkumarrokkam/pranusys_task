    
const func1 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Task 1 completed");
        },3000);
    });
};
    
const func2 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Task 2 completed");
        },3000);
    });
};
    
const func3 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Task 3 completed");
        },3000);
    });
};
    Promise.all([func1(), func2(), func3()]).then(dataArray =>{
        console.log("All data from different functions:", dataArray);
    }).catch(error =>{
        console.log('Error in promise', error);
    })
