/* A quick sort function example of a recursion (array sorting) */
function quickSort(arr) {
  if (!arr.length) return [];
  const beg = [];
  const end = [];
  const p = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > p) {
      end.push(arr[i]);
    } else {
      beg.push(arr[i]);
    }
  }

  return quickSort(beg).concat(p, quickSort(end));
}
