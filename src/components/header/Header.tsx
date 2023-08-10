import { Link } from 'react-router-dom'
import Style from './Header.module.css'
import { Logo } from '../logo/Logo'
import { Bars } from '../bars/Bars'
import { motion, AnimatePresence } from 'framer-motion'

interface IHeader {
	isMobile: boolean
	showDropdown: boolean
	setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

interface INavLink {
	link: string
	text: string
}

export const Header = ({ isMobile, showDropdown, setShowDropdown }: IHeader) => {
	const handleShowDropdown = () => setShowDropdown(!showDropdown)
	const navLinks: INavLink[] = [
		{ link: '/', text: 'Home' },
		{ link: '/bio', text: 'Bio' },
		{ link: '/projects', text: 'Projects' },
		{ link: '/contact', text: 'Contact' },
	]

	return (
		<>
			<div className={Style.container}>
				<Logo />
				<nav className={Style.nav}>
					{!isMobile && (
						<ul className={Style.links}>
							{navLinks.map((navLink) => {
								return (
									<Link
										to={navLink.link}
										key={navLink.text}
									>
										{navLink.text}
									</Link>
								)
							})}
						</ul>
					)}

					{isMobile && (
						<Bars
							handleClick={handleShowDropdown}
							showDropdown={showDropdown}
						/>
					)}

					<AnimatePresence mode='wait'>
						{showDropdown && (
							<ul className={Style.dropdown}>
								{navLinks.map((navLink, i) => {
									return (
										<motion.div
											className={Style.link}
											key={navLink.text}
											initial={{ opacity: 0, y: -10 }}
											animate={{
												opacity: 1,
												y: 0,
												transition: { delay: 0.05 * (i + 1), duration: 0.2, ease: 'linear' },
											}}
											// exit={{
											// 	opacity: 0,
											// 	y: -10,
											// 	transition: { duration: 0.2, ease: 'linear' },
											// }}
										>
											<Link to={navLink.link}>{navLink.text}</Link>
										</motion.div>
									)
								})}
							</ul>
						)}
					</AnimatePresence>
				</nav>
			</div>
		</>
	)
}
