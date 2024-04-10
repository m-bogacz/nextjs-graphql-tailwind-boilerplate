/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { env } from "@/env";

type Issue = {
	summary: string;
	id: string;
	$type: string;
	tags: string[];
};

export async function fetchIssues() {
	const res = await fetch(
		env.YOUTRACK_URL +
			"/api/issues?fields=id,summary,description,project(shortName),created,updated,reporter(name),assignee(name),tags(name),customFields(name,value)",
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${env.YOUTRACK_TOKEN}`,
				"Content-Type": "application/json",
			},
			cache: "no-cache",
		},
	);
	if (!res.ok) {
		console.log(res);
		throw new Error(`Failed to fetch issues: ${res.status}`);
	}

	const data = await res.json();

	console.log(data);

	return data as Issue[];
}
