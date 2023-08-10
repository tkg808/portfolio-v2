import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.tsx'
import './main.css'
import { ScreenProvider } from './contexts/ScreenContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<ScreenProvider>
			<App />
		</ScreenProvider>
	</BrowserRouter>
)
