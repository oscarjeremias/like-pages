import { NextSeo  } from "next-seo";

interface INextSeoPageTypes {
	title: string;
	description: string;
	url: string;
	image: string;
}

export function NextSeoPage({ title,description,url,image }: INextSeoPageTypes) {
	return (
		<NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url: url,
        title: title,
        description: description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: 'Logo do site LIKE PAGES',
            type: 'image/jpeg',
          },
        ],
        site_name: 'LIKE PAGES',
      }}
      twitter={{
        handle: '@LIKEPAGES',
        site: `@${url}`,
        cardType: "",
      }}
    />
	)
}
