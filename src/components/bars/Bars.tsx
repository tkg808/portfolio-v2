import { useState, useRef, useEffect, useContext } from 'react'
import Style from './Bars.module.css'
import { motion } from 'framer-motion'
import { ScreenContext } from '../../contexts/ScreenContext'

interface IBars {
	handleClick: () => void
	showDropdown: boolean
}

const ICON_FULL_WIDTH = 64
const ROOT_SIZE = 16

export const Bars = ({ handleClick, showDropdown }: IBars) => {
	const { screenSizeGroup, isMobile } = useContext(ScreenContext)
	const [iconWidth, setIconWidth] = useState<number>(0)
	const ref = useRef<HTMLHeadingElement | null>(null)

	useEffect(() => {
		if (isMobile && ref?.current) {
			const { width } = ref.current.getBoundingClientRect()
			setIconWidth(width)
		}
	}, [screenSizeGroup])

	// Look into using useMemo or useState/useEffect so these calculations aren't done on every render
	const containerHeight = iconWidth * 0.75
	const isScreenSmall = iconWidth !== ICON_FULL_WIDTH
	const barHeight = ROOT_SIZE * (isScreenSmall ? 0.3 : 0.4)
	const deltaY = containerHeight / 2 - barHeight / 2
	const topYFrames = [0, deltaY, deltaY, deltaY]
	const topRotateFrames = [0, 0, 0, 45]
	const botYFrames = topYFrames.map((frame) => frame * -1)
	const botRotateFrames = topRotateFrames.map((frame) => frame * -1)
	const newBarWidth = '100%'
	const midScaleFrames = [1, 1, 0, 0]

	return (
		<>
			<div className={Style.container}>
				<motion.div
					className={Style.icon}
					ref={ref}
					onClick={handleClick}
				>
					<motion.div
						className={Style.bar}
						animate={{
							y: showDropdown ? topYFrames : [...topYFrames].reverse(),
							rotate: showDropdown ? topRotateFrames : [...topRotateFrames].reverse(),
							originX: '50%',
							originY: '50%',
							width: showDropdown ? newBarWidth : '100%',
						}}
						transition={{ duration: 0.4 }}
					/>
					<motion.div
						className={Style.bar}
						animate={{
							scaleX: showDropdown ? midScaleFrames : [...midScaleFrames].reverse(),
							width: showDropdown ? newBarWidth : '100%',
						}}
						transition={{ duration: 0.4, transformOrigin: 'center' }}
					/>
					<motion.div
						className={Style.bar}
						animate={{
							y: showDropdown ? botYFrames : [...botYFrames].reverse(),
							rotate: showDropdown ? botRotateFrames : [...botRotateFrames].reverse(),
							originX: '50%',
							originY: '50%',
							width: showDropdown ? newBarWidth : '100%',
						}}
						transition={{ duration: 0.4 }}
					/>
				</motion.div>
			</div>
		</>
	)
}
