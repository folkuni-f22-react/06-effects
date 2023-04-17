import { useState } from 'react'
import './Timing.css'

const Timing = () => {
	const [showMessage, setShowMessage] = useState(false)
	const [count, setCount] = useState(0)

	
	// Vi behöver ett sätt att bara köra denna kod när komponenten renderas för första gången
	// setTimeout(() => {
	// 	console.log('Timing: detta ska bara visas första gången')
	// 	setCount(c => c + 1)
	// 	setShowMessage(true)
	// }, 1000)



	const handleClick = () => {
		// Visa ett meddelande under 2 sekunder. Sedan ska det tas bort av sig självt.
		console.log('handleClick 1')
		setShowMessage(true)

		setTimeout(() => {
			console.log('handleClick 2')
			setCount(c => c + 1)
			setShowMessage(false)
		}, 2000)

		console.log('handleClick 3')
	}

	return (
		<section className="timing">
		<button onClick={handleClick}> Visa tidsbegränsat meddelande </button>
		<p> Count: {count} </p>
		{showMessage && <p> Just nu: super-rabatt på barnkläder! </p>}
		</section>
	)
}

export default Timing
