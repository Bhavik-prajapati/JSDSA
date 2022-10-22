function TOH(n, fromrod, torod, usingrod) {
  if (n == 1) {
    console.log(`Move disk 1 to from ${fromrod} to ${torod}`);
    return;
  }
  TOH(n - 1, fromrod, usingrod, torod);
  console.log(`Move disk ${n} from ${fromrod} to ${torod}`);
  TOH(n - 1, usingrod, torod, fromrod);
}

TOH(3, "A", "C", "B");
