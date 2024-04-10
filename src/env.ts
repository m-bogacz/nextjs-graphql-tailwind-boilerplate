import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		YOUTRACK_URL: z.string().url(),
		YOUTRACK_TOKEN: z.string().min(1),

		ASANA_URL: z.string().url(),
		ASANA_PERSONAL_ACCESS_TOKEN: z.string().min(1),

		AUTH0_SECRET: z.string().min(1),
		AUTH0_BASE_URL: z.string().url(),
		AUTH0_ISSUER_BASE_URL: z.string().url(),
		AUTH0_CLIENT_ID: z.string().min(1),
		AUTH0_CLIENT_SECRET: z.string().min(1),
	},

	client: {},

	runtimeEnv: {
		YOUTRACK_TOKEN: process.env.YOUTRACK_TOKEN,
		YOUTRACK_URL: process.env.YOUTRACK_URL,

		//Asana
		ASANA_URL: process.env.ASANA_URL,
		ASANA_PERSONAL_ACCESS_TOKEN: process.env.ASANA_PERSONAL_ACCESS_TOKEN,

		// 0auth
		AUTH0_SECRET: process.env.AUTH0_SECRET,
		AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
		AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
		AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
		AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
	},
});
