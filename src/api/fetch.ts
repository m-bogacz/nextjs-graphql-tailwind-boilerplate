import { env } from "@/env";

type ExecuteRestApi<TBody = undefined> = {
	endpoint: string;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	body?: TBody;
	headers?: HeadersInit;
	cache?: RequestCache;
	next?: NextFetchRequestConfig | undefined;
};

export async function executeRestApi<TResult, TBody = undefined>({
	endpoint,
	// body,
	method = "GET",
	// cache,
	// next,
	// headers,
}: ExecuteRestApi<TBody>): Promise<TResult> {
	if (!env.YOUTRACK_URL) {
		throw TypeError("YOUTRACK_URL is not defined");
	}
	if (!env.YOUTRACK_TOKEN) {
		throw TypeError("YOUTRACK_TOKEN is not defined");
	}
	try {
		const res = await fetch(`${env.YOUTRACK_URL}/${endpoint}`, {
			method,
			// body: method !== "GET" && body ? JSON.stringify(body) : null,
			// cache,
			// next,
			headers: {
				// ...headers,
				Authorization: `Bearer ${env.YOUTRACK_TOKEN}`,
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			throw new TypeError(`REST API Error: ${res.statusText}`);
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return await res.json();
	} catch (err) {
		console.log(err);
		throw new TypeError("Failed to fetch issues");
	}
}
