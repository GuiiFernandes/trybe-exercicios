function rotLeft(array, rotations) {
  const nums = array.splice(0, rotations);
  return array.concat(nums);
}

console.log(rotLeft([1, 2, 3, 4, 5], 2));