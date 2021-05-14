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

const SubResources = () => {
	return (
		<div>
			<Formik
				initialValues={{
					resources_4v4: [
						{ name: '3v3', val: '' },
						{ name: '2v2', val: '' },
						{ name: '1v1', val: '' },
					],
					resources_5v5: [
						{ name: '4v4', val: '' },
						{ name: '3v3', val: '' },
						{ name: '2v2', val: '' },
						{ name: '1v1', val: '' },
					],
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ values }) => (
					<form>
						<FieldArray name="resources_4v4">
							{(arrayHelpers) => (
								<div className="m-2">
									{values.resources_4v4.map((friend, index) => (
										<div key={index} className="w-25 d-flex align-items-center">
											<label className="mb-3 mr-2">New</label>
											<Field
												name={`resources_4v4.${index}.val`}
												component={CustomInputComponent}
											/>
										</div>
									))}
								</div>
							)}
						</FieldArray>
						<pre>{JSON.stringify({ values }, 0, 2)}</pre>

						{/* <h1>Resource Different</h1>
            <FieldArray name="resources_5v5">
							{(arrayHelpers) => (
								<div className="m-2">
									{values.resources_5v5.map((friend, index) => (
										<div key={index} className="w-25 d-flex align-items-center">
											<label className="mb-3 mr-2">New</label>
											<Field
												name={`resources_5v5.${index}.val`}
												component={CustomInputComponent}
											/>
										</div>
									))}
								</div>
							)}
						</FieldArray>

						<pre>{JSON.stringify({ values }, 0, 2)}</pre> */}
					</form>
				)}
			</Formik>
		</div>
	);
};

export default SubResources;
