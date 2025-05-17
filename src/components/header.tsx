import BurgerMenu from './burgerMenu'
import burgerStory from '../elements/burgerMenu'
const Header = () => {
	const { burger, setBurger } = burgerStory()
	return (
		<>
			{burger ? (
				<BurgerMenu />
			) : (
				<div  className='container mx-auto relative px-2 my-2 flex justify-between items-center'>
					<h1>Abdurahim</h1>
					<button onClick={setBurger}>
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
			)}
		</>
	)
}

export default Header
