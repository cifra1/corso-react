import { useEffect } from "react";

/**
 * Esempio di custom hook.
 * Crea un numero casuale ogni secondo e lo stampa sulla console.
 */
function useCounterProva() {
    useEffect(() => {
        const intervalID = setInterval(() => {
            const randomNumber = Math.floor(Math.random()*100)
            console.log(randomNumber)
        }, 1000);

        return() => {
            clearInterval(intervalID)   //all'uscita dal componente interrompe il counter
        }
    }, []);
}

export default useCounterProva;