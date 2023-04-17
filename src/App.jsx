import { useState } from 'react'
import Timing from './components/Timing.jsx'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<h1> Effects </h1>

			<Timing />
		</div>
	)
}

export default App
