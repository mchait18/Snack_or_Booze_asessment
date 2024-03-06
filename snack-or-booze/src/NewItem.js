import React, { useState } from "react";
import "./Form.css"
import { Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, ListGroup, ListGroupItem } from "reactstrap";
import "./FoodMenu.css";

function NewItem({ addItem }) {
    const INITIAL_STATE = {
        name: '',
        description: "",
        recipe: '',
        serve: "",
        type: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formComplete, setFormComplete] = useState(false)
    const [url, setUrl] = useState("/")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...formData });
        setFormData(INITIAL_STATE)
        //set form as complete and set url to snacks or drinks
        setFormComplete(true)
        setUrl(`/${formData.type}`)
    }
    //if form is submitted, redirect to either snacks or drinks page. Otherwise, load form
    return (
        <section>
            {formComplete && <Redirect to={url} />}
            <Card>
                <CardBody>
                    <CardTitle className="font-weight-bold text-center">
                        Add a New Snack or Drink
                    </CardTitle>
                    <ListGroup>
                        <form onSubmit={handleSubmit}>
                            <ListGroupItem>
                                <fieldset>
                                    <div>
                                        <input
                                            id="snack"
                                            type="radio"
                                            name="type"
                                            value="snacks"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="snack">Snack</label>
                                    </div>
                                    <div>
                                        <input
                                            id="drink"
                                            type="radio"
                                            name="type"
                                            value="drinks"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="drink">Drink</label>
                                    </div>
                                </fieldset>
                            </ListGroupItem>
                            <ListGroupItem>
                                <label htmlFor="name">Name: </label>
                                <input
                                    style={{ width: "310px" }}
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </ListGroupItem>
                            <ListGroupItem>
                                <label htmlFor="name">Description: </label>
                                <input
                                    style={{ width: "265px" }}
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </ListGroupItem>
                            <ListGroupItem>
                                <label htmlFor="val">Recipe: </label>
                                <textarea
                                    cols="38"
                                    id="recipe"
                                    name="recipe"
                                    value={formData.recipe}
                                    onChange={handleChange}
                                />
                            </ListGroupItem>
                            <ListGroupItem>
                                <label htmlFor="val">Serve: </label>
                                <input
                                    style={{ width: "310px" }}
                                    id="serve"
                                    type="text"
                                    name="serve"
                                    value={formData.serve}
                                    onChange={handleChange}
                                />
                            </ListGroupItem>
                            <button>Add Item</button>
                        </form >
                    </ListGroup>
                </CardBody>
            </Card>
        </section>
    )
}

export default NewItem