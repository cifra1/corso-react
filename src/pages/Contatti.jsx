import NavBar from "../components/NavBar";
import useCounterProva from "../hooks/useCounterProva";

function Contatti() {
    useCounterProva();  //custom hook

    return (
        <>
        <NavBar></NavBar>
        <h1 className="text-3xl font-bold">Pagina Contatti</h1>
        </>
    )
}

export default Contatti;