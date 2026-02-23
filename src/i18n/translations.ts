export type Language = 'en' | 'ru' | 'uz'

export const translations = {
	en: {
		nav: {
			home: 'Home',
			about: 'About',
			projects: 'Projects',
			skills: 'Skills',
			contact: 'Contact',
		},
		hero: {
			greeting: "Hi, I'm",
			role: 'Full Stack Developer',
			subtitle:
				'I build modern web applications with beautiful UIs and robust backends.',
			cta: 'View My Work',
			contact: 'Contact Me',
		},
		about: {
			title: 'About Me',
			description1:
				'I am a passionate Full Stack Developer with experience in building web applications from design to deployment. I love creating clean, efficient, and user-friendly interfaces.',
			description2:
				'When I am not coding, I enjoy exploring new technologies and continuously improving my skills.',
			yearsExp: 'Years of Experience',
			projects: 'Projects Completed',
			clients: 'Happy Clients',
		},
		projects: {
			title: 'My Projects',
			subtitle: 'Click on any project to see details and screenshots',
			frontend: 'Frontend',
			backend: 'Backend',
			viewLive: 'Live Demo',
			viewCode: 'Source Code',
			techStack: 'Tech Stack',
			seeDetails: 'See Details',
			photo: 'photo',
			of: 'of',
		},
		skills: {
			title: 'My Skills',
			subtitle: 'Technologies I work with daily',
			frontend: 'Frontend',
			backend: 'Backend',
			tools: 'Tools & DevOps',
			expert: 'Expert',
			advanced: 'Advanced',
			comfortable: 'Comfortable',
		},
		contact: {
			title: 'Get In Touch',
			subtitle:
				"Have a project in mind or just want to say hi? I'd love to hear from you.",
			orReach: 'Reach me through',
			copied: 'Copied!',
		},
		footer: {
			rights: `If something breaks, it's a feature`,
			madeWith: `Nothing interesting here anymore"`,
		},
	},

	ru: {
		nav: {
			home: 'Главная',
			about: 'Обо мне',
			projects: 'Проекты',
			skills: 'Навыки',
			contact: 'Контакты',
		},
		hero: {
			greeting: 'Привет, я',
			role: 'Full Stack Разработчик',
			subtitle:
				'Я создаю современные веб-приложения с красивым интерфейсом и надёжным бэкендом.',
			cta: 'Посмотреть проекты',
			contact: 'Написать мне',
		},
		about: {
			title: 'Обо мне',
			description1:
				'Я Full Stack разработчик с опытом создания веб-приложений от дизайна до деплоя. Я люблю создавать чистые, эффективные и удобные интерфейсы.',
			description2:
				'Когда я не пишу код, я изучаю новые технологии и постоянно совершенствую свои навыки.',
			yearsExp: 'Лет опыта',
			projects: 'Проектов выполнено',
			clients: 'Довольных клиентов',
		},
		projects: {
			title: 'Мои проекты',
			subtitle: 'Нажмите на проект, чтобы увидеть детали и скриншоты',
			frontend: 'Фронтенд',
			backend: 'Бэкенд',
			viewLive: 'Демо',
			viewCode: 'Исходный код',
			techStack: 'Технологии',
			seeDetails: 'Подробнее',
			photo: 'фото',
			of: 'из',
		},
		skills: {
			title: 'Мои навыки',
			subtitle: 'Технологии, с которыми я работаю каждый день',
			frontend: 'Фронтенд',
			backend: 'Бэкенд',
			tools: 'Инструменты и DevOps',
			expert: 'Эксперт',
			advanced: 'Продвинутый',
			comfortable: 'Уверенный',
		},
		contact: {
			title: 'Связаться со мной',
			subtitle:
				'Есть идея для проекта или просто хотите поговорить? Напишите мне!',
			orReach: 'Напишите мне через',
			copied: 'Скопировано!',
		},
		footer: {
			rights: `Если что сломается — это фича`,
			madeWith: `Тут уже ничего интересного`,
		},
	},

	uz: {
		nav: {
			home: 'Bosh sahifa',
			about: 'Men haqimda',
			projects: 'Loyihalar',
			skills: "Ko'nikmalar",
			contact: 'Aloqa',
		},
		hero: {
			greeting: 'Salom, men',
			role: 'Full Stack Dasturchi',
			subtitle:
				'Men chiroyli UI va mustahkam backend bilan zamonaviy veb-ilovalar yarataman.',
			cta: "Loyihalarni ko'rish",
			contact: 'Murojaat qilish',
		},
		about: {
			title: 'Men haqimda',
			description1:
				'Men dizayndan deploymentgacha veb-ilovalar yaratishda tajribaga ega ishtiyoqli Full Stack dasturchiman.',
			description2:
				"Kod yozmasam, yangi texnologiyalarni o'rganaman va doim o'z ko'nikmalarimni rivojlantiraman.",
			yearsExp: 'Yillik tajriba',
			projects: 'Bajarilgan loyihalar',
			clients: 'Mamnun mijozlar',
		},
		projects: {
			title: 'Mening loyihalarim',
			subtitle: "Tafsilotlar va skrinshot ko'rish uchun loyihaga bosing",
			frontend: 'Frontend',
			backend: 'Backend',
			viewLive: 'Demo',
			viewCode: 'Manba kodi',
			techStack: 'Texnologiyalar',
			seeDetails: 'Batafsil',
			photo: 'rasm',
			of: 'dan',
		},
		skills: {
			title: "Mening ko'nikmalarim",
			subtitle: 'Har kuni ishlaydigan texnologiyalar',
			frontend: 'Frontend',
			backend: 'Backend',
			tools: 'Vositalar va DevOps',
			expert: 'Ekspert',
			advanced: 'Yuqori daraja',
			comfortable: 'Tajribali',
		},
		contact: {
			title: "Bog'lanish",
			subtitle:
				"Loyiha g'oyangiz bormi yoki shunchaki salom demоqchimisiz? Men eshitaman!",
			orReach: 'Murojaat qiling',
			copied: 'Nusxalandi!',
		},
		footer: {
			rights: `Agar biror narsa buzilsa — bu ficha`,
			madeWith: `Bu yerda boshqa qiziqarli narsa yo'q`,
		},
	},
}

export type Translations = typeof translations.en
