import './Form.css'
import React, { useState } from 'react';

function Form() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0){
			alert('Form submitted successfully!');
		} else {
			alert(`Form submission failed
			due to validation errors.`);
		}
	};

	const validateForm = (data) => {
		const errors = {};

		if (!data.username.trim()) {
			errors.username = 'Username is required';
		}

		if (!data.email.trim()) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(data.email)) {
			errors.email = 'Email is invalid';
		}

		if (!data.password) {
			errors.password = 'Password is required';
		} else if (data.password.length < 8) {
			errors.password = `Password must be at 
			least 8 characters long`;
		}

		if (data.confirmPassword !== data.password) {
			errors.confirmPassword = 'Passwords do not match';
		}

		return errors;
	};

	return (
		<div className="h-[90vh] w-[40%] bg-gray-200 ml-[30%] mt-[2%] flex flex-col gap-[2vh] rounded-xl border-2 border-[black] border-solid">
			<h2 className="text-[2.3vw] font-semibold text-center mt-[1.2vh]">Form Validation</h2>
			<form onSubmit={handleSubmit} className='flex flex-col gap-[1vh] pl-[15%]'>
				<div className='flex flex-col gap-[0.5vh]'>
					<label className="text-[1.3vw] font-medium mt-[0.5vh]">
						Username:
						</label>
					<input
						className="h-[7vh] w-[70%] outline-none rounded-lg pl-[1vw]"
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
					/>
					{errors.username &&
						<span className="error-message">
							{errors.username}
						</span>
					}
				</div>
				<div className='flex flex-col gap-[0.5vh]'>
					<label className="text-[1.3vw] font-medium mt-[0.5vh]">
						Email:
						</label>
					<input
						className="h-[7vh] w-[70%] outline-none rounded-lg pl-[1vw]"
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email &&
						<span className="error-message">
							{errors.email}
						</span>
					}
				</div>
				<div className='flex flex-col gap-[0.5vh]'>
					<label className="text-[1.3vw] font-medium mt-[0.5vh]">
						Password:
						</label>
					<input
						className="h-[7vh] w-[70%] outline-none rounded-lg pl-[1vw]"
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					{errors.password &&
						<span className="error-message">
							{errors.password}
						</span>
					}
				</div>
				<div className='flex flex-col gap-[0.5vh]'>
					<label className="text-[1.3vw] font-medium mt-[0.5vh]">
						Confirm Password:
					</label>
					<input
						className="h-[7vh] w-[70%] outline-none rounded-lg pl-[1vw]"
						type="password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
					/>
					{errors.confirmPassword &&
						<span className="error-message">
							{errors.confirmPassword}
						</span>
					}
				</div>
				<button className="h-[7vh] w-[10vw] mt-[2vh] bg-[#0d427a] duration-[0.5s] ease-in-out text-white rounded-lg hover:bg-[#3f79b6]"
					type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Form;
