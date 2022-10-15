export function SvgBlod({services}: any) {
	return (
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"> <path fill="#044BD9" d="M54.6,-51C71.2,-38.1,85.3,-19,84.3,-1C83.3,17.1,67.3,34.2,50.7,46.6C34.2,59,17.1,66.8,-3.2,70C-23.5,73.2,-46.9,71.8,-59.3,59.3C-71.8,46.9,-73.2,23.5,-72,1.2C-70.8,-21.1,-67,-42.1,-54.6,-55.1C-42.1,-68,-21.1,-72.8,-1,-71.8C19,-70.8,38.1,-63.9,54.6,-51Z" transform="translate(100 100)" className="text-xs"/>

			<text x="60" y="60" fill="white" className="text-[0.5rem]">
			{services[0].text}
			</text>
			<text x="45" y="75" fill="white" className="text-[0.5rem]">
			{services[1].text}
			</text>
			<text x="90"  y="90" fill="white" className="text-[0.5rem]">
			{services[2].text}
			</text>
			<text x="45" y="105" fill="white" className="text-[0.5rem]">
			{services[3].text}
			</text>
			<text x="90" y="120" fill="white" className="text-[0.5rem]">
			{services[4].text}
			</text>
			<text x="60" y="135" fill="white" className="text-[0.5rem]">
			{services[5].text}
			</text>
		</svg>
	)
}
