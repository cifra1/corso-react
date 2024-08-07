function CardItem({title, imgURL, isVisited, children}) {
    return(
        <div className="rounded-md bg-zinc-950 hover:scale-105 transition-all ease-linear cursor-pointer">
            <img src={imgURL} className="rounded-t-md" alt=""></img>
            <div>
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">{children}</p>
                {isVisited && <span className="text-green-600"> visitata</span>}
                {!isVisited && <span className="text-red-600"> non visitata</span>}
            </div>
        </div>
    );
}

export default CardItem;