function prime(n) {
  flag = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
