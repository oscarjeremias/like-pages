import Head from "next/head";

interface IHeadPageTypes {
	title: string;
	description: string;
	tags: string;
}

export function HeadPage({ title,description,tags}: IHeadPageTypes) {
	return (
		<Head>
			<meta name="description" content={description}/>
			<meta name="keywords" content={tags} />
			<title>{title}</title>

		</Head>
	)
}
