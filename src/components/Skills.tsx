import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import { useTheme, alpha } from '@mui/material/styles'
import CodeOutlined from '@mui/icons-material/CodeOutlined'
import StorageOutlined from '@mui/icons-material/StorageOutlined'
import BuildOutlined from '@mui/icons-material/BuildOutlined'
import { motion } from 'framer-motion'
import { useLang } from '../contexts/LanguageContext'

type Level = 'expert' | 'advanced' | 'comfortable'

interface Skill {
	name: string
	level: Level
}

const GROUPS: {
	key: 'frontend' | 'backend' | 'tools'
	icon: React.ReactNode
	skills: Skill[]
}[] = [
	{
		key: 'frontend',
		icon: <CodeOutlined />,
		skills: [
			{ name: 'React / React 19', level: 'expert' },
			{ name: 'JavaScript ES6+', level: 'expert' },
			{ name: 'HTML / CSS', level: 'expert' },
			{ name: 'MUI', level: 'expert' },
			{ name: 'Tailwind CSS', level: 'advanced' },
			{ name: 'Zustand', level: 'advanced' },
			{ name: 'Redux / Zustand', level: 'comfortable' },
			{ name: 'TypeScript', level: 'comfortable' },
		],
	},
	{
		key: 'backend',
		icon: <StorageOutlined />,
		skills: [
			{ name: 'Golang', level: 'expert' },
			{ name: 'REST API', level: 'expert' },
			{ name: 'PostgreSQL', level: 'advanced' },
			{ name: 'GORM', level: 'advanced' },
			{ name: 'JWT / Auth', level: 'advanced' },
			{ name: 'python', level: 'comfortable' },
			{ name: 'Node.js', level: 'comfortable' },
		],
	},
	{
		key: 'tools',
		icon: <BuildOutlined />,
		skills: [
			{ name: 'Git / GitHub', level: 'expert' },
			{ name: 'Linux / CLI', level: 'advanced' },
			{ name: 'Docker', level: 'comfortable' },
			{ name: 'Figma', level: 'comfortable' },
		],
	},
]

export default function Skills() {
	const { t } = useLang()
	const theme = useTheme()
	const grad = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`

	// Level → chip style
	// const levelStyle = (level: Level) => {
	// 	switch (level) {
	// 		case 'expert':
	// 			return {
	// 				label: t.skills.expert,
	// 				bgcolor: theme.palette.primary.main,
	// 				color: '#fff',
	// 			}
	// 		case 'advanced':
	// 			return {
	// 				label: t.skills.advanced,
	// 				bgcolor: alpha(theme.palette.primary.main, 0.12),
	// 				color: theme.palette.primary.main,
	// 			}
	// 		case 'comfortable':
	// 			return {
	// 				label: t.skills.comfortable,
	// 				bgcolor: alpha(theme.palette.text.secondary, 0.08),
	// 				color: theme.palette.text.secondary,
	// 			}
	// 	}
	// }

	return (
		<Box
			id='skills'
			component='section'
			sx={{ py: 12, px: 3, bgcolor: 'background.paper' }}
		>
			<Box
				component={motion.div as React.ElementType}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				sx={{ maxWidth: 1140, mx: 'auto' }}
			>
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
						{t.skills.title}
					</Typography>
					<Box
						sx={{
							width: 60,
							height: 4,
							borderRadius: 2,
							background: grad,
							mx: 'auto',
							mt: 1.5,
							mb: 2,
						}}
					/>
					<Typography color='text.secondary'>{t.skills.subtitle}</Typography>
				</Box>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 3,
					}}
				>
					{GROUPS.map(group => (
						<Paper
							key={group.key}
							elevation={0}
							sx={{
								p: 3.5,
								border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
								borderRadius: 3,
							}}
						>
							{/* Category header */}
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1.5,
									mb: 3,
									pb: 2,
									borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
									color: 'primary.main',
								}}
							>
								{group.icon}
								<Typography fontWeight={700} color='primary.main'>
									{t.skills[group.key]}
								</Typography>
							</Box>

							{/* Skills list */}
							<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
								{group.skills.map(skill => {
									// const s = levelStyle(skill.level)
									return (
										<Box
											key={skill.name}
											sx={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between',
												gap: 1,
											}}
										>
											<Typography variant='body2' fontWeight={500}>
												{skill.name}
											</Typography>
											{/* <Chip
												label={s.label}
												size='small'
												sx={{
													bgcolor: s.bgcolor,
													color: s.color,
													fontWeight: 700,
													fontSize: '0.68rem',
													height: 22,
													flexShrink: 0,
												}}
											/> */}
										</Box>
									)
								})}
							</Box>
						</Paper>
					))}
				</Box>
			</Box>
		</Box>
	)
}
