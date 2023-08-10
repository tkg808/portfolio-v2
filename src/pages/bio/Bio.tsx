import Style from './Bio.module.css'
import { motion } from 'framer-motion'
import { PageTitle } from '../../components/pageTitle/PageTitle'

export const Bio = () => {
	return (
		<>
			<div className={Style.container}>
				<PageTitle title='Bio' />
				<div className={Style.content}>
					<motion.div
						className={Style.text}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.2, ease: 'linear' }}
					>
						<p>
							Hi, I'm Tyson, a software engineer originally from Hawai`i and currently living in San
							Diego, California.
						</p>
						<p>
							My passion for effective and efficient solutions that resonates with people extends
							beyond technology. As a naturally analytical and curious person, I am thrilled to be
							in a field where continuous learning and collaborative problem-solving are
							common-place, as these things allow me to pursue my passion of making a positive
							impact through technology. When I'm not immersed in code, you can find me exploring
							diverse interests – from challenging my mind with chess to staying active at the gym
							or enjoying the beach.
						</p>
						<p>Let's connect and build something extraordinary together!</p>
					</motion.div>
				</div>
			</div>
		</>
	)
}
