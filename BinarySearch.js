function binarySearch(arr, s, e, k) {
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    //  console.log(mid);
    if (arr[mid] == k) {
      return mid;
    }
    if (arr[mid] < k) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
}
