import NavBar from "../components/NavBar";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

function CardsChildren() {
    const cities = useSelector((state) => state.cities.value);

    //console.log(cities);

    return (
        <>
            <NavBar></NavBar>
            <h1 className="text-3xl font-bold mb-10">Pagina CardsChildren</h1>
            <div className="grid grid-cols-4 gap-5">
                {cities.map((city) => (
                    <Link to={`/cards-children/${city.id}`} key={city.id}>
                        <CardItem
                            title={city.name}
                            isVisited={city.isVisited}
                            imgURL={city.imgURL}>
                            {city.description}
                        </CardItem>
                    </Link>
            ))}
            </div>
            <Outlet/>   {/* visualizza un componente se c'è*/}
        </>
    )
}

export default CardsChildren;