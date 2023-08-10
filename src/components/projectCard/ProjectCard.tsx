import Style from './ProjectCard.module.css'
import { BsGithub } from 'react-icons/bs'

interface IProject {
	name: string
	image: string
	repo: string
	app: string
	description: string
	tech: string[]
}

interface IProjectCard {
	project: IProject
	key: number
}

export const ProjectCard = ({ project, key }: IProjectCard) => {
	return (
		<>
			<div className={Style.container} key={key}>
				<div className={Style.top}>
					<a href={project.app}>
						<div className={Style.title}>
							<h3>{project.name}</h3>
						</div>
						<div className={Style.image}>
							<img src={project.image} alt='' />
						</div>
					</a>
					<div className={Style.repo}>
						<a href={project.repo}>
							<BsGithub />
						</a>
					</div>
				</div>
				<div className={Style.text}>
					<p>{project.description}</p>
				</div>
			</div>
		</>
	)
}
