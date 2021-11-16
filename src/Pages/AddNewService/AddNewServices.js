import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css';
const AddNewServices = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);

		axios
			.post('https:/frozen-crag-17113.herokuapp.com/products', data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Added Successfully!!');
				}
				reset();
			});
	};
	return (
		<div className="add-service">
			<h2>New Services</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', { required: true, maxLength: 20 })}
					placeholder="Name"
				/>
				<textarea {...register('address')} placeholder="Address" />
				<input type="number" {...register('price')} placeholder="Price" />
				<input {...register('img')} placeholder="Img Url" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default AddNewServices;
