import { useTheme } from '@mui/material/styles'
import { useLang } from '../contexts/LanguageContext'
import type { Project } from '../data/projects'
import type { Language } from '../i18n/translations'
import {
	alpha,
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Chip,
	Typography,
} from '@mui/material'
import {
	CodeOutlined,
	PhotoLibraryOutlined,
	StorageOutlined,
} from '@mui/icons-material'

export function ProjectCard({
	project,
	lang,
	onClick,
}: {
	project: Project
	lang: Language
	onClick: () => void
}) {
	const { t } = useLang()
	const theme = useTheme()

	return (
		<Card
			elevation={0}
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				border: `1px solid ${alpha(theme.palette.primary.main, project.featured ? 0.4 : 0.1)}`,
				borderRadius: 3,
				'&:hover': {
					boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.2)}`,
				},
			}}
		>
			<CardActionArea
				onClick={onClick}
				sx={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
				}}
			>
				{/* Image */}
				<Box
					sx={{
						position: 'relative',
						aspectRatio: '1/1',
						bgcolor: alpha(theme.palette.primary.main, 0.06),
						overflow: 'hidden',
					}}
				>
					<CardMedia
						component='img'
						image={project.images[0]}
						alt={project.title}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							transition: 'transform 0.4s',
							'&:hover': { transform: 'scale(1.06)' },
						}}
						onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
							e.currentTarget.style.display = 'none'
						}}
					/>
					{/* Fallback */}
					<Box
						sx={{
							position: 'absolute',
							inset: 0,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: alpha(theme.palette.primary.main, 0.35),
						}}
					>
						{project.type === 'frontend' ? (
							<CodeOutlined sx={{ fontSize: 48 }} />
						) : (
							<StorageOutlined sx={{ fontSize: 48 }} />
						)}
					</Box>
					{/* Photo count badge */}
					<Box
						sx={{
							position: 'absolute',
							bottom: 8,
							right: 8,
							display: 'flex',
							alignItems: 'center',
							gap: 0.5,
							bgcolor: alpha(theme.palette.background.paper, 0.75),
							backdropFilter: 'blur(8px)',
							borderRadius: 2,
							px: 1,
							py: 0.3,
						}}
					>
						<PhotoLibraryOutlined
							sx={{ fontSize: 14, color: 'text.secondary' }}
						/>
						<Typography
							variant='caption'
							color='text.secondary'
							fontWeight={600}
						>
							{project.images.length}
						</Typography>
					</Box>
					{/* Hover overlay */}
					<Box
						sx={{
							position: 'absolute',
							inset: 0,
							background: `linear-gradient(to top, ${alpha(theme.palette.primary.main, 0.6)} 0%, transparent 60%)`,
							opacity: 0,
							transition: 'opacity 0.3s',
							display: 'flex',
							alignItems: 'flex-end',
							justifyContent: 'center',
							pb: 2,
							'.MuiCard-root:hover &': { opacity: 1 },
						}}
					>
						<Typography
							variant='body2'
							fontWeight={700}
							sx={{ color: '#fff', letterSpacing: 0.5 }}
						>
							{t.projects.seeDetails} →
						</Typography>
					</Box>
				</Box>

				<CardContent sx={{ flex: 1, p: 2.5 }}>
					{project.featured && (
						<Chip
							label='★ Featured'
							size='small'
							sx={{
								mb: 1,
								bgcolor: alpha(theme.palette.primary.main, 0.12),
								color: 'primary.main',
							}}
						/>
					)}
					<Typography variant='h6' fontWeight={700} gutterBottom>
						{project.title}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{ lineHeight: 1.7, mb: 2 }}
					>
						{project.description[lang]}
					</Typography>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
						{project.techStack.slice(0, 4).map(tech => (
							<Chip
								key={tech}
								label={tech}
								size='small'
								sx={{
									bgcolor: alpha(theme.palette.primary.main, 0.08),
									color: 'primary.main',
									fontSize: '0.72rem',
								}}
							/>
						))}
						{project.techStack.length > 4 && (
							<Chip
								label={`+${project.techStack.length - 4}`}
								size='small'
								sx={{
									bgcolor: alpha(theme.palette.text.secondary, 0.08),
									color: 'text.secondary',
									fontSize: '0.72rem',
								}}
							/>
						)}
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
