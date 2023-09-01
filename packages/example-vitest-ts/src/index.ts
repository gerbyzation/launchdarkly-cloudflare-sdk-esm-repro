import "setimmediate";
import { init } from "@launchdarkly/cloudflare-server-sdk";

export type Bindings = {
	LD_KV: KVNamespace<string>;
	LD_CLIENT_SIDE_ID: string;
};

export default {
	async fetch(request: Request, env: Bindings): Promise<Response> {
		const ldClient = init(env.LD_CLIENT_SIDE_ID, env.LD_KV);
		await ldClient.waitForInitialization();

		const response = new Response("there it is");
		return response;

	},
};
