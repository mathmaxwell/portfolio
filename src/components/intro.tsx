import obito from '../images/obito.jpeg'

const Intro = () => {
	return (
		<div className='container mx-auto px-4 sm:px-6 lg:px-8 my-4 intro'>
			<div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
				<img
					src={obito}
					alt='Абдурахим'
					className='rounded-full w-1/2 sm:w-1/3 lg:w-1/4 aspect-square border-4 border-gray-300 shadow-lg'
				/>
				<div className='text-center sm:text-left'>
					<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold my-4'>
						👋 Привет, меня зовут <span className='font-bold'>Абдурахим</span>
					</h2>
					<p className='text-base sm:text-lg font-light my-4'>
						Frontend-разработчик: Создаю функциональные и интуитивно понятные
						веб-интерфейсы.
					</p>
					<p className='flex items-center justify-center sm:justify-start gap-2 my-4 text-base sm:text-lg'>
						<svg
							className='w-6 h-6'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'
								fill='#0D0D0D'
							/>
						</svg>
						Tashkent, Uzbekistan
					</p>
				</div>
			</div>
			<ul className='flex items-center justify-center gap-4 sm:gap-6 my-4'>
				<li>
					<a href='telegram' aria-label='Telegram'>
						<svg
							className='w-8 h-8'
							viewBox='0 0 15 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z'
								stroke='#000000'
								strokeLinejoin='round'
							/>
						</svg>
					</a>
				</li>
				<li>
					<a href='github' aria-label='GitHub'>
						<svg
							className='w-8 h-8'
							fill='#000000'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							data-name='Layer 1'
						>
							<path d='M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z' />
						</svg>
					</a>
				</li>
				<li>
					<a href='leetcode' aria-label='LeetCode'>
						<svg
							className='w-8 h-8'
							viewBox='0 0 24 24'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z' />
						</svg>
					</a>
				</li>
				<li>
					<a href='email' aria-label='Email'>
						<svg
							className='w-8 h-8'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z'
								fill='#0D0D0D'
							/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Intro
