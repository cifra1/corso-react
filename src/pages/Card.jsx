import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Card() {
    const { cardId } = useParams(); //legge il parametro di nome cardId
    console.log(cardId);

    const cities = useSelector((state) =>
        state.cities.value.filter((city) => city.id == cardId.toString())
    );
    /* oppure
    const city = useSelector((state) =>
        state.cities.value.filter((city) => city.id == cardId.toString())[0]
    );
    console.log(city);*/

//    console.log(cities);
    
    return (
        <>
            <NavBar></NavBar>
            <h1 className="text-3xl font-bold">{cities[0].title}</h1>
            <div className="flex flex-col p-4">
                {cities[0].isVisited && (
                    <span className="text-green-600">  visitata</span>
                )}
                {!cities[0].isVisited && (
                    <span className="text-red-600"> non visitata</span>
                )}
            </div>
            <img
                /* scr={cities[0].imgURL}*/
                scr="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D"
                className="rounded-t-md"
                alt={cities[0].title}
                width="400">
            </img>
            </>
    )
}

export default Card;