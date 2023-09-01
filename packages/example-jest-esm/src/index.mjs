import "setimmediate";
import { init } from "@launchdarkly/cloudflare-server-sdk";

export default {
	async fetch(request, env) {
		const ldClient = init(env.LD_CLIENT_SIDE_ID, env.LD_KV);
		await ldClient.waitForInitialization();

		const response = new Response("there it is");
		return response;

	},
};
