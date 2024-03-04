    
const func1 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Data from function 1");
        },3000);
    });
};
    
const func2 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Data from function 2");
        },3000);
    });
};
    
const func3 = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve("Data from function 3");
        },3000);
    });
};
    Promise.all([func1(), func2(), func3()]).then(dataArray =>{
        console.log("All data from different functions:", dataArray);
    }).catch(error =>{
        console.log('Error in promise', error);
    })