import { useState } from "react"

function AddItem(props){
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")
 
    const addItemButtonPressed = () => {
        props.addItem({
            name: name, 
            price: price, 
            type: type, 
            brand: brand
        })

        setName("")
        setPrice(0)
        setType("")
        setBrand("")
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Add an Item</h2>
            </div>
            <form>
                <div className="row">
                    <div className="col">
                        <label htmlFor="name-field">Name: </label>
                        <input id="name-field" className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="price-field">Max Price: </label>
                        <input id="price-field" className="form-control" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="type-field">Type: </label>
                        <input id="type-field" className="form-control" type="text" value={type} onChange={(e) => setType(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="brand-field">Brand: </label>
                        <input id="brand-field" className="form-control" type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-3"></div>
                    <button type="button" className="col-6 btn btn-primary" onClick={addItemButtonPressed}>Add Item</button>
                </div>
            </form>
        </div>
    )
}

export default AddItem