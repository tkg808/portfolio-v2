import { createContext, useState, useEffect } from 'react'

const SMALL_PHONE = 375
const LARGE_PHONE = 480
const TABLET = 768
const LAPTOP = 1024

const getSizeGroup = (width: number) => {
	if (width <= SMALL_PHONE) return 0
	if (width <= LARGE_PHONE) return 1
	if (width <= TABLET) return 2
	if (width <= LAPTOP) return 3
	return 4
}

export const ScreenContext = createContext<null | any>(null)

export const ScreenProvider = ({ children }: { children: any }) => {
	const [screenSizeGroup, setScreenSizeGroup] = useState<number>(getSizeGroup(window.innerWidth))
	const [isMobile, setIsMobile] = useState<boolean>(getSizeGroup(window.innerWidth) <= 2)

	const handleResize = (e: Event) => {
		const newScreen = getSizeGroup(window.innerWidth)

		setScreenSizeGroup(newScreen)
		setIsMobile(newScreen <= 2)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<ScreenContext.Provider value={{ screenSizeGroup, isMobile }}>
			{children}
		</ScreenContext.Provider>
	)
}
