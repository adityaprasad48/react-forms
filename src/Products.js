import { Field, FieldArray, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CustomInputComponent = (props) => {
	console.log(props);
	return (
		<Form.Group className="mr-2">
			<Form.Control {...props} />
		</Form.Group>
	);
};

const Products = () => {
	console.log('Discount');
	return (
		<div>
			<div className="p-3 ml-3">
				<h1>Product List</h1>
				<Formik
					initialValues={{
						hourly_products: [
							{
								product: '',
								amount: '',
							},
							{
								product: '',
								amount: '',
							},
						],
						unit_products: [
							{
								product: '',
								amount: '',
							},
							{
								product: '',
								amount: '',
							},
						],
					}}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{({ values, handleChange, handleSubmit }) => (
						<form>
							<FieldArray name="hourly_products">
								{({ insert, remove, push }) => (
									<div>
										<div>
                    {values.hourly_products.map((hourly_product, index) => (
											<div className="row" key={index}>
												<Field
													name={`hourly_products.${index}.product`}
													placeholder="Knocker Ball"
													type="text"
													as={CustomInputComponent}
												/>
												<Field
													name={`hourly_products.${index}.amount`}
													placeholder="Amount"
													type="text"
													as={CustomInputComponent}
												/>
                     
											</div>
										))}
                    </div>
                    <div>
                    {
                        values.hourly_products.length > 1 && 	<Button
                        type="button"
                        className="btn btn-danger mb-2"
                        onClick={() =>
                          push({
                            product: '',
                            amount: '',
                          })
                        }
                      >
                        +
                      </Button>
                      }
                    </div>
									
									</div>
								)}
							</FieldArray>
							<FieldArray name="unit_products">
								{({ insert, remove, push }) => (
									<div>
										{values.unit_products.map((unit_product, index) => (
											<div className="row" key={index}>
												<Field
													name={`unit_products.${index}.product`}
													placeholder="Hot Dog"
													type="text"
													as={CustomInputComponent}
												/>
												<Field
													name={`unit_products.${index}.amount`}
													placeholder="Amount"
													type="text"
													as={CustomInputComponent}
												/>
											</div>
										))}
										<Button
											type="button"
											className="btn btn-danger mb-2"
											onClick={() =>
												push({
													product: '',
													amount: '',
												})
											}
										>
											+
										</Button>
									</div>
								)}
							</FieldArray>
							<pre>{JSON.stringify({ values }, 0, 2)}</pre>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Products;
