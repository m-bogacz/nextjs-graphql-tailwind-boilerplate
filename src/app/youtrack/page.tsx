import { fetchIssues } from "@/services/youtrack/api";

export default async function Youtrack() {
	const data = await fetchIssues();

	if (!data) {
		return <div>loading...</div>;
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ul>
				{data.map((issue) => {
					return (
						<li key={issue.id} className="flex gap-5 text-left">
							<div className="">{issue.id}</div>
							<div className="">{issue.$type}</div>
							<div className="">{issue.summary}</div>
							<div className="">{JSON.stringify(issue.tags)}</div>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
