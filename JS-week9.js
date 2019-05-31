// 1.

// let calculateSum = async (x,y)=>{
//     return x + y;
// }
// let sum = calculateSum(2, 6);

// sum.then(data => console.log(data));
// console.log(sum);


// 2.
// let results = $.getJSON('http://myapi.com');
// showResults(results);

// let results = async (url)=>{
//     let data;
//     fetch(url)
//     .then(res => {
//         data = res.json();
//         return data;
//     });
//     return data;
// }

// console.log(results('http://myapi.com'));

// 3.

// let calculateSum = async (x,y)=>{
//         return x + y;
//     }

// let sum = calculateSum(2, 6)
// sum.then(sum => {
//     if (sum > 8) {
//         console.log('larger than 8', sum);
//     }else{
//         console.log('sum is lass then 8', sum)
//     }
   
// });


// 4.

// let data = $.getJSON('http://myapi.com');
// data = data.map(function (x) { return x * 8; });

// let results = async (url)=>{
  
//     fetch(url)
//     .then(res => {
//         return res.json()
        
//     })
//     .then( data => {
//         data.map(function(x){
//             console.log(x * 8)
//             // return x * 8
//         })
//     })
    
// }

// results('https://api.myjson.com/bins/11ahv3');

// writeDataToFile(data);