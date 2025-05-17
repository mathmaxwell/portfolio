import { useState } from 'react'

import nike from '../images/nike.png'
import goTrip from '../images/goTrip.png'
import silver from '../images/silver.png'
import qoravoy from '../images/qoravoy.png'
import totembo from '../images/totembo.png'
import weather from '../images/weather.png'
import viuCinema from '../images/viuCinema.png'
import calc from '../images/calc.png'
import clickBall from '../images/clickBall.png'
import mySite from '../images/mySite.png'
const Skils = () => {
	const [mySkils, setMySkils] = useState<string[]>([])
	const cssSkils = [
		'css',
		'cscc/sass',
		'tailwind',
		'motion UI',
		'css-in-js',
		'material UI',
	]
	const reactSkils = [
		'only JS',
		'only React',
		'UUID',
		'React Hook Form',
		'Axios',
		'React Router DOM',
		'React Context',
		'Zustand',
		'Framer Motion',
		'React Loading Skeleton',
		'React Paginate',
		'PocketBase',
	]
	const myProjects = [
		{
			name: 'nike',
			stack: ['html', 'css'],
			github: 'https://github.com/mathmaxwell/nike',
			image: nike,
			site: 'https://mathmaxwell.github.io/nike/',
		},
		{
			name: 'goTrip',
			stack: ['html', 'css'],
			github: 'https://github.com/mathmaxwell/goTrip',
			image: goTrip,
			site: 'https://mathmaxwell.github.io/goTrip/',
		},
		{
			name: 'silver house',
			stack: ['html', 'css'],
			github: 'https://github.com/mathmaxwell/silver-house',
			image: silver,
			site: 'https://mathmaxwell.github.io/silver-house/',
		},
		{
			name: 'qoravoy',
			stack: ['html', 'css'],
			github: 'https://github.com/mathmaxwell/qoravoy',
			image: qoravoy,
			site: 'https://mathmaxwell.github.io/qoravoy/',
		},
		{
			name: 'totembo',
			stack: ['html', 'css'],
			github: 'https://github.com/mathmaxwell/soat',
			image: totembo,
			site: 'https://mathmaxwell.github.io/soat/',
		},
		{
			name: 'calculator',
			stack: ['html', 'css', 'only JS'],
			github: 'https://github.com/mathmaxwell/calculator',
			image: calc,
			site: 'https://mathmaxwell.github.io/calculator/',
		},
		{
			name: 'mini game',
			stack: ['html', 'css', 'only JS'],
			github: 'https://github.com/mathmaxwell/viuCinemaReact',
			image: clickBall,
			site: 'https://mathmaxwell.github.io/clickBall/',
		},
		{
			name: 'viu cinema',
			stack: ['html', 'sass', 'only React'],
			github: 'https://github.com/mathmaxwell/viuCinemaReact',
			image: viuCinema,
			site: 'https://viu-cinema-whis-react.netlify.app/',
		},
		{
			name: 'weather',
			stack: ['html', 'tailwind', 'Axios', 'React Hook Form', 'React Context'],
			github: 'https://github.com/mathmaxwell/weather',
			image: weather,
			site: 'https://maxwellweather.netlify.app/',
		},
		{
			name: 'mini chat',
			stack: [
				'html',
				'React Hook Form',
				'motion UI',
				'css-in-js',
				'material UI',
				'PocketBase',
			],
			github: 'https://github.com/mathmaxwell/mini-chat-online',
			image: weather,
			site: 'https://github.com/mathmaxwell/mini-chat-online/blob/master/README.md',
		},
		{
			name: 'mySite',
			stack: [
				'UUID',
				'React Hook Form',
				'Axios',
				'React Router DOM',
				'React Context',
				'Zustand',
				'Framer Motion',
				'React Loading Skeleton',
				'React Paginate',
				'PocketBase',
				'tailwind',
				'motion UI',
			],
			github: 'https://github.com/mathmaxwell/newSite',
			image: mySite,
			site: 'https://newsiteproweb.netlify.app/',
		},
	]
	const filteredProjects = myProjects.filter(project =>
		mySkils.every(skill => project.stack.includes(skill))
	)

	return (
		<div className='container mx-auto px-2 '>
			<h1 className='text-2xl text-center my-10'>SKILS</h1>
			<ul className='flex items-center justify-between my-10'>
				<li>
					<svg
						width='35px'
						height='35px'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect x='0' fill='none' width='20' height='20' />

						<g>
							<path d='M4 16v-2H2v2H1v-5h1v2h2v-2h1v5H4zM7 16v-4H5.6v-1h3.7v1H8v4H7zM10 16v-5h1l1.4 3.4h.1L14 11h1v5h-1v-3.1h-.1l-1.1 2.5h-.6l-1.1-2.5H11V16h-1zM19 16h-3v-5h1v4h2v1zM9.4 4.2L7.1 6.5l2.3 2.3-.6 1.2-3.5-3.5L8.8 3l.6 1.2zm1.2 4.6l2.3-2.3-2.3-2.3.6-1.2 3.5 3.5-3.5 3.5-.6-1.2z' />
						</g>
					</svg>
				</li>
				<li>
					<svg
						width='35px'
						height='35px'
						viewBox='0 0 16 16'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
					>
						<path
							fill='#444'
							d='M4.1 11c1.4 0 1.9-1 1.9-1l-0.8-0.5c0 0-0.3 0.5-1 0.5s-1.2-0.9-1.2-2.2c0-1.2 0.6-1.8 1.2-1.8 0.5 0 0.9 0.4 0.9 0.4l0.8-0.6c0 0-0.7-0.8-1.7-0.8-1.1 0-2.2 0.9-2.2 2.8s0.9 3.2 2.1 3.2zM8.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM12.7 9.9c-0.3 0.1-0.7 0-1-0.4l-0.8 0.5c0.4 0.6 1 1 1.6 1 0.1 0 0.3 0 0.4-0.1 0.7-0.2 1.1-0.8 1.1-1.6 0-1.2-0.8-1.6-1.3-1.8-0.5-0.3-0.7-0.4-0.7-0.8s0.1-0.7 0.6-0.7c0.3 0 0.6 0.4 0.6 0.4l0.8-0.6c-0.2-0.3-0.7-0.8-1.4-0.8-0.9 0-1.6 0.6-1.6 1.6 0 1.1 0.7 1.5 1.2 1.8 0.6 0.2 0.8 0.4 0.8 0.9 0 0.3 0 0.6-0.3 0.6zM0 0v16h16v-16h-16zM15 15h-14v-14h14v14z'
						></path>
					</svg>
				</li>
				<li>
					<svg
						fill='#000000'
						width='35px'
						height='35px'
						viewBox='0 0 14 14'
						role='img'
						focusable='false'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M 11.714286,1 2.285714,1 C 1.575893,1 1,1.57589 1,2.28571 l 0,9.42858 C 1,12.42411 1.575893,13 2.285714,13 l 9.428572,0 C 12.424107,13 13,12.42411 13,11.71429 L 13,2.28571 C 13,1.57589 12.424107,1 11.714286,1 Z m -4.183929,9.35893 c 0,1.16786 -0.685714,1.70089 -1.684821,1.70089 -0.902679,0 -1.425,-0.46607 -1.692857,-1.03125 l 0.91875,-0.55446 c 0.176785,0.31339 0.3375,0.57857 0.725892,0.57857 0.369643,0 0.605358,-0.14464 0.605358,-0.70982 l 0,-3.83304 1.127678,0 0,3.84911 z m 2.667857,1.70089 c -1.047321,0 -1.725,-0.49821 -2.054464,-1.15178 L 9.0625,10.37768 c 0.241071,0.39375 0.557143,0.68571 1.111607,0.68571 0.466072,0 0.766072,-0.23303 0.766072,-0.55714 0,-0.38571 -0.305358,-0.52232 -0.822322,-0.75 L 9.836607,9.63571 C 9.022321,9.29018 8.483929,8.85357 8.483929,7.93482 c 0,-0.84643 0.645535,-1.48928 1.65,-1.48928 0.717857,0 1.232142,0.2491 1.601785,0.90267 l -0.878571,0.5625 C 10.664286,7.56518 10.455357,7.42857 10.13125,7.42857 c -0.329464,0 -0.538393,0.20893 -0.538393,0.48214 0,0.3375 0.208929,0.47411 0.69375,0.68572 l 0.28125,0.12053 c 0.958929,0.40983 1.497322,0.83036 1.497322,1.77322 0,1.0125 -0.798215,1.56964 -1.866965,1.56964 z' />
					</svg>
				</li>
			</ul>
			<ul className='flex gap-2 overflow-x-auto my-10'>
				{cssSkils.map(css => (
					<li
						key={css}
						onClick={() =>
							setMySkils(prev =>
								prev.includes(css)
									? prev.filter(s => s !== css)
									: [...prev, css]
							)
						}
						className={`p-2 rounded-2xl text-nowrap cursor-pointer ${
							mySkils.includes(css) ? 'bg-red-400' : 'bg-amber-300'
						}`}
					>
						{css}
					</li>
				))}
			</ul>
			<ul className='flex gap-2 overflow-x-auto my-10'>
				{reactSkils.map(css => (
					<li
						key={css}
						onClick={() =>
							setMySkils(prev =>
								prev.includes(css)
									? prev.filter(s => s !== css)
									: [...prev, css]
							)
						}
						className={`p-2 rounded-2xl text-nowrap cursor-pointer ${
							mySkils.includes(css) ? 'bg-red-400' : 'bg-amber-300'
						}`}
					>
						{css}
					</li>
				))}
			</ul>
			<ul className='flex flex-col'>
				{filteredProjects.map((project, id) => (
					<li key={id} className='flex flex-col gap-2 border-t border-b'>
						<a href={project.github} className='text-center text-2xl'>
							{project.name}
						</a>
						<a href={project.site}>
							<img src={project.image} alt='project image' />
						</a>
						<ul className='flex flex-wrap gap-2'>
							{project.stack.map((stack, id) => (
								<li key={id}>{stack}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Skils
