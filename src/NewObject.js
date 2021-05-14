import React from 'react';

const NewObject = () => {

	const subresources = [
		{
			id: "1",
			name: "11v11",
			size: "3",
		},
		{
			id: "2",
			name: "10v10",
			size: "4",
		},
		{
			id: "2",
			name: "7v7",
			size: "4",
		},
	];


  const returnObject = () => {
		const result = {};

		subresources.map((item) => {
			const numberSize = item.name.substring(item.name.indexOf('v') + 1);
			result[`${item.name}_resources`] = genrateArray(numberSize);
      return []
		});

		return result;
	};

	const genrateArray = (size) => {
		const names = [];

		for (var i = 0; i < size - 1; i++) {
			names[i] = {
				name: `${size - i - 1}v${size - i - 1}`,
				val: '',
			};
		}

		return names;
	};

  console.log(returnObject());




  return (
    <div>
      
    </div>
  )
}

export default NewObject
