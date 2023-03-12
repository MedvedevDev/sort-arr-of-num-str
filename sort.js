/** Trying to sort an array which contains strings, numbers, and numbers as strings (ex. ‘1’,’2′).
 * To sort this array so that the sorted array contains numbers first and then strings that contain a number and then finally strings.
 * var arr = [9,5,’2′,’ab’,’3′,-1 ] // to be sorted
 * arr.sort()
 * // arr = [-1, 5, 9, “2”, “3”,”ab”] // expected result
 * //arr = [-1, “2”, 5, 9, “ab”] // actual result
 */

let arr = [9,5,'2','ab','3',-1 ]; // To be sorted

{
    // Solution 1: Using Sort and Concatinate
    let nums = [];
    let not_nums = [];
    arr.forEach(item => {
        if (typeof item === 'number') nums.push(item)
        else not_nums.push(item);
    });

    let sorted = nums.sort().concat(not_nums.sort());
    console.log(sorted); // [ -1, 5, 9, '2', '3', 'ab' ]
}
{
    // Solution 2: Using Filter
    const nums = arr.filter(item => typeof item === 'number').sort();
    const not_nums = arr.filter(item => typeof item !== 'number').sort();

    const sorted = [...nums, ...not_nums];
    console.log(sorted); // [ -1, 5, 9, '2', '3', 'ab' ]
}
{
    // Solution 3: Differentiating number, numeric and alphabet
    const nums = arr.filter(item => typeof item === 'number');
    const numerics = arr.filter(item => typeof item === 'string' && !isNaN(item));
    const strings = arr.filter(item => typeof item === 'string' && isNaN(item));

    nums.sort();
    numerics.sort();
    strings.sort();

    const sorted = [].concat(nums, numerics, strings);
    console.log(sorted); // [ -1, 5, 9, '2', '3', 'ab' ]
}
{
    // Solution 4 : Shortest Way
    const sorted = arr.sort((a, b) => ((typeof b === 'number') - (typeof a === 'number')) || (a > b ? 1 : -1));
    console.log(sorted); // [ -1, 5, 9, '2', '3', 'ab' ]
}