// for(var i = 0; i < 10; i++){
// console.log((i + 1) + ' Hello himel');
// }

// for(var i = 1; i<= 100; i++){
//     if(i%2 ==1){
//         console.log(i)
//     }
// }

// for (var i = 0; i <= 100; i++){
//   if(i%2 == 0){
//       console.log(i)
//   }
// }

// var sum = 0;
// for(var i = 1;i <= 10; i++){
//     console.log(sum + ' + ' +  i + ' = ' + (sum+i))
//     sum += i
// }
// console.log(sum)

var evenSum = 0
for(var i = 0; i <=100 ; i++){
    if(i % 2 == 0){
        console.log(evenSum + ' + ' + i + ' = ' + (evenSum +i))
        evenSum += i;
    }
}
console.log("evenSum =" + evenSum );