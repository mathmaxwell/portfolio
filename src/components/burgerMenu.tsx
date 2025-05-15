import burgerStory from '../elements/burgerMenu'
const BurgerMenu = () => {
	const { setBurger } = burgerStory()
	return (
		<div className='container px-2 py-2 h-screen bg-red-400 w-full relative'>
			<h1>burger menu</h1>
			<button onClick={setBurger} className='absolute top-2 right-2'>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect x='3' y='6' width='18' height='2' rx='1' fill='black' />
					<rect x='3' y='11' width='18' height='2' rx='1' fill='black' />
					<rect x='3' y='16' width='18' height='2' rx='1' fill='black' />
				</svg>
			</button>
		</div>
	)
}
export default BurgerMenu
