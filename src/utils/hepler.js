export const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;

  const isPrime = (numToCheck) => {
    let j = 1,
      p = primes[j];
    let limit = Math.ceil(Math.sqrt(numToCheck));
    while (p <= limit) {
      if (numToCheck % p === 0) {
        return false;
      }
      j += 1;
      p = primes[j];
    }
    return true;
  };

  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};
