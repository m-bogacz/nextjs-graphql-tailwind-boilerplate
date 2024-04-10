"use server";

import { env } from "@/env";

const params = `users/me`;
const query = `opt_fields=email,workspaces,name,workspaces.name`;

type GetUserAsanaResponse = {
	data: {
		gid: string;
		email: string;
		name: string;
		photo: null;
		workspaces: {
			gid: string;
			name: string;
		}[];
	};
};

export const getUserAsana = async () => {
	const res = await fetch(`${env.ASANA_URL}${params}?${query}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${env.ASANA_PERSONAL_ACCESS_TOKEN}`,
			"Content-Type": "application/json",
		},
		cache: "no-cache",
	});

	if (!res.ok) {
		console.log(res);
		throw new Error(`Failed to fetch issues: ${res.status}`);
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const data = await res.json();

	console.log(data);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return data as GetUserAsanaResponse;
};
