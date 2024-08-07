import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/citiesSlice.js'

function CardForm({addCity}) {
    //in questo componente non leggo lo stato, lo modifico solo (add) quindi uso solo useDispatch
    const dispatch = useDispatch();
    
    //creao uno stato per la gestione del form
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        imgURL: "",
        isVisited: false
    })

    //si puo' fare anche una handle per ogni input
    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target
        const inputValue = type == "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();     //necessario perche' e' un submit, se fosse un button non serviva
        //compilo con lo stato del form
        const city = {
            id: Math.random(),
            title: formData.name,
            description: formData.description,
            imgURL: formData.imgURL,            //https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3lkbmV5fGVufDB8fDB8fHww
            isVisited: formData.isVisited
          };
          //pulisco il form
          setFormData({
            name: "",
            description: "",
            imgURL: "",
            isVisited: false
          })
          //Aggiungo il nuovo form
          dispatch(add(city))   //chiamo la funzione add di citiesSlice
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-300 p-5 roundend-lg">
            <div className="flex flex-col">
                <label>Nome</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col">
                <label>Descrizione</label>
                <textarea name="description"  value={formData.description} onChange={handleInputChange}></textarea>
            </div>
            <div className="flex flex-col">
                <label>Immagine</label>
                <input type="text" name="imgURL"  value={formData.imgURL} onChange={handleInputChange}></input>
            </div>
            <div className="flex flex-col">
                <label>Visitata?</label>
                <input type="checkbox" name="isVisited"  checked={formData.isVisited} onChange={handleInputChange}></input>
            </div>
            <button className="bg-zinc-100" type="submit">Aggiungi Card</button>
        </form>
    )
}

export default CardForm;