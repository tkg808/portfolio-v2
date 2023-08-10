import { PageTitle } from '../../components/pageTitle/PageTitle'
import Style from './Contact.module.css'
import { motion } from 'framer-motion'

export const Contact = () => {
	const contactList = [
		{ text: 'Email', link: 'mailto:tyson.k.gomes@gmail.com' },
		{ text: 'Github', link: 'https://github.com/tkg808' },
		{ text: 'LinkedIn', link: 'https://www.linkedin.com/in/tysonkgomes/' },
		{
			text: 'Resume',
			link: 'https://docs.google.com/document/d/1aazXXb5DCL7LABUnmWUxlLEmzXcbHcwX8vOgQbDcOgc/edit?usp=sharing',
		},
	]

	return (
		<>
			<div className={Style.container}>
				<PageTitle title='Contact' />
				<div className={Style.content}>
					<motion.div
						className={Style.list}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.2, ease: 'linear' }}
					>
						{contactList.map((contact) => {
							return (
								<motion.a
									href={contact.link}
									target='_blank'
									rel='noopener noreferrer'
									className={Style.list_item}
									whileHover={{ x: 10, transition: { duration: 0.2 } }}
									key={contact.link}
								>
									{contact.text}
								</motion.a>
							)
						})}
					</motion.div>
				</div>
			</div>
		</>
	)
}
