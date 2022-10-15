import Image from "next/image";
import { SvgBlod } from "./svg";
import { WhatsappLogo,LinkedinLogo } from "phosphor-react";

interface IMainPropsType {
	frist_text: string;
	secund_text: string;
	text_logo: string;
	image_frist: string;
	frist_button_text: string;
	response_secund_text: string;
	services: any
}

export function Main({ 
	frist_text, 
	secund_text,
	text_logo,
	image_frist,
	frist_button_text,
	response_secund_text,
	services
}: IMainPropsType) {
	return (
		<main className="min-h[80vh] p-3">
			<section>
				<p className="text-blue-900 text-3xl w-[85%]">
					{text_logo} {frist_text}
				</p>
				<div className="flex justify-between items-center">
			<button 
				className="flex-none w-[175px] h-[50px]  my-6 px-6 py-2 text-gray-100 bg-blue-400 rounded  hover:border hover:border-blue-400 hover:text-blue-900 hover:bg-white transition-300">
				{frist_button_text}
			</button>
				<div className="flex-none my-2">
				<Image 
				src={image_frist} 
				width={150} 
				height={150} />
			</div>
			</div>
			</section>
			<section className="py-3">
				<p className="text-blue-900 text-2xl w-[85%]">
					{secund_text}
				</p>
				<p className="text-blue-900 font-thin w-[90%]">
					{response_secund_text}
				</p>
				<div>
					<SvgBlod services={services}/>
				</div>
			</section>
			<div className="rounded-full fixed bottom-5 right-3">
				<LinkedinLogo size={40} className="bg-blue-400 text-gray-100 p-2 my-2 rounded-full hover:bg-white hover:text-blue-400 transition-300"/>
				<WhatsappLogo size={40} className="bg-green-500 text-gray-100 p-2 my-2 rounded-full hover:bg-white hover:text-green-500 transition-300"/>
			</div>
		</main>
	)
}
