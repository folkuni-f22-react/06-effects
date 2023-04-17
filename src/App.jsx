import { useState } from 'react'
import Timing from './components/Timing.jsx'
import BadAjax from './components/BadAjax.jsx'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	const [showData, setShowData] = useState(false)

	return (
		<div className="App">
			<h1> Effects </h1>

			<Timing />

			{showData ? <BadAjax /> : null}

			<button onClick={() => setShowData(!showData)}> Toggle show data </button>
		</div>
	)
}

export default App
