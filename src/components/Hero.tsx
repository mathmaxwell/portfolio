import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TelegramIcon from '@mui/icons-material/Telegram'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import { useTheme, alpha } from '@mui/material/styles'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useLang } from '../contexts/LanguageContext'
import AVATAR_SRC from '../images/gul.jpeg'
const YOUR_NAME = 'Abdurahim'
const GITHUB_URL = 'https://github.com/mathmaxwell'
const TELEGRAM_URL = 'https://t.me/abdurahim_5383'
const LINKEDIN_URL =
	'https://www.linkedin.com/in/abdurahim-abdumalikov-b3b4b7366/'

const stagger = { visible: { transition: { staggerChildren: 0.12 } } }
const fadeUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
		},
	},
}

export default function Hero() {
	const { t } = useLang()
	const theme = useTheme()
	const grad = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
	const scroll = (id: string) =>
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

	const socials = [
		{ icon: <GitHub />, href: GITHUB_URL, label: 'GitHub' },
		{ icon: <TelegramIcon />, href: TELEGRAM_URL, label: 'Telegram' },
		{ icon: <LinkedIn />, href: LINKEDIN_URL, label: 'LinkedIn' },
	]

	return (
		<Box
			id='home'
			component='section'
			sx={{
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				pt: 10,
				pb: 6,
				px: 3,
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Decorative blobs */}
			{[
				{ top: -120, right: -120, size: 500 },
				{ bottom: -80, left: -100, size: 400 },
			].map((b, i) => (
				<Box
					key={i}
					sx={{
						position: 'absolute',
						width: b.size,
						height: b.size,
						borderRadius: '50%',
						background:
							i === 0
								? theme.palette.primary.main
								: theme.palette.secondary.main,
						filter: 'blur(90px)',
						opacity: 0.12,
						pointerEvents: 'none',
						...b,
					}}
				/>
			))}

			<Box
				sx={{
					maxWidth: 1140,
					mx: 'auto',
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					gap: 6,
					flexDirection: { xs: 'column-reverse', md: 'row' },
				}}
			>
				{/* Text col */}
				<Box
					component={motion.div as React.ElementType}
					initial='hidden'
					animate='visible'
					variants={stagger}
					sx={{ flex: 1 }}
				>
					<motion.div variants={fadeUp}>
						<Typography
							variant='overline'
							sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
						>
							{t.hero.greeting}
						</Typography>
					</motion.div>

					<motion.div variants={fadeUp}>
						<Typography
							variant='h1'
							sx={{
								fontSize: { xs: '2.6rem', md: '3.8rem' },
								lineHeight: 1.1,
								letterSpacing: '-0.02em',
								mb: 1,
							}}
						>
							{YOUR_NAME}
						</Typography>
					</motion.div>

					<motion.div variants={fadeUp}>
						<Typography
							variant='h4'
							fontWeight={700}
							sx={{
								mb: 2.5,
								background: grad,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							}}
						>
							{t.hero.role}
						</Typography>
					</motion.div>

					<motion.div variants={fadeUp}>
						<Typography
							color='text.secondary'
							sx={{
								mb: 4,
								maxWidth: 480,
								lineHeight: 1.8,
								fontSize: '1.05rem',
							}}
						>
							{t.hero.subtitle}
						</Typography>
					</motion.div>

					<motion.div variants={fadeUp}>
						<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
							<Button
								variant='contained'
								size='large'
								onClick={() => scroll('projects')}
								sx={{
									background: grad,
									boxShadow: `0 4px 18px ${alpha(theme.palette.primary.main, 0.4)}`,
									'&:hover': { background: grad, opacity: 0.9 },
								}}
							>
								{t.hero.cta}
							</Button>
							<Button
								variant='outlined'
								size='large'
								onClick={() => scroll('contact')}
							>
								{t.hero.contact}
							</Button>
						</Box>
					</motion.div>

					<motion.div variants={fadeUp}>
						<Box sx={{ display: 'flex', gap: 1 }}>
							{socials.map(s => (
								<IconButton
									key={s.label}
									component='a'
									href={s.href}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={s.label}
									sx={{
										border: `1px solid`,
										borderColor: 'divider',
										color: 'text.secondary',
										'&:hover': {
											color: 'primary.main',
											borderColor: 'primary.main',
											bgcolor: alpha(theme.palette.primary.main, 0.08),
										},
									}}
								>
									{s.icon}
								</IconButton>
							))}
						</Box>
					</motion.div>
				</Box>

				{/* Avatar col */}
				<Box
					component={motion.div as React.ElementType}
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.7,
						ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
					}}
					sx={{
						position: 'relative',
						width: { xs: 200, md: 300 },
						height: { xs: 200, md: 300 },
						flexShrink: 0,
					}}
				>
					{/* Spinning gradient ring */}
					<Box
						sx={{
							position: 'absolute',
							inset: -4,
							borderRadius: '50%',
							background: `conic-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
							'@keyframes spin': { to: { transform: 'rotate(360deg)' } },
							animation: 'spin 8s linear infinite',
						}}
					/>
					{/* Cover for ring gap */}
					<Box
						sx={{
							position: 'absolute',
							inset: 3,
							borderRadius: '50%',
							bgcolor: 'background.default',
						}}
					/>
					{/* Photo */}
					<Avatar
						src={AVATAR_SRC}
						alt={YOUR_NAME}
						sx={{
							position: 'absolute',
							inset: 6,
							width: 'calc(100% - 12px)',
							height: 'calc(100% - 12px)',
							zIndex: 1,
							fontSize: '4rem',
							bgcolor: alpha(theme.palette.primary.main, 0.15),
							color: 'primary.main',
						}}
					>
						{YOUR_NAME[0]}
					</Avatar>
				</Box>
			</Box>
		</Box>
	)
}
