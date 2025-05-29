import { SITES } from '$lib/data';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';

export const GET: RequestHandler = () => {
	const id = Math.floor(Math.random() * SITES.length);
	return redirect(307, SITES[id].url);
};
