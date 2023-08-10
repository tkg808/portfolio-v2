import Style from './Home.module.css'
import { motion } from 'framer-motion'

export const Home = () => {
	return (
		<>
			<div className={Style.container}>
				<div className={Style.content}>
					<motion.h1
						className={Style.name}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: 'linear' }}
					>
						Tyson Gomes
					</motion.h1>
					<motion.h3
						className={Style.role}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.2, ease: 'linear' }}
					>
						Software Engineer
					</motion.h3>
					<motion.h5
						className={Style.slogan}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.2, ease: 'linear' }}
					>
						Solution in hand, you in mind
					</motion.h5>
				</div>
			</div>
		</>
	)
}
