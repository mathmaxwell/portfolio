import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from '../i18n/translations'
import type { Language, Translations } from '../i18n/translations'

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
	t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
)

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>(() => {
		const saved = localStorage.getItem('portfolio-lang')
		if (saved === 'en' || saved === 'ru' || saved === 'uz') return saved
		return 'en'
	})

	const setLanguage = (lang: Language) => {
		setLanguageState(lang)
		localStorage.setItem('portfolio-lang', lang)
	}

	const t = translations[language]

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLang() {
	const ctx = useContext(LanguageContext)
	if (!ctx) throw new Error('useLang must be used within LanguageProvider')
	return ctx
}
