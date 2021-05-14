import { Field, FieldArray, Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';

const CustomInputComponent = (props) => {
	console.log(props);
	return (
		<Form.Group className="mr-2">
			<Form.Control {...props} />
		</Form.Group>
	);
};

const MySpecialField = ({ field }) => {
	return (
		<label className="text-gray-500 font-bold">
			<input {...field} className="mr-2 leading-tight" type="checkbox" />
			<span className="text-sm">Accept Terms</span>
		</label>
	);
};


const ProductColorPicker = () => {
	return (
		<div>
			<Formik
				initialValues={{
					productTypes: [
						{
							label: 'One',
							checked: true,
							number: '',
						},
						{
							label: 'Two',
							checked: false,
							number: '',
						},
            {
							label: 'Three',
							checked: false,
							number: '',
						},
            {
							label: 'Four',
							checked: false,
							number: '',
						},
            {
							label: 'Five',
							checked: false,
							number: '',
						},
					],
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ values, handleChange, handleSubmit, setFieldValue }) => (
					<form>
						<FieldArray name="productTypes">
							{({ insert, remove, push }) => (
								<div className="m-3">
									{values.productTypes.map((contact, index) => (
										<div className="row" key={index}>
											<Field
												type="checkbox"
												name={`productTypes.${index}.checked`}
												id={`productTypes.${index}.checked`}
                        
											/>
											<label
												className="text-sm"
												htmlFor={`productTypes.${index}.checked`}
											>
												{contact.label}
											</label>

											<Field
												name={`productTypes.${index}.number`}
												placeholder="Enter Number"
												type="text"
												as={CustomInputComponent}
											/>
										</div>
									))}
									<code className="d-block mb-1">
										Inside Field Array But Not Inside Map Function
									</code>
								</div>
							)}
						</FieldArray>
						<pre>{JSON.stringify({ values }, 0, 2)}</pre>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default ProductColorPicker;
