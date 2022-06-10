/* https://www.lintcode.com/problem/14
*
* First Position of Target
*
* Description
* Given a sorted array (ascending order) and a target number,
* find the first index of this number in O(log n)O(logn) time complexity.
* If the target number does not exist in the array, return -1.
*/

const binarySearch = (nums, target) => {
    if (!nums || nums.length === 0) {
        return -1;
    }

    let start = 0;
    let end = nums.length - 1;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] === target) {
            end = mid;
        } else if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if (nums[start] === target) {
        return start;
    }

    if (nums[end] === target) {
        return end;
    }

    return -1;
}

