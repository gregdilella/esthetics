import { DATABASE_URL } from '$env/static/private';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	return {
		deploymentGitBranch: DATABASE_URL
	};
};