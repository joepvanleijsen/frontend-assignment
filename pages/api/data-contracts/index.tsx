import type { NextApiRequest, NextApiResponse } from 'next';

const data = [
	{ name: 'shop_data_contract/1.0.0', visibility: 'public', status: 'approved', created: '6 hours ago' },
	{ name: 'shop_data_contract/1.0.1', visibility: 'public', status: 'draft', created: '2 days ago' },
	{ name: 'name_of_contract/1.0.2', visibility: 'public', status: 'draft', created: '2 days ago' },
	{ name: 'untitled_contract_435/1.0.0', visibility: 'private', status: 'draft', created: '1 week ago' },
	{ name: 'name_of_contract/2.1.4', visibility: 'private', status: 'active', created: '2 Apr, 2022' },
	{ name: 'name_of_contract/1.0.0', visibility: 'public', status: 'active', created: '2 Apr, 2022' },
	{ name: 'name_of_contract/1.0.1', visibility: 'public', status: 'active', created: '2 Apr, 2022' },
	{ name: 'name_of_contract/1.0.2', visibility: 'public', status: 'active', created: '2 Apr, 2022' },
	{ name: 'untitled_contract_435/1.0.0', visibility: 'private', status: 'approved', created: '2 Apr, 2022' },
	{ name: 'untitled_contract_436/1.1.1', visibility: 'private', status: 'active', created: '2 Apr, 2022' },
	{ name: 'untitled_contract_437/1.2.2', visibility: 'private', status: 'active', created: '2 Apr, 2022' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// console.log('/api/data-contracts');

	// NOTE: you can set a 'query' property on the body of the request to filter your search
	const {
		body: { query },
	} = req;

	// NOTE: You can adjust the 80% probability of returning 'valid' data by lowering the '0.8' value on the next line
	// For testing purposes, you can set this value to 'true' (boolean) to make sure the response is succesful (statuscode 200)
	// Set this value to 'false' (boolean) to always get an 503 error
	const isValidRequest = query ? true : Math.random() < 0.9;

	const searchResultsData = data.filter((dataContract) => {
		return dataContract.name.includes(query);
	});

	// NOTE: for testing purposes: set this value to 'true' (boolean) to have results in your (successful) request, and to 'false' (boolean) to get an empty array
	const hasResults = Math.random() < 0.8;
	let statusCode;
	let returnObject;

	if (isValidRequest) {
		statusCode = 200;

		returnObject = {
			statusCode: statusCode,
			data: query ? searchResultsData : hasResults ? data : [],
		};
	} else {
		statusCode = 503;
		const message = 'An error occured on the server';

		returnObject = {
			statusCode,
			message,
		};
	}

	res.status(statusCode).json(returnObject);
}
