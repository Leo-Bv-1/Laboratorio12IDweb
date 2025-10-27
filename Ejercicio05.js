function esMultiplo(a, b) {
  if (b === 0) {
    return false;
  }
  return a % b === 0;
}