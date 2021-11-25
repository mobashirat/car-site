import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/addProduct", {
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
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register("name", { required: true })}
                    placeholder="name" />

                <br /><br />
                <input
                    {...register("img", { required: true })}
                    placeholder="Product image link"
                />
                <br /><br />
                <input
                    {...register("price", { required: true })}
                    placeholder="price"
                />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="submit"
                    value="Add product" />

            </form>

        </div>
    );
};

export default AddProducts;