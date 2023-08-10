import Style from './PageTitle.module.css'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { ScreenContext } from '../../contexts/ScreenContext'

interface IPageTitle {
	title: string
}

export const PageTitle = ({ title }: IPageTitle) => {
	const { isMobile } = useContext(ScreenContext)

	return (
		<>
			<div className={Style.container}>
				<motion.h1
					className={Style.title}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, ease: 'linear' }}
				>
					{title}
					<motion.div
						className={Style.slider}
						animate={{ width: '100%', left: 0 }}
						transition={{
							delay: 0.4,
							duration: 0.2,
							ease: 'linear',
							transformOrigin: isMobile ? 'center' : 'left',
						}}
					/>
				</motion.h1>
			</div>
		</>
	)
}
