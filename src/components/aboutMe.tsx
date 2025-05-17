import image from '../images/image.png'
const AboutMe = () => {
	return (
		<div
			style={{ background: 'linear-gradient(135deg, #ffecb3, #ffe082)' }}
			className='container px-2 my-10 '
		>
			<h1 className='text-center font-medium text-2xl'>AboutMe</h1>
			<img
				src={image}
				alt='me'
				className='mx-auto shadow-2xl rounded-2xl my-2'
			/>
			<h2 className='text-start font-normal text-2xl'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
				impedit porro sed distinctio{' '}
			</h2>
			<p className='text-start my-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolore
				labore animi explicabo unde quisquam perferendis. Officiis quasi
				temporibus iste, ut sed vel asperiores, reprehenderit earum quod laborum
				rerum in?
			</p>{' '}
			<p className='text-start my-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolore
				labore animi explicabo unde quisquam perferendis. Officiis quasi
				temporibus iste, ut sed vel asperiores, reprehenderit earum quod laborum
				rerum in?
			</p>{' '}
			<p className='text-start my-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolore
				labore animi explicabo unde quisquam perferendis. Officiis quasi
				temporibus iste, ut sed vel asperiores, reprehenderit earum quod laborum
				rerum in?
			</p>{' '}
			<p className='text-start my-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolore
				labore animi explicabo unde quisquam perferendis. Officiis quasi
				temporibus iste, ut sed vel asperiores, reprehenderit earum quod laborum
				rerum in?
			</p>{' '}
			<p className='text-start my-2'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolore
				labore animi explicabo unde quisquam perferendis. Officiis quasi
				temporibus iste, ut sed vel asperiores, reprehenderit earum quod laborum
				rerum in?
			</p>
		</div>
	)
}

export default AboutMe
