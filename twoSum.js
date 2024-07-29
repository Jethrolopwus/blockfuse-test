function intergers (nums, target ) {
    // checking if the array is empty and return undefined
    if (nums.length === 0){
        return undefined;
    }

    const numbers = new Map();

    // iterate throught the array
    for (let i = 0; i < nums.length; i++){
        const sum = target - nums[i];

        if(sum.has(numbers)){
            return [sum.get(numbers), i];
        }
        sum.set([i], i);
    }
}

const nums = [2,7,11,15];
const target = 9;
const result = intergers(nums, target);
console.log(result);

document.getElementById('twoSumForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nums = document.getElementById('nums').value.split(',').map(Number);
    const target = Number(document.getElementById('target').value);
    try {
        const result = intergers(nums, target);
        document.getElementById('result').innerText = `Indices: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = error.message;
    }
});