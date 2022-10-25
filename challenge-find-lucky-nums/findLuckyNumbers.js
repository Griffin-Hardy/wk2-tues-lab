// Write your code below this line.
function luckyNumbers(n){
    let arr = []
    for (let i = 0; i < n; i++){
        if (n[i] !== arr){
            while (n <10 || n > 0){
                arr.push(n)
                return arr
            }
        }
    }
}

let random = luckyNumbers(3)
console.log(random)