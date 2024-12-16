// Función para generar todos los números primos menores que n
function obtenerPrimos(n) {
    /**
     * Genera todos los números primos menores que un número dado n.
     * @param {number} n - Número límite hasta el cual se buscarán los números primos.
     * @returns {Array<number>} - Un array con los números primos menores que n.
     */
  
    // Si n es menor o igual a 2, no hay números primos menores que n
    if (n <= 2) return [];
  
    // Array para almacenar los números primos
    const primos = [];
  
    // Función para verificar si un número es primo
    function esPrimo(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    // Iterar desde 2 hasta n-1 para encontrar números primos
    for (let i = 2; i < n; i++) {
      if (esPrimo(i)) primos.push(i);
    }
  
    return primos;
  }
  
  // Ejemplo de uso
  console.log(obtenerPrimos(10)); // Salida: [2, 3, 5, 7]
  
  