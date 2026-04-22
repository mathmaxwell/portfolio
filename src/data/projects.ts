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
//argus
import chatArgus from '../images/argus/chat.jpeg'
import offersArgus from '../images/argus/offers.jpeg'
import profileArgus from '../images/argus/profile.jpeg'
import registerArgus from '../images/argus/register.jpeg'
import statisticsArgus from '../images/argus/statistics.jpeg'

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
			en: `Engineered the client-side architecture of fastpin.uz — a zero-latency, fully automated game top-up platform that eliminates the need for manual operator intervention entirely.

Key engineering decisions:

Reactive state management via Zustand with fine-grained store slices to prevent unnecessary re-renders across complex transaction flows

Optimistic UI updates ensuring users receive instant feedback before server confirmation, dramatically improving perceived performance

Token-based session lifecycle management with automatic refresh logic and silent re-authentication

Declarative REST API layer built on Axios interceptors for centralized error normalization and request deduplication

Component architecture designed around atomic design principles for maximum reusability

Pixel-perfect responsive layouts via Material UI v7 with a custom design system override

The result is a frictionless, queue-free experience that converts faster and retains users longer than traditional manual top-up flows.`,
			ru: `Спроектировал клиентскую архитектуру fastpin.uz — платформы автоматического доната в игры с нулевой задержкой, полностью исключающей ручное вмешательство оператора.

Ключевые технические решения:

Реактивное управление состоянием через Zustand с гранулярными store-срезами для предотвращения лишних ре-рендеров при сложных транзакционных потоках

Оптимистичные обновления UI — пользователь получает мгновенную обратную связь ещё до подтверждения сервера

Управление жизненным циклом сессии на основе токенов с автоматическим обновлением и тихой повторной аутентификацией

Декларативный REST API-слой на базе Axios-интерсепторов для централизованной нормализации ошибок

Компонентная архитектура по принципам atomic design для максимальной переиспользуемости

Адаптивные макеты pixel-perfect на Material UI v7 с кастомной дизайн-системой

Результат — бесшовный, безочередной UX, обеспечивающий более высокую конверсию по сравнению с классическими ручными схемами.`,
			uz: `fastpin.uz ning mijoz tomonidagi arxitekturasi loyihalandi — operator aralashuvisiz to'liq avtomatlashtirilgan, nol kechikishli o'yin donat platformasi.

Asosiy texnik qarorlar:

Zustand orqali reaktiv holat boshqaruvi — murakkab tranzaksiya oqimlarida keraksiz qayta renderlarning oldini olish uchun granular store-bo'laklari

Optimistik UI yangilanishlari — server tasdig'idan oldin foydalanuvchi darhol javob oladi

Token asosidagi sessiya boshqaruvi: avtomatik yangilash va jim qayta autentifikatsiya

Axios interceptorlar asosidagi deklarativ REST API qatlami — markazlashtirilgan xato normalizatsiyasi

Atomic design tamoyillari bo'yicha komponent arxitekturasi

Material UI v7 va maxsus dizayn tizimi asosida pixel-perfect responsiv layoutlar

Natija — an'anaviy qo'lda bajarilgan jarayonlarga nisbatan yuqori konversiya va foydalanuvchi ushlanishi.`,
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
			en: `Architected a high-throughput, concurrent payment processing engine in Golang powering the entire automated top-up infrastructure of fastpin.uz.

Core engineering highlights:

Goroutine-based concurrency model enabling thousands of simultaneous transaction pipelines with minimal memory overhead

Idempotent payment processing logic preventing double-charges under network retries or race conditions

Multi-layer transaction validation: cryptographic signature verification, balance pre-checks, and external API handshake sequencing

Structured integration layer with gaming vendor APIs — abstracting provider-specific protocols behind a unified internal interface

JWT-based stateless authentication with short-lived access tokens and secure refresh token rotation

PostgreSQL schema optimized for high write throughput with proper indexing on transaction audit tables

Atomic balance operations using database-level transactions to guarantee consistency under concurrent load

The backend processes top-ups in under 500ms end-to-end, with no manual intervention required at any stage.`,
			ru: `Спроектировал высокопроизводительный движок обработки платежей на Golang, обеспечивающий всю инфраструктуру автоматизированных донатов fastpin.uz.

Ключевые технические решения:

Модель конкурентности на горутинах — тысячи параллельных транзакционных пайплайнов с минимальными накладными расходами по памяти

Идемпотентная логика обработки платежей, исключающая двойные списания при сетевых повторах и гонках условий

Многоуровневая валидация транзакций: проверка криптографических подписей, предварительная проверка баланса, последовательность хендшейков с внешними API

Уровень интеграции с игровыми вендорами — провайдер-специфичные протоколы скрыты за единым внутренним интерфейсом

JWT-аутентификация без сохранения состояния: короткоживущие access-токены и ротация refresh-токенов

Схема PostgreSQL оптимизирована под высокую запись с индексами на таблицах аудита транзакций

Атомарные операции с балансом через транзакции на уровне БД — консистентность при параллельной нагрузке гарантирована

Backend обрабатывает донат менее чем за 500 мс от начала до конца без какого-либо ручного вмешательства.`,
			uz: `fastpin.uz ning to'liq avtomatlashtirilgan donat infratuzilmasini ta'minlovchi Golang da yuqori unumli to'lov qayta ishlash mexanizmi loyihalandi.

Asosiy texnik yechimlar:

Goroutine asosidagi parallellik modeli — minimal xotira sarfi bilan minglab bir vaqtli tranzaksiya pipelinelari

Tarmoq takrorlashlari va race conditionlarda ikkilamchi hisobdan chiqarishni oldini oluvchi idempotent to'lov logikasi

Ko'p qatlamli tranzaksiya validatsiyasi: kriptografik imzo tekshiruvi, balans oldindan tekshiruvi, tashqi API handshake ketma-ketligi

O'yin vendor API lari bilan integratsiya qatlami — provayder-spetsifik protokollar yagona ichki interfeys ortiga yashirilgan

JWT asosidagi holatsiz autentifikatsiya: qisqa muddatli access tokenlar va refresh token rotatsiyasi

Yuqori yozish unumdorligi uchun optimallashtirilgan PostgreSQL sxemasi

Parallel yuklamada izchillikni kafolatlovchi DB darajasidagi atomik balans operatsiyalari

Backend hech qanday qo'lda aralashuvsiz, boshidan oxirigacha 500 ms dan kam vaqtda donatni qayta ishlaydi.`,
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
			en: `Architected a comprehensive operations intelligence dashboard in React, providing administrators with full real-time visibility and control over an automated Telegram-bot-driven game top-up platform.

Key engineering decisions:

Role-based rendering logic — UI components conditionally expose privileged actions based on verified JWT claims, preventing unauthorized state mutations

Live transaction feed with optimistic status transitions and reconciliation against server-confirmed states

Structured data tables with multi-criteria filtering, sortable columns, and paginated server-side queries for handling large datasets without performance degradation

Unified API client layer with interceptor-based token injection, automatic session recovery, and granular HTTP error classification

Form validation pipeline with schema-driven rules, ensuring data integrity before any write operation reaches the backend

Adaptive layout engineered for both desktop operation centers and tablet-based on-the-go management

The dashboard gives admins a single pane of glass over every transaction, user, and service state — eliminating the need for direct database access.`,
			ru: `Спроектировал комплексный операционный дашборд на React, обеспечивающий администраторам полную видимость в реальном времени над автоматизированной платформой доната через Telegram-бота.

Ключевые технические решения:

Ролевая логика рендеринга — UI-компоненты открывают привилегированные действия только при подтверждённых JWT-клеймах, исключая несанкционированные мутации состояния

Живая лента транзакций с оптимистичными переходами статусов и сверкой с подтверждёнными серверными данными

Структурированные таблицы с многокритериальной фильтрацией, сортировкой и серверной пагинацией для обработки больших датасетов без деградации производительности

Единый API-клиент с инжекцией токенов через интерсепторы и автовосстановлением сессии

Пайплайн валидации форм на основе схем для гарантии целостности данных до отправки на backend

Адаптивный макет для десктоп-операционных центров и планшетного управления на ходу

Дашборд даёт администратору единое окно над всеми транзакциями, пользователями и сервисами — без необходимости прямого доступа к базе данных.`,
			uz: `React da administrator uchun kompleks operatsion dashboard loyihalandi — Telegram-bot orqali ishlaydigan avtomatlashtirilgan donat platformasi ustidan to'liq real vaqt nazorati.

Asosiy texnik qarorlar:

Rol asosidagi render logikasi — UI komponentlari imtiyozli amallarni faqat tasdiqlangan JWT claimlar asosida ko'rsatadi

Optimistik holat o'tishlari va server tasdiqlangan ma'lumotlar bilan muvofiqlashtirish bilan jonli tranzaksiya lenti

Ko'p mezonli filtrlash, saralash va katta ma'lumotlar to'plamlarini ishlash uchun server tomonidan sahifalangan jadvallar

Interceptor orqali token in'eksiyasi va avtomatik sessiya tiklanishi bilan yagona API mijoz qatlami

Backend ga yozishdan oldin ma'lumotlar yaxlitligini kafolatlovchi sxema asosidagi forma validatsiya pipeline

Desktop operatsion markazlar va planshet boshqaruvi uchun moslashuvchan layout

Dashboard administratorga har bir tranzaksiya, foydalanuvchi va xizmat holati ustidan yagona ko'rish oynasini beradi.`,
		},
		images: [entryRio, cashRio, gamesRio, profileRio, sucsesRio],
		techStack: ['React 19', 'Tailwind'],
		liveUrl: 'https://riopin.uz',
		codeUrl: '',
		featured: true,
	},
	{
		type: 'backend',
		title: 'argus-donat.uz',
		description: {
			en: `Engineered the backend infrastructure of Argus — a full-featured service marketplace platform designed for high concurrency, real-time communication, and data-driven business intelligence.

Core engineering highlights:

Real-time bidirectional messaging system enabling instant communication between service providers and clients without polling overhead

Dynamic offer lifecycle engine — state machine-driven transitions (draft → active → accepted → completed) with atomic status updates preventing race conditions

Multi-dimensional analytics pipeline aggregating platform-wide transaction data into actionable business metrics and visual dashboards

Secure multi-role authentication system with cryptographically signed tokens, granular permission scopes, and session invalidation on privilege escalation

Structured onboarding flow with asynchronous profile validation, document verification hooks, and progressive access unlocking

Optimized relational data model with denormalized read paths for dashboard queries, reducing latency on high-frequency reporting endpoints

The backend powers a complete service economy — from initial user registration through offer negotiation to final transaction settlement — with zero manual moderation required.`,
			ru: `Разработал серверную инфраструктуру Argus — полнофункциональной платформы-маркетплейса услуг, спроектированной под высокую конкурентность, коммуникацию в реальном времени и аналитику на основе данных.

Ключевые технические решения:

Двунаправленная система обмена сообщениями в реальном времени — мгновенная связь между исполнителями и заказчиками без polling-накладных расходов

Движок жизненного цикла офферов на основе конечного автомата (draft → active → accepted → completed) с атомарными переходами статусов, исключающими гонки условий

Многомерный аналитический пайплайн — агрегация транзакционных данных платформы в actionable бизнес-метрики и визуальные дашборды

Многоролевая аутентификация с криптографически подписанными токенами, гранулярными скоупами разрешений и инвалидацией сессий при повышении привилегий

Структурированный onboarding с асинхронной валидацией профиля, хуками верификации документов и прогрессивной разблокировкой доступа

Оптимизированная реляционная модель данных с денормализованными путями чтения для дашборд-запросов — снижение задержки на высокочастотных отчётных эндпоинтах

Backend обеспечивает полный цикл сервисной экономики — от регистрации до финального расчёта по сделке — без какой-либо ручной модерации.`,
			uz: `Argus — yuqori parallellik, real vaqt kommunikatsiyasi va ma'lumotlarga asoslangan biznes razveduvchi uchun mo'ljallangan to'liq xizmatlar marketplace platformasining backend infratuzilmasi ishlab chiqildi.

Asosiy texnik yechimlar:

Real vaqtli ikki tomonlama xabar almashish tizimi — polling xarajatlarisiz xizmat ko'rsatuvchilar va mijozlar o'rtasida darhol muloqot

Offer hayot tsikli mexanizmi — davlat mashinasi asosidagi o'tishlar (draft → active → accepted → completed) bilan race conditionlarni oldini oluvchi atomik holat yangilanishlari

Ko'p o'lchovli analitik pipeline — platformadagi tranzaksiya ma'lumotlarini vizual dashboardlar va actionable biznes metrikalariga aylantirish

Kriptografik imzolangan tokenlar, granular ruxsat scopelari va imtiyoz oshirilganda sessiyani bekor qilish bilan ko'p rolali autentifikatsiya tizimi

Asinxron profil validatsiyasi, hujjat tekshiruvi hooklari va progressiv kirish ochilishi bilan tuzilgan onboarding oqimi

Dashboard so'rovlari uchun denormalizatsiya qilingan o'qish yo'llari bilan optimallashtirilgan relyatsion ma'lumotlar modeli

Backend to'liq xizmat iqtisodiyotini ta'minlaydi — dastlabki ro'yxatdan o'tishdan yakuniy hisob-kitobgacha — hech qanday qo'lda moderatsiyasiz.`,
		},
		images: [registerArgus, profileArgus, offersArgus, chatArgus, statisticsArgus],
		techStack: ['Python', 'FastAPI', 'PostgreSQL', 'WebSocket', 'JWT'],
		liveUrl: '',
		codeUrl: '',
		featured: true,
	},
]
