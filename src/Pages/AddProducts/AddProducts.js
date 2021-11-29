import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://obscure-springs-61189.herokuapp.com/addProduct", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(data);
    }

    return (
        <div>
            <h3>Add your Product</h3>
            <form className="addproduct" onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register("name", { required: true })}
                    placeholder="name" />
                <br /><br />
                <input
                    {...register("describtion", { required: true })}
                    placeholder="describtion" />

                <br /><br />
                <input
                    {...register("img", { required: true })}
                    defaultValue="https://i.ibb.co/d2DQfDw/Toyotta-allion.png"
                />
                <br /><br />
                <input
                    {...register("price", { required: true })}
                    placeholder="price"
                />
                <br /><br />


                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="add" type="submit"
                    value="Add product" />

            </form>

        </div>
    );
};

export default AddProducts;