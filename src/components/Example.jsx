import { increment, decrement } from "../redux/counterSlice"
import { useSelector, useDispatch } from "react-redux";     //sono hook

function Example() {
    const count = useSelector((state) => state.counter.value);  //con il selector consumo un valore (da uno stato), cioe' lo leggo
    const dispatch = useDispatch(); //con il dispatch mando un ordine, voglio fare un'azione su uno stato

    return (
        <div>
            <p className="mb-3">Conteggio: {count}</p>      {/* leggo il valore dello state di nome counter */}
            <button 
                className="mr-3"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>      {/* chiamo una funzione fra quelle esportate da counterSlice */}
                    Incrementa +
            </button>
            <button 
                className="mr-3"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                    Decrementa -
            </button>
        </div>
    )
}

export default Example