const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i = i + 1;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i = i + 1;
  let temp = arr[i];
  arr[i] = pivot;
  arr[high] = temp;
  return i;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
};

export default quickSort;
