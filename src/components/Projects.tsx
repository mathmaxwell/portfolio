import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useTheme, alpha } from '@mui/material/styles'
import CodeOutlined from '@mui/icons-material/CodeOutlined'
import StorageOutlined from '@mui/icons-material/StorageOutlined'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../contexts/LanguageContext'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectModal from './ProjectModal'
import { ProjectCard } from './ProjectCard'

export default function Projects() {
	const { t, language } = useLang()
	const theme = useTheme()
	const [tab, setTab] = useState(0)
	const [selected, setSelected] = useState<Project | null>(null)
	const grad = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
	const type = tab === 0 ? 'frontend' : 'backend'
	const filtered = projects.filter(p => p.type === type)
	return (
		<Box id='projects' component='section' sx={{ py: 12, px: 3 }}>
			<Box
				component={motion.div as React.ElementType}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				sx={{ maxWidth: 1140, mx: 'auto' }}
			>
				<Box sx={{ textAlign: 'center', mb: 6 }}>
					<Typography
						variant='h3'
						sx={{
							background: grad,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							backgroundClip: 'text',
						}}
					>
						{t.projects.title}
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
					<Typography color='text.secondary'>{t.projects.subtitle}</Typography>
				</Box>

				{/* Tabs */}
				<Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
					<Tabs
						value={tab}
						onChange={(_, v) => setTab(v)}
						sx={{
							bgcolor: alpha(theme.palette.primary.main, 0.06),
							borderRadius: 5,
							p: '4px',
							'& .MuiTabs-indicator': { display: 'none' },
							'& .MuiTab-root': {
								borderRadius: 4,
								minHeight: 40,
								px: 3,
								color: 'text.secondary',
							},
							'& .Mui-selected': {
								color: '#fff !important',
								background: grad,
								borderRadius: 4,
							},
						}}
					>
						<Tab
							icon={<CodeOutlined />}
							iconPosition='start'
							label={t.projects.frontend}
						/>
						<Tab
							icon={<StorageOutlined />}
							iconPosition='start'
							label={t.projects.backend}
						/>
					</Tabs>
				</Box>

				{/* Cards grid */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={tab}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -16 }}
						transition={{ duration: 0.3 }}
					>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									sm: 'repeat(2, 1fr)',
									lg: 'repeat(3, 1fr)',
								},
								gap: 3,
							}}
						>
							{filtered.map((p, key) => (
								<ProjectCard
									key={key}
									project={p}
									lang={language}
									onClick={() => setSelected(p)}
								/>
							))}
						</Box>
					</motion.div>
				</AnimatePresence>
			</Box>

			{/* Modal */}
			<ProjectModal project={selected} onClose={() => setSelected(null)} />
		</Box>
	)
}
