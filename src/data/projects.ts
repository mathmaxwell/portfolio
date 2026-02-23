import entry from '../images/fastpin/entry.png'
import gameintro from '../images/fastpin/gameintro.png'
import historypay from '../images/fastpin/historypay.png'
import howtopay from '../images/fastpin/howtopay.png'
import buymodal from '../images/fastpin/buymodal.png'
import historyoperation from '../images/fastpin/historyoperation.png'
import statistics from '../images/fastpin/statistics.png'
import donations from '../images/fastpin/donations.png'
import tops from '../images/fastpin/tops.png'
import users from '../images/fastpin/users.png'

export interface Project {
	type: 'frontend' | 'backend'
	title: string
	description: {
		en: string
		ru: string
		uz: string
	}
	images: string[]
	techStack: string[]
	liveUrl?: string
	codeUrl?: string
	featured?: boolean
}

export const projects: Project[] = [
	{
		type: 'frontend',
		title: 'fastpin.uz',
		description: {
			en: `This project is a platform created for automatic top-up of game accounts (donations). The system automates manual operations and the payment verification process. Users can independently top up their balances without administrator involvement.`,
			ru: `Данный проект представляет собой платформу, созданную для автоматического пополнения игровых аккаунтов (донат). Система автоматизирует ручную работу и процесс проверки платежей. Пользователи могут самостоятельно пополнять свой баланс без вмешательства администратора.`,
			uz: `Ushbu loyiha o‘yin akkauntlarini (donat) avtomatik tarzda to‘ldirish uchun yaratilgan platformadir. Tizim qo‘lda ishlashni va to‘lovlarni tekshirish jarayonini avtomatlashtiradi. Foydalanuvchilar administrator aralashuvisiz o‘z balanslarini mustaqil ravishda to‘ldira oladilar.`,
		},
		images: [entry, gameintro, historypay, howtopay, buymodal],
		techStack: ['React 19', 'TypeScript', 'MUI v7', 'Vite'],
		liveUrl: 'https://fastpin.uz',
		codeUrl: '',
		featured: true,
	},
	{
		type: 'backend',
		title: 'fastpin.uz',
		description: {
			en: `This project provides users with the ability to top up their game accounts through a unified platform. The backend is integrated with external APIs to process donations for various games. The system securely stores user data, payment history, and purchase records, while handling and validating transactions. Additionally, an administrative dashboard is implemented for monitoring operations, analyzing payments, and managing the platform.`,
			ru: `Данный проект предоставляет пользователям возможность пополнять свой игровой баланс через единую платформу. Backend-часть интегрирована с внешними API для осуществления донатов в различные игры. Система хранит данные пользователей, историю их платежей и покупок, а также обеспечивает обработку и проверку транзакций. Кроме того, реализован административный dashboard для мониторинга операций, анализа платежей и управления системой.`,
			uz: `Ushbu loyiha foydalanuvchilarga yagona platforma orqali o‘z o‘yin balanslarini to‘ldirish imkoniyatini taqdim etadi. Backend qismi turli o‘yinlarga donat amalga oshirish uchun tashqi API’lar bilan integratsiya qilingan. Tizim foydalanuvchilar ma’lumotlarini, ularning to‘lov va xaridlar tarixini saqlaydi hamda tranzaksiyalarni qayta ishlash va tekshirishni amalga oshiradi. Shuningdek, operatsiyalarni kuzatish, to‘lovlarni tahlil qilish va tizimni boshqarish uchun administrator dashboardi ishlab chiqilgan.`,
		},
		images: [historyoperation, statistics, donations, tops, users],
		techStack: ['Go', 'GORM', 'PostgreSQL', 'JWT', 'REST API'],
		liveUrl: 'https://fastpin.uz',
		codeUrl: '',
		featured: true,
	},
]
