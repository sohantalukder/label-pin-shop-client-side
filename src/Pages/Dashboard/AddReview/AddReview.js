import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css';
const AddReview = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);

		axios
			.post('https:/frozen-crag-17113.herokuapp.com/reviews', data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Added Successfully!!');
				}
				reset();
			});
	};
	return (
		<div className="add-service">
			<h2 style={{ color: 'gray' }}>Add New Review</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('name', { required: true, maxLength: 20 })}
					placeholder="Name"
				/>
				<input
					{...register('email', { required: true, maxLength: 20 })}
					placeholder="Email"
				/>
				<textarea {...register('about')} placeholder="About" />
				<input {...register('picture')} placeholder="Img Url" />
				<input type="submit" />
			</form>
		</div>
	);
};

export default AddReview;
