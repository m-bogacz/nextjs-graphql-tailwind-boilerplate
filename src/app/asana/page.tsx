import { getUserAsana } from "@/services/asana/user";

export default async function Asana() {
	const user = await getUserAsana();

	console.log(user);
	return (
		<main className="flex flex-col items-center justify-center">
			<section>
				user: <span className="ml-2 text-lg font-bold text-slate-700">{user.data.name}</span>
			</section>
			<section>
				workspaces:
				{user.data.workspaces.map((item) => (
					<span className="ml-2 text-lg font-bold text-slate-700" key={item.name}>
						{item.name}
					</span>
				))}
			</section>
		</main>
	);
}
