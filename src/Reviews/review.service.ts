const rejecter = (reject) => (err) => {
	reject(err);
};

export const promiseHandlers = {
	rejecter,
};

export async function getAllGoogleRequest<T>(
	accountId: string,
	apiKey: string,
	locationId: string,
) {
	const response = fetch(
		`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`,
		{
			method: 'GET',
			headers: {
				authorization: `Bearer ${apiKey}`,
			},
		}
	)
	return (await response).json()
}

export async function getSpecificGoogleRequest<T>(
	accountId: string,
	apiKey: string,
	locationId: string,
	reviewId: string
) {
	const response = fetch(
			`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews/${reviewId}`,
			{
				method: 'GET',
				headers: {
					authorization: `Bearer ${apiKey}`,
				},
			}
	)
	return (await response).json()
}
export async function postGoogleReviewsSpecificLocationRequest<T>(
	accountId: string,
	apiKey: string,
	locationId: string,
	review: {
		"locationNames": [
			string
		],
		"pageSize": number,
		"pageToken": string,
		"orderBy": string,
		"ignoreRatingOnlyReviews": boolean
	}
) {
	const response = fetch(
		`https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations:batchGetReviews`,
			{
				method: 'POST',
				headers: {
					authorization: `Bearer ${apiKey}`,
				},
				body: review as any
			}
	)
	return (await response).json() as Promise<T>
}