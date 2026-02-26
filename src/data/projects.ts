//fastpin
import entryFast from '../images/fastpin/entry.png'
import gameintroFast from '../images/fastpin/gameintro.png'
import historypayFast from '../images/fastpin/historypay.png'
import howtopayFast from '../images/fastpin/howtopay.png'
import buymodalFast from '../images/fastpin/buymodal.png'
import historyoperation from '../images/fastpin/historyoperation.png'
import statistics from '../images/fastpin/statistics.png'
import donations from '../images/fastpin/donations.png'
import tops from '../images/fastpin/tops.png'
import users from '../images/fastpin/users.png'
//riopin
import entryRio from '../images/riopin/entry.jpeg'
import cashRio from '../images/riopin/cash.jpeg'
import gamesRio from '../images/riopin/games.jpeg'
import profileRio from '../images/riopin/profile.jpeg'
import sucsesRio from '../images/riopin/sucses.jpeg'
import questionRio from '../images/riopin/botquestion.jpeg'
import errorRio from '../images/riopin/error.jpeg'
import statisticsRio from '../images/riopin/statistica.jpeg'
import messageRio from '../images/riopin/message.jpeg'
import adminRio from '../images/riopin/adminpage.jpeg'
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
			en: `Developed the frontend of fastpin.uz, a platform for fast and fully automated game top-ups without administrator involvement.

Implemented:

User dashboard

Balance display and management

Internal wallet top-up system

Game purchases using stored balance

Transaction history

Global state management with Zustand

REST API integration using Axios

Responsive UI built with Material UI

The frontend provides a fast, queue-free, and seamless user experience.`,
			ru: `Разработал клиентскую часть проекта fastpin.uz — платформы для быстрого автоматического доната в онлайн-игры без участия администратора.

Реализовано:

Интерфейс личного кабинета пользователя

Отображение и управление балансом

Пополнение внутреннего баланса

Покупка доната в игры из внутреннего баланса

История транзакций

Состояния загрузки и обработки операций

Глобальное управление состоянием через Zustand

Интеграция с backend через REST API (Axios)

UI на базе Material UI

Frontend обеспечивает удобный и быстрый UX без ожиданий и очередей.`,
			uz: `fastpin.uz loyihasining frontend qismi ishlab chiqildi — o‘yinlarga tez va avtomatik donat qilish platformasi.

Amalga oshirilgan:

Foydalanuvchi shaxsiy kabineti

Balansni ko‘rish va boshqarish

Ichki balansni to‘ldirish

Balans orqali o‘yinga donat qilish

Tranzaksiyalar tarixi

Global state boshqaruvi (Zustand)

Backend bilan REST API integratsiyasi

Material UI asosidagi zamonaviy interfeys

Frontend tezkor va qulay foydalanuvchi tajribasini ta’minlaydi.`,
		},
		images: [
			entryFast,
			gameintroFast,
			historypayFast,
			howtopayFast,
			buymodalFast,
		],
		techStack: ['React 19', 'TypeScript', 'MUI v7', 'Vite'],
		liveUrl: 'https://fastpin.uz',
		codeUrl: '',
		featured: true,
	},
	{
		type: 'backend',
		title: 'fastpin.uz',
		description: {
			en: `Built the backend using Golang, implementing a fully automated payment and donation processing system.

Implemented:

User management and balance storage

Internal wallet system

Automated payment processing

Transaction validation logic

Balance deduction during game purchases

Integration with external gaming APIs

Transaction logging

REST API for frontend communication

Optimized PostgreSQL queries

The backend eliminates manual processing, reduces human error, and ensures fast automated transactions.`,
			ru: `Разработал серверную часть на Golang, реализующую автоматизированную систему обработки платежей и донатов без участия администратора.

Реализовано:

Система хранения пользователей и их балансов

Внутренний кошелек (баланс сохраняется и используется позже)

Обработка платежей без ручной проверки

Автоматизация проверки и подтверждения транзакций

Логика списания средств при покупке доната

Интеграция с внешними игровыми API

История транзакций

REST API для взаимодействия с frontend

Оптимизированная работа с PostgreSQL. Backend полностью автоматизирует процесс пополнения и доната, исключая человеческий фактор и задержки.`,
			uz: `Backend Golang da yozilgan bo‘lib, to‘lov va donat jarayonini to‘liq avtomatlashtiradi.

Amalga oshirilgan:

Foydalanuvchilar va ularning balansini saqlash

Ichki hamyon tizimi

To‘lovlarni avtomatik qayta ishlash

Tranzaksiyalarni tekshirish va tasdiqlashni avtomatlashtirish

Donat vaqtida balansdan mablag‘ yechish logikasi

Tashqi o‘yin API lar bilan integratsiya

REST API

PostgreSQL bilan samarali ishlash

Backend inson omilisiz tez va xavfsiz ishlashni ta’minlaydi.`,
		},
		images: [historyoperation, statistics, donations, tops, users],
		techStack: ['Go', 'GORM', 'PostgreSQL', 'JWT', 'REST API'],
		liveUrl: 'https://fastpin.uz',
		codeUrl: '',
		featured: true,
	},
	{
		type: 'frontend',
		title: 'riopin.uz',
		description: {
			en: `Developed an administrative dashboard using React for managing an automated game top-up platform integrated with a Telegram bot.

Implemented:

User management interface

Payment review and confirmation system

Transaction monitoring

Donation status tracking

REST API integration with backend

Role-based access control

Responsive and structured UI

The frontend provides full administrative control over transactions and top-up processes.`,
			ru: `Разработал административную панель на React для управления системой автоматизированного доната в игры через Telegram-бота.

Реализовано:

Интерфейс управления пользователями

Просмотр и подтверждение платежей

Мониторинг транзакций

Отображение статусов донатов

Управление игровыми сервисами

Интеграция с backend через REST API

Реализация role-based доступа (admin)

Адаптивный и структурированный UI

Frontend обеспечивает удобный контроль над платежами и процессом доната.`,
			uz: `React yordamida administrator paneli ishlab chiqildi.

Amalga oshirilgan funksiyalar:

Foydalanuvchilarni boshqarish

To‘lovlarni ko‘rish va tasdiqlash

Tranzaksiyalar monitoringi

Donat holatini kuzatish

Backend bilan REST API orqali integratsiya

Rollar asosidagi kirish nazorati

Responsiv va qulay interfeys

Frontend tizim ustidan to‘liq nazoratni ta’minlaydi.`,
		},
		images: [entryRio, cashRio, gamesRio, profileRio, sucsesRio],
		techStack: ['React 19', 'Tailwind'],
		liveUrl: 'https://riopin.uz',
		codeUrl: '',
		featured: true,
	},
	{
		type: 'backend',
		title: 'riopin.uz',
		description: {
			en: `Built the backend using Python, implementing the core business logic of the automated game top-up system.

Implemented:

Telegram bot (user registration, notifications)

Role-based access system (user / admin)

Payment processing and confirmation logic

External gaming API integrations

Automated donation execution

Transaction logging

Database management

REST API for frontend communication

The backend ensures secure processing, automation, and integration with external services.`,
			ru: `Разработал серверную часть на Python, реализующую бизнес-логику платформы автоматического доната в игры через Telegram-бота.

Реализовано:

Telegram-бот (регистрация пользователей, уведомления)

Система ролей (user / admin)

Обработка и подтверждение платежей

Интеграция с внешними игровыми API

Автоматизация процесса доната

Логирование транзакций

Работа с базой данных

REST API для взаимодействия с frontend

Backend отвечает за безопасность, обработку платежей и интеграцию с внешними сервисами.`,
			uz: `Backend qismi Python da yozilgan va platformaning asosiy logikasini bajaradi.

Amalga oshirilgan funksiyalar:

Telegram bot (ro‘yxatdan o‘tish, bildirishnomalar)

Rollar tizimi (user / admin)

To‘lovlarni qayta ishlash va tasdiqlash

Tashqi o‘yin API lar bilan integratsiya

Donat jarayonini avtomatlashtirish

Tranzaksiyalarni log qilish

Ma’lumotlar bazasi bilan ishlash

Frontend uchun REST API

Backend xavfsiz va barqaror ishlashni ta’minlaydi.`,
		},
		images: [adminRio, statisticsRio, messageRio, questionRio, errorRio],
		techStack: ['python'],
		liveUrl: 'https://riopin.uz',
		codeUrl: '',
		featured: true,
	},
]
