import { isEqual } from 'lodash';
const tests = [
  { nums: [2, 7, 11, 15], target: 9, result: [0, 1] },
  { nums: [3, 2, 4], target: 6, result: [1, 2] },
  { nums: [3, 3], target: 6, result: [0, 1] },
];

export default function checkTwoSum(twoSum) {
  return tests.every(({ nums, target, result }) => isEqual(twoSum(nums, target), result));
}
