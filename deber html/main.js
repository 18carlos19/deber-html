function calcularEstadisticasEdades(edades) {
        // Calcular promedio general
        const promedioGeneral = calcularPromedio(edades);
    
        // Filtrar edades mayores o iguales a 18
        const mayoresIgual18 = edades.filter(edad => edad >= 18);
        const cantMayorIgual18 = mayoresIgual18.length;
        const promedioMayorIgual18 = cantMayorIgual18 > 0 ? calcularPromedio(mayoresIgual18) : 0;
    
        // Filtrar edades menores a 18
        const menores18 = edades.filter(edad => edad < 18);
        const cantMenor18 = menores18.length;
        const promedioMenor18 = cantMenor18 > 0 ? calcularPromedio(menores18) : 0;
    
        // Devolver resultados
        return {
            promedioGeneral,
            cantMayorIgual18,
            promedioMayorIgual18,
            cantMenor18,
            promedioMenor18
        };
    }

    function calcularPromedio(arr) {
        const sum = arr.reduce((acc, edad) => acc + edad, 0);
        return arr.length > 0 ? sum / arr.length : 0;
    }
    
    // Ejemplo de uso
    const edades = [20, 17, 20, 23];
    const estadisticas = calcularEstadisticasEdades(edades);
    
    console.log("Promedio General:", estadisticas.promedioGeneral);
    console.log("Cantidad y Promedio Mayor o Igual a 18:", estadisticas.cantMayorIgual18, estadisticas.promedioMayorIgual18);
    console.log("Cantidad y Promedio Menor a 18:", estadisticas.cantMenor18, estadisticas.promedioMenor18);



  
