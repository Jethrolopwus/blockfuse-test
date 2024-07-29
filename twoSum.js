function intergers(nums, target) {
    // checking if the array is empty and return undefined
    if (nums.length === 0) {
        return undefined;
    }

    const numbers = new Map();

    // iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numbers.has(complement)) {
            return [numbers.get(complement), i];
        }
        numbers.set(nums[i], i);
    }
    
    // In case there is no solution, though the problem states there will be one
    throw new Error('No two sum solution');
}

const nums = [2, 7, 11, 15];
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