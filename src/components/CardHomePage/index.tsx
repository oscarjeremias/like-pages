export function CardHomePage(props:any) {
 if(props.cardActive == true) { 
	 return (
		<>
		<div className="fixed top-0 left-0 w-full h-screen bg-blue-900 flex opacity-50">
		</div>
			<div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white w-4/5 flex flex-col">
				<h2 className="bg-blue-400 rounded-lg  text-zinc-100 p-3 text-2xl font-bold">
					{props.dataAbasFooter.title}
				</h2>
				<p className="py-3 pl-6 pr-3">
					{props.dataAbasFooter.description}
				</p>
				<button className="right-0 px-4 py-2 m-3 bg-blue-400 rounded text-zinc-100 self-end w-[100px] border  hover:border-blue-400 hover:bg-white hover:text-blue-900" onClick={() => props.setCardActive(false)}>Fechar</button>
			</div> 
		</>
		)
	}else {
		return null
	}
}
