export const Temperature = ({ dates, temperatures }) => {
	return (
		<table className='temperature-table'>
			<thead>
				<tr>
					<th>Date</th>
					<th>Temperature (°C)</th>
				</tr>
			</thead>
			<tbody>
				{dates.map((date, index) => (
					<tr key={index}>
						<td>{new Date(date).toLocaleString()}</td>
						<td>{temperatures[index]} °C</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
