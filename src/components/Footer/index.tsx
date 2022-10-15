export function Footer({ abasFooter }: any ) {
	return (
		<footer className="bg-blue-900 text-gray-100 p-3 pt-10  mt-4 border-t border-b-0 rounded-lg">
			<ul className="my-10">
				{
					abasFooter.map((item:any,i:any) => {
						return <li key={i}	className="hover:bg-gray-100 hover:text-blue-900 transition-300 my-3 rounded-lg p-3">{item.text}</li>
					})}
				</ul>
			<div className="w-full h-[1px] bg-gray-100 my-2"></div>
			<p className="text-center font-thin">
			@ 2022, LIKE PAGES
			</p>
		</footer>
	)
}
