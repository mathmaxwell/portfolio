import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { useTheme, alpha } from '@mui/material/styles'
import { motion } from 'framer-motion'
import { useLang } from '../contexts/LanguageContext'
import ABOUT from '../images/dubay.jpeg'
const stats = [
	{ key: 'yearsExp' as const, value: '2+' },
	{ key: 'projects' as const, value: '10+' },
	{ key: 'clients' as const, value: '5+' },
]

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
		},
	},
}

export default function About() {
	const { t } = useLang()
	const theme = useTheme()
	const grad = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`

	return (
		<Box
			id='about'
			component='section'
			sx={{ py: 12, px: 3, bgcolor: 'background.paper' }}
		>
			<Box
				component={motion.div as React.ElementType}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={fadeUp}
				sx={{ maxWidth: 1140, mx: 'auto' }}
			>
				{/* Section heading */}
				<Box sx={{ textAlign: 'center', mb: 8 }}>
					<Typography
						variant='h3'
						sx={{
							background: grad,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
						}}
					>
						{t.about.title}
					</Typography>
					<Box
						sx={{
							width: 60,
							height: 4,
							borderRadius: 2,
							background: grad,
							mx: 'auto',
							mt: 1.5,
						}}
					/>
				</Box>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
						gap: 8,
						alignItems: 'center',
					}}
				>
					{/* Image */}
					<Box sx={{ position: 'relative', mx: 'auto', maxWidth: 420 }}>
						{/* Фоновая декоративная "рамка" */}
						<Box
							sx={{
								position: 'absolute',
								inset: -16,
								borderRadius: 6,
								background: `linear-gradient(135deg, 
        ${alpha(theme.palette.primary.main, 0.18)}, 
        ${alpha(theme.palette.secondary.main, 0.12)}
      )`,
								transform: 'rotate(2.8deg)',
								filter: 'blur(1px)',
								zIndex: 0,
								transition: 'all 0.4s ease',
								'&:hover': {
									transform: 'rotate(3.5deg) scale(1.02)',
									filter: 'blur(2px)',
								},
							}}
						/>

						{/* Основная тень-подложка */}
						<Box
							sx={{
								position: 'absolute',
								inset: -10,
								borderRadius: 6,
								bgcolor: 'background.paper',
								boxShadow: '0 20px 40px -12px rgba(0,0,0,0.25)',
								transform: 'rotate(1.2deg)',
								zIndex: 0,
								transition: 'transform 0.4s ease',
							}}
						/>

						{/* Сама картинка */}
						<Box
							component='img'
							src={ABOUT}
							alt='About section image'
							onError={e => {
								e.currentTarget.style.display = 'none'
							}}
							sx={{
								width: '100%',
								maxWidth: 400,
								height: 'auto',
								display: 'block',
								borderRadius: 5,
								boxShadow: theme.shadows[10],
								objectFit: 'cover',
								position: 'relative',
								zIndex: 2,
								transition: 'all 0.35s ease',
								transform: 'rotate(-1.8deg) scale(1.02)',
								'&:hover': {
									transform: 'rotate(0deg) scale(1.04)',
									boxShadow: theme.shadows[16],
								},
							}}
						/>

						{/* Тонкая светлая обводка поверх картинки */}
						<Box
							sx={{
								position: 'absolute',
								inset: 0,
								borderRadius: 5,
								border: `1.5px solid ${alpha(theme.palette.common.white, 0.18)}`,
								pointerEvents: 'none',
								zIndex: 3,
								transform: 'rotate(-1.8deg)',
								transition: 'all 0.35s ease',
							}}
						/>
					</Box>

					{/* Text */}
					<Box>
						<Typography
							color='text.secondary'
							sx={{ lineHeight: 1.8, mb: 2.5, fontSize: '1.02rem' }}
						>
							{t.about.description1}
						</Typography>
						<Typography
							color='text.secondary'
							sx={{ lineHeight: 1.8, mb: 4, fontSize: '1.02rem' }}
						>
							{t.about.description2}
						</Typography>

						<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
							{stats.map(s => (
								<Paper
									key={s.key}
									elevation={0}
									sx={{
										flex: 1,
										minWidth: 110,
										textAlign: 'center',
										p: 3,
										border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
										borderRadius: 3,
										'&:hover': {
											borderColor: 'primary.main',
											boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
										},
										transition: 'all 0.25s',
									}}
								>
									<Typography
										variant='h4'
										fontWeight={800}
										sx={{
											background: grad,
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											backgroundClip: 'text',
										}}
									>
										{s.value}
									</Typography>
									<Typography
										variant='caption'
										color='text.secondary'
										fontWeight={600}
										sx={{ textTransform: 'uppercase', letterSpacing: 0.5 }}
									>
										{t.about[s.key]}
									</Typography>
								</Paper>
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
