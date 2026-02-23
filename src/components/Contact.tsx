import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useTheme, alpha } from '@mui/material/styles'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import ContentCopyOutlined from '@mui/icons-material/ContentCopyOutlined'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion } from 'framer-motion'
import { useLang } from '../contexts/LanguageContext'
import TelegramIcon from '@mui/icons-material/Telegram'
const EMAIL = 'mathmaxwell23@gmail.com'
const TELEGRAM = 'https://t.me/abdurahim_5383'
const TELEGRAM_HANDLE = '@abdurahim_5383'
const GITHUB = 'https://github.com/mathmaxwell'
const GITHUB_HANDLE = 'https://github.com/mathmaxwell'

export default function Contact() {
	const { t } = useLang()
	const theme = useTheme()
	const [copied, setCopied] = useState(false)
	const grad = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`

	const copyEmail = () => {
		navigator.clipboard.writeText(EMAIL)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	const contactItems = [
		{
			icon: <EmailOutlined sx={{ fontSize: 28 }} />,
			label: 'Email',
			value: EMAIL,
			href: `mailto:${EMAIL}`,
			action: (
				<Tooltip title={copied ? t.contact.copied : 'Copy'} placement='top'>
					<IconButton
						size='small'
						onClick={e => {
							e.preventDefault()
							copyEmail()
						}}
						sx={{ color: copied ? 'success.main' : 'text.secondary' }}
					>
						{copied ? (
							<CheckOutlined fontSize='small' />
						) : (
							<ContentCopyOutlined fontSize='small' />
						)}
					</IconButton>
				</Tooltip>
			),
		},
		{
			icon: <TelegramIcon />,
			label: 'Telegram',
			value: TELEGRAM_HANDLE,
			href: TELEGRAM,
			action: null,
		},
		{
			icon: <GitHubIcon sx={{ fontSize: 28 }} />,
			label: 'GitHub',
			value: GITHUB_HANDLE,
			href: GITHUB,
			action: null,
		},
	]

	return (
		<Box id='contact' component='section' sx={{ py: 12, px: 3 }}>
			<Box
				component={motion.div as React.ElementType}
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				sx={{ maxWidth: 700, mx: 'auto', textAlign: 'center' }}
			>
				<Typography
					variant='h3'
					sx={{
						background: grad,
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
					}}
				>
					{t.contact.title}
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
				<Typography color='text.secondary' sx={{ mb: 6, lineHeight: 1.8 }}>
					{t.contact.subtitle}
				</Typography>

				<Typography
					variant='overline'
					color='text.secondary'
					fontWeight={700}
					sx={{ letterSpacing: 1.5, display: 'block', mb: 3 }}
				>
					{t.contact.orReach}
				</Typography>

				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					{contactItems.map(item => (
						<Paper
							key={item.label}
							component='a'
							href={item.href}
							target='_blank'
							rel='noopener noreferrer'
							elevation={0}
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 2.5,
								p: 2.5,
								textDecoration: 'none',
								color: 'text.primary',
								border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
								borderRadius: 3,
								textAlign: 'left',
								transition: 'all 0.25s',
								'&:hover': {
									borderColor: 'primary.main',
									transform: 'translateY(-3px)',
									boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.18)}`,
								},
							}}
						>
							{/* Icon */}
							<Box
								sx={{
									width: 52,
									height: 52,
									borderRadius: 2,
									flexShrink: 0,
									background: grad,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: '#fff',
									boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.35)}`,
								}}
							>
								{item.icon}
							</Box>

							{/* Text */}
							<Box sx={{ flex: 1 }}>
								<Typography
									variant='caption'
									color='text.secondary'
									fontWeight={700}
									sx={{
										textTransform: 'uppercase',
										letterSpacing: 0.8,
										display: 'block',
									}}
								>
									{item.label}
								</Typography>
								<Typography fontWeight={600}>{item.value}</Typography>
							</Box>

							{/* Optional action */}
							{item.action}
						</Paper>
					))}
				</Box>
			</Box>
		</Box>
	)
}
