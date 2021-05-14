import { Field, FieldArray, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CustomInputComponent = (props) => {
  console.log(props);
  return (
    <Form.Group className='mr-2'>
      <Form.Control {...props} />
    </Form.Group>
  )
};

const FriendsArray = () => (
	<div className="p-3 ml-3">
		<h1>Contact List</h1>
		<Formik
			initialValues={{
				contacts: [
					{
						name: 'Adi',
						number: '',
					},
          {
						name: 'Adi',
						number: '',
					},
				],
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ values, handleChange, handleSubmit }) => (
				<form>
					<FieldArray name="contacts">
						{({ insert, remove, push }) => (
							<div>
								{values.contacts.map((contact, index) => (
									<div className="row" key={index}>
										<Field
											name={`contacts.${index}.name`}
											placeholder="Enter Name"
											type="text"
											as={CustomInputComponent}
										/>
										<Field
											name={`contacts.${index}.number`}
											placeholder="Enter Number"
											type="text"
											as={CustomInputComponent}
										/>
                    {contact?.can_delete === true && <Button>Del</Button>}
									</div>
								))}
                <code className="d-block mb-1">Inside Field Array But Not Inside Map Function</code>
								<Button
									type="button"
									className="btn btn-danger mb-2"
									onClick={() => push({ name: '', number: '' })}
                  >
									Add Contact
								</Button>
                <Button
									type="button"
									className="btn btn-dark mb-2 ml-2"
									onClick={() => push({ name: '', number: '', can_delete: true })}
                  >
									Add With Delete Icon
								</Button>
							</div>
						)}
					</FieldArray>
					<pre>{JSON.stringify({ values }, 0, 2)}</pre>
				</form>
			)}
		</Formik>
	</div>
);

export default FriendsArray;
