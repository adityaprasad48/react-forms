import { FieldArray, Formik } from 'formik';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ResourceArray = () => {
	return (
		<div>
			<Formik
				initialValues={{
					tagCollection: [
						{ id: uuidv4(), value: 'one', label: 'One' },
						{ id: uuidv4(), value: 'two', label: 'Two' },
						{ id: uuidv4(), value: 'three', label: 'Three' },
					],
					tags: [],
					text: '',
				}}
				onSubmit={(values) => console.log(values)}
				render={({ values, handleChange, setFieldValue }) => (
					<div>
						<FieldArray
							name="tags"
							render={(arrayHelpers) => (
								<div>
									{values.tagCollection.map((tag, index) => (
										<div key={tag.value} className="new-input-group">
											<input
												name={`${tag + index}`}
												id={`${tag + index}`}
												type="checkbox"
												value={tag.label}
												checked={values.tags.includes(tag.value)}
												onChange={(e) => {
													if (e.target.checked) {
														arrayHelpers.push(tag.value);
													} else {
														const idx = values.tags.indexOf(tag.value);
														arrayHelpers.remove(idx);
													}
												}}
											/>
											<label htmlFor={`${tag + index}`}>{tag.label}</label>
											{tag?.can_delete === true && (
												<button
													onClick={() => {
                            const idx = values.tags.indexOf(tag.value);
														arrayHelpers.remove(idx)
                              setFieldValue(
                                'tagCollection',
                               values.tagCollection.filter(
                                  (item) => item.id !== tag.id
                                ),
                              );
													}}
												>
													Del
												</button>
											)}
										</div>
									))}
								</div>
							)}
						/>
						<FieldArray
							name="tagCollection"
							render={(arrayHelpers) => (
								<div>
									<input
										type="text"
										name="text"
										value={values.text}
										onChange={handleChange}
									/>
									<button
										onClick={() => {
											arrayHelpers.push({
												id: uuidv4(),
												value: values.text,
												label: values.text,
												can_delete: true,
											});
											setFieldValue('text', '');
										}}
									>
										Add
									</button>
								</div>
							)}
						/>
					</div>
				)}
			/>
		</div>
	);
};

export default ResourceArray;
