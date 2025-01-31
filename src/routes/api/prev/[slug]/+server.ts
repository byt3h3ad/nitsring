import { SITES } from '$lib/data';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ params }) => {
	const { slug } = params;
	const id = Number(slug);
	const length = SITES.length;
	if (isNaN(id) || !Number.isInteger(id) || id < 1 || id > length) {
		return error(400, 'Not a valid ID');
	}
	if (id === 1) {
		return redirect(307, SITES[length - 1].url);
	}
	return redirect(307, SITES[id - 2].url);
};
