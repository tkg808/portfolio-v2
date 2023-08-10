import Style from './Projects.module.css'
import { projectList } from '../../assets/projectList'
import { useState } from 'react'
import { IProject } from '../../types/Project'
import { motion, AnimatePresence } from 'framer-motion'
import { PageTitle } from '../../components/pageTitle/PageTitle'

export const Projects = () => {
	const [activeProject, setActiveProject] = useState<IProject | null>(null)

	return (
		<>
			<div className={Style.container}>
				<PageTitle title='Projects' />
				<div className={Style.content}>
					<motion.div
						className={Style.list}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.2, ease: 'linear' }}
					>
						{projectList.map((project) => {
							return (
								<motion.div
									className={Style.list_item}
									onClick={() => setActiveProject(project)}
									key={project.app}
									whileHover={{ x: 10, transition: { duration: 0.3 } }}
								>
									{project.name}
								</motion.div>
							)
						})}
					</motion.div>
					<AnimatePresence mode='wait'>
						{activeProject && (
							<motion.div
								className={Style.card}
								key={activeProject.app}
								initial={{ opacity: 0, x: -20 }}
								animate={{
									opacity: 1,
									x: 0,
									transition: { duration: 0.4, ease: 'linear' },
								}}
								exit={{ opacity: 0, x: -20 }}
							>
								<h3>{activeProject.name}</h3>
								<p className={Style.description}>{activeProject.description}</p>
								<div className={Style.links}>
									<a
										href={activeProject.app}
										target='_blank'
										rel='noopener noreferrer'
										className={Style.link}
									>
										App
									</a>
									<a
										href={activeProject.repo}
										target='_blank'
										rel='noopener noreferrer'
										className={Style.link}
									>
										Repo
									</a>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	)
}
