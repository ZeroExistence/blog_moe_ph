import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV, API_ENDPOINT, API_PROTOCOL } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => {
				let apiEndpoint
				if (API_ENDPOINT.startsWith('http')) {
					apiEndpoint = API_ENDPOINT
				}
				else {
					apiEndpoint = [API_PROTOCOL, '://', req.headers.host, API_ENDPOINT].join('')
				}
				return ({
					apiEndpoint: apiEndpoint,
				})
			}
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
