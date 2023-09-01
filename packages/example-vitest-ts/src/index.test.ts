import { describe, expect, it } from "vitest";

import app from "./index";

describe("handleRequest", () => {
	it("tests things", () => {
		expect(1).toEqual(1);
	});

	it("should respond with there it is", async () => {
		const env = getMiniflareBindings()
		const { LD_KV } = env
		await LD_KV.put('LD-Env-test-sdk-key', JSON.stringify({}));
		const response = await app.fetch(new Request("http://localhost"), env);
		const data = await response.text();

		expect(data).toEqual("there it is");
	});
});
