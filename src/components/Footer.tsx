import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import { useLang } from '../contexts/LanguageContext'
export default function Footer() {
	const { t } = useLang()
	const theme = useTheme()
	const grad = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`

	return (
		<Box component='footer'>
			<Divider />
			<Box
				sx={{
					py: 3,
					px: 3,
					maxWidth: 1140,
					mx: 'auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					gap: 2,
				}}
			>
				<Typography
					fontWeight={800}
					sx={{
						background: grad,
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text',
					}}
				>
					&lt;Dev /&gt;
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{t.footer.rights}
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
					sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
				>
					{t.footer.madeWith}
				</Typography>
			</Box>
		</Box>
	)
}
