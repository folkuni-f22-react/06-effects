import { useState, useEffect } from 'react'

// Bad AJAX: fetches data every time the component is mounted
// Component is toggled in App component
// Solutions:
// 1. Lägg AJAX i en parent component, som alltid är synlig.
// 2. Använd CSS för att göra komponenten osynlig, i stället för att ta bort den.
// 3. Spara datan i en store(Recoil, Context eller Redux) och hämta bara om datan inte finns i store

const BadAjax = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		console.log('useEffect on mount')
		async function fetchData() {
			// Remember to use try/catch
			const url = 'https://forverkliga.se/JavaScript/api/simple.php?key=value'
			const response = await fetch(url)
			const dataFromApi = await response.json()
			setData( dataFromApi )
		}
		setTimeout(fetchData, 1000)
	}, [])

	return (
		<section className="bad-ajax framed">
		<h2> Bad AJAX </h2>
		{ data === null
			? <p> Please wait, fetching data... </p>
			: <p> Data: {data.message} </p>
		}
		</section>
	)
}

export default BadAjax

// https://forverkliga.se/JavaScript/api/simple.php