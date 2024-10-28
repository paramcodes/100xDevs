function maxValue(array: number[]): number {
    let max:number = 0;
    for(let i = 0;i < array.length;i++){
        if(array[i] > max)max = array[i];
    }
    return max;
}

let nums:number[] = [3,4,3,53,2,342];

console.log(maxValue(nums));