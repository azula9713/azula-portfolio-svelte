const functions = require('firebase-functions');
const Parser = require('rss-parser');
const parser = new Parser({
	customFields: {
		item: ['cover_image']
	}
});

exports.fetchRSS = functions.https.onRequest(async (req, res) => {
	// Set CORS headers to allow requests from your Svelte app's domain

	// dev: http://localhost:5173
	// prod: https://yaepublishinghouse.online

	const allowedOrigins = ['http://localhost:5173', 'https://yaepublishinghouse.online'];

	const origin = req.headers.origin;

	if (allowedOrigins.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}

	res.set('Access-Control-Allow-Methods', 'GET');

	try {
		const feed = await parser.parseURL('https://blog.yaepublishinghouse.online/rss.xml');
		const feedItems = feed.items.map((item) => ({
			title: item.title,
			link: item.link,
			cover: item.cover_image,
			date: item.pubDate,
			description: item.contentSnippet || item.description
		}));
		res.status(200).json(feedItems);
	} catch (error) {
		console.error('Error fetching RSS feed:', error);
		res.status(500).send('Error fetching RSS feed');
	}
});
