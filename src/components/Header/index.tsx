import Image from "next/image";
import { UserCircle } from "phosphor-react";

interface IHeaderPropsType {
	url_image: string;
}

export function Header({ url_image}: IHeaderPropsType) {
	return (
		<header
			className="w-full h-[10%] p-3 flex justify-between items-center">
			<Image src={url_image} width={100} height={25} alt="Logo do site LIKE PAGES"/>
			<UserCircle size={32} className="text-blue-900 full hover:bg-blue-400 hover:rounded-full hover:text-gray-100 hover:p-1 transition-300"/>
		</header>
	)
}
