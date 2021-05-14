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

const Discount = () => {
	console.log('Discount');
	return (
		<div>
			<div className="p-3 ml-3">
				<h1>Discount List</h1>
				<Formik
					initialValues={{
						discounts: [
							{
								resource_size: [],
								resource_type: [],
								start_date: '',
								end_date: '',
								days: [],
								start_time: '',
								end_time: '',
							},
						],
					}}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{({ values, handleChange, handleSubmit }) => (
						<form>
							<FieldArray name="discounts">
								{({ insert, remove, push }) => (
									<div>
										{values.discounts.map((discount, index) => (
											<div className="row" key={index}>
												{/* Resource Size Checkboxs */}
												<div className="checkbox-wrapper">
													<Field
														name={`discounts.${index}.resource_size`}
														id={`discounts.${index}.resource_size`}
														type="checkbox"
                            value="11v11"
													/>
													<label
														htmlFor={`discounts.${index}.resource_size`}
														className="checkbox_label_wrapper"
													>
														11v11
													</label>
												</div>

												<div className="checkbox-wrapper">
													<Field
														name={`discounts.${index}.resource_size`}
														id={`discounts.${index}.resource_size`}
														type="checkbox"
                            value="10v10"
													/>
													<label
														htmlFor={`discounts.${index}.resource_size`}
														className="checkbox_label_wrapper"
													>
														10v10
													</label>
												</div>

												<div className="checkbox-wrapper">
													<Field
														name={`discounts.${index}.resource_size`}
														id={`discounts.${index}.resource_size`}
														type="checkbox"
                            value="9v9"

													/>
													<label
														htmlFor={`discounts.${index}.resource_size`}
														className="checkbox_label_wrapper"
													>
														9v9
													</label>
												</div>

												{/* Resource Type Checkboxs */}
												<Field
													name={`discounts.${index}.start_date`}
													placeholder="Start date"
													type="text"
													as={CustomInputComponent}
												/>
												<Field
													name={`discounts.${index}.end_date`}
													placeholder="End date"
													type="text"
													as={CustomInputComponent}
												/>
												{/* Days Checkboxs */}
												<Field
													name={`discounts.${index}.start_time`}
													placeholder="Start time"
													type="text"
													as={CustomInputComponent}
												/>
												<Field
													name={`discounts.${index}.end_time`}
													placeholder="End time"
													type="text"
													as={CustomInputComponent}
												/>
                   
											</div>
										))}
                  
										<code className="d-block mb-1">
											Inside Field Array But Not Inside Map Function
										</code>
										<Button
											type="button"
											className="btn btn-danger mb-2"
											onClick={() =>
												push({
													resource_size: [],
													resource_type: [],
													start_date: '',
													end_date: '',
													days: [],
													start_time: '',
													end_time: '',
												})
											}
										>
											Add More
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

export default Discount;
