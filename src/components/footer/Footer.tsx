import Style from './Footer.module.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const Footer = () => {
	return (
		<>
			<div className={Style.container}>
        <div className={Style.nav}>
          <p>© 2023</p>
        </div>
				<nav className={Style.nav}>
					<ul className={Style.links}>
						<a href='https://github.com/tkg808'>
							<BsGithub />
						</a>
						<a href='https://www.linkedin.com/in/tysonkgomes/'>
							<BsLinkedin />
						</a>
					</ul>
				</nav>
			</div>
		</>
	)
}
