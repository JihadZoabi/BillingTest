import process from 'process';

process.on('SIGINT', function () {
	process.exit();
});

process.on('SIGTERM', function () {
	process.exit();
});

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);
	return response;
}
