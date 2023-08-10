import { useEffect, useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Home } from './pages/home/Home'
import { Bio } from './pages/bio/Bio'
import { Projects } from './pages/projects/Projects'
import { Contact } from './pages/contact/Contact'
import Style from './App.module.css'
import { motion } from 'framer-motion'
import { ScreenContext } from './contexts/ScreenContext'

export const App = () => {
	const {isMobile} = useContext(ScreenContext)
	const [showDropdown, setShowDropdown] = useState<boolean>(false)

	const handleClose = () => {
		showDropdown && setShowDropdown(false)
	}

	useEffect(handleClose, [isMobile])

	return (
		<>
			<div
				className={Style.container}
				onClick={handleClose}
			>
				<Header
					isMobile={isMobile}
					showDropdown={showDropdown}
					setShowDropdown={setShowDropdown}
				/>
				<div className={Style.bg_wrapper}>
					<motion.div
						className={Style.background}
						animate={{ rotate: 360 }}
						transition={{ ease: 'linear', duration: 90, repeat: Infinity }}
					/>
				</div>
				<main className={Style.main}>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/bio'
							element={<Bio />}
						/>
						<Route
							path='/projects'
							element={<Projects />}
						/>
						<Route
							path='/contact'
							element={<Contact />}
						/>
					</Routes>
				</main>
			</div>
		</>
	)
}
