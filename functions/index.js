/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
const doh = 'https://security.cloudflare-dns.com/dns-query'
const dohjson = 'https://security.cloudflare-dns.com/dns-query'
const contype = 'application/dns-message'
const jstontype = 'application/dns-json'

export default {
	async fetch(request, env, ctx) {
        const { headers } = request.headers
 		 if (headers.get('content-type')===contype) {
        	return fetch(doh, {
            	method: 'POST',
            	headers: headers,
            	body: request.body,
        	});
        } else {
        	return new Response("", {status: 404})
    	}
	}
  };
  
  
