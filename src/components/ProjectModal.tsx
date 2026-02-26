import { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { useTheme, alpha } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import OpenInNewOutlined from '@mui/icons-material/OpenInNewOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import CodeOutlined from '@mui/icons-material/CodeOutlined'
import StorageOutlined from '@mui/icons-material/StorageOutlined'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../contexts/LanguageContext'
import type { Project } from '../data/projects'

interface Props {
	project: Project | null
	onClose: () => void
}

const slideVariants = {
	enter: (dir: number) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0 }),
	center: { x: 0, opacity: 1, transition: { duration: 0.3 } },
	exit: (dir: number) => ({
		x: dir > 0 ? '-60%' : '60%',
		opacity: 0,
		transition: { duration: 0.2 },
	}),
}

export default function ProjectModal({ project, onClose }: Props) {
	const { t } = useLang()
	const theme = useTheme()
	const grad = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`

	const [[imgIdx, direction], setImg] = useState([0, 0])
	const [zoomed, setZoomed] = useState(false)

	useEffect(() => {
		if (project) {
			setImg([0, 0])
			setZoomed(false)
		}
	}, [project])

	useEffect(() => {
		if (!project) return
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setZoomed(false)
				return
			}
			if (zoomed) return
			if (e.key === 'ArrowLeft') paginate(-1)
			if (e.key === 'ArrowRight') paginate(1)
		}
		window.addEventListener('keydown', handler)
		return () => window.removeEventListener('keydown', handler)
	}, [project, imgIdx, zoomed])

	if (!project) return null

	const images = project.images.filter(Boolean)
	const total = images.length
	const hasMany = total > 1

	const paginate = (dir: number) => {
		setImg(([cur]) => [(((cur + dir) % total) + total) % total, dir])
	}

	return (
		<>
			{/* Fullscreen zoom overlay */}
			<AnimatePresence>
				{zoomed && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={() => setZoomed(false)}
						style={{
							position: 'fixed',
							inset: 0,
							zIndex: 9999,
							background: 'rgba(0,0,0,0.92)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'zoom-out',
						}}
					>
						<img
							src={images[imgIdx]}
							style={{
								maxWidth: '98vw',
								maxHeight: '98vh',
								objectFit: 'contain',
								borderRadius: 8,
								pointerEvents: 'none',
							}}
						/>
						<IconButton
							onClick={() => setZoomed(false)}
							sx={{
								position: 'absolute',
								top: 16,
								right: 16,
								bgcolor: alpha('#000', 0.5),
								color: '#fff',
								'&:hover': { bgcolor: alpha('#000', 0.75) },
							}}
						>
							<CloseIcon />
						</IconButton>
					</motion.div>
				)}
			</AnimatePresence>

			<Dialog
				open={!!project}
				onClose={onClose}
				fullWidth
				PaperProps={{
					sx: {
						borderRadius: 3,
						bgcolor: 'background.paper',
						backgroundImage: 'none',
						maxHeight: '92vh',
						overflow: 'hidden',
					},
				}}
			>
				{/* Close */}
				<IconButton
					onClick={onClose}
					sx={{
						position: 'absolute',
						top: 12,
						right: 12,
						zIndex: 20,
						bgcolor: alpha(theme.palette.background.paper, 0.8),
						backdropFilter: 'blur(8px)',
					}}
				>
					<CloseIcon />
				</IconButton>

				{/* Image carousel */}
				<Box
					sx={{
						position: 'relative',
						bgcolor: alpha(theme.palette.primary.main, 0.06),
						overflow: 'hidden',
						width: '100%',
						height: 'calc(92vh - 120px)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<AnimatePresence custom={direction} mode='wait'>
						<motion.img
							key={imgIdx}
							src={images[imgIdx]}
							custom={direction}
							variants={slideVariants}
							initial='enter'
							animate='center'
							exit='exit'
							drag='x'
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.2}
							onDragEnd={(_, info) => {
								if (info.offset.x > 60) paginate(-1)
								else if (info.offset.x < -60) paginate(1)
							}}
							onDoubleClick={() => setZoomed(true)}
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'contain',
								cursor: 'zoom-in',
								display: 'block',
							}}
							onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
								e.currentTarget.style.opacity = '0'
							}}
						/>
					</AnimatePresence>

					{/* Fallback icon when no image */}
					<Box
						sx={{
							position: 'absolute',
							inset: 0,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: alpha(theme.palette.primary.main, 0.25),
							pointerEvents: 'none',
						}}
					>
						{project.type === 'frontend' ? (
							<CodeOutlined sx={{ fontSize: 72 }} />
						) : (
							<StorageOutlined sx={{ fontSize: 72 }} />
						)}
					</Box>

					{/* Arrows */}
					{hasMany && (
						<>
							<IconButton
								onClick={() => paginate(-1)}
								sx={{
									position: 'absolute',
									left: 12,
									top: '50%',
									transform: 'translateY(-50%)',
									bgcolor: alpha(theme.palette.background.paper, 0.75),
									backdropFilter: 'blur(8px)',
									'&:hover': {
										bgcolor: alpha(theme.palette.background.paper, 0.95),
									},
								}}
							>
								<ArrowBackIosNew fontSize='small' />
							</IconButton>
							<IconButton
								onClick={() => paginate(1)}
								sx={{
									position: 'absolute',
									right: 12,
									top: '50%',
									transform: 'translateY(-50%)',
									bgcolor: alpha(theme.palette.background.paper, 0.75),
									backdropFilter: 'blur(8px)',
									'&:hover': {
										bgcolor: alpha(theme.palette.background.paper, 0.95),
									},
								}}
							>
								<ArrowForwardIos fontSize='small' />
							</IconButton>
						</>
					)}

					{/* Counter + dots */}
					{hasMany && (
						<Box
							sx={{
								position: 'absolute',
								bottom: 14,
								left: '50%',
								transform: 'translateX(-50%)',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: 1,
							}}
						>
							<Box sx={{ display: 'flex', gap: 0.8 }}>
								{images.map((_, i) => (
									<Box
										key={i}
										onClick={() => setImg([i, i > imgIdx ? 1 : -1])}
										sx={{
											width: i === imgIdx ? 22 : 8,
											height: 8,
											borderRadius: 4,
											bgcolor:
												i === imgIdx
													? theme.palette.primary.main
													: alpha(theme.palette.common.white, 0.55),
											cursor: 'pointer',
											transition: 'all 0.3s',
											boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
										}}
									/>
								))}
							</Box>
							<Typography
								variant='caption'
								sx={{
									color: alpha(theme.palette.common.white, 0.8),
									fontWeight: 600,
									textShadow: '0 1px 3px rgba(0,0,0,0.5)',
									letterSpacing: 0.3,
								}}
							>
								{imgIdx + 1} {t.projects.of} {total}
							</Typography>
						</Box>
					)}
				</Box>

				{/* Content */}
				<DialogContent sx={{ p: 3, overflowY: 'auto' }}>
					{(project.liveUrl || project.codeUrl) && (
						<Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
							{project.liveUrl && (
								<Button
									variant='contained'
									href={project.liveUrl}
									target='_blank'
									rel='noopener noreferrer'
									startIcon={<OpenInNewOutlined />}
									sx={{
										background: grad,
										'&:hover': { background: grad, opacity: 0.88 },
									}}
								>
									{t.projects.viewLive}
								</Button>
							)}
							{project.codeUrl && (
								<Button
									variant='outlined'
									href={project.codeUrl}
									target='_blank'
									rel='noopener noreferrer'
									startIcon={<GitHubIcon />}
								>
									{t.projects.viewCode}
								</Button>
							)}
						</Box>
					)}
				</DialogContent>
			</Dialog>
		</>
	)
}
