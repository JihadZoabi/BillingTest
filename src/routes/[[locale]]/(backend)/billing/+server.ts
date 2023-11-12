export const POST = async ({ request }) => {
    console.log("just got post, trying to parse body");
    try {
        const requestBody = await request.json();
        console.log('works', requestBody);
		return new Response(JSON.stringify({ message: 'Works' }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
    } catch (error) {
        console.log('error', error);
		return new Response(JSON.stringify({ error: 'ERROR' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
    } finally {
        console.log('finally');
    }
};