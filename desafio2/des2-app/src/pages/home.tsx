import { Component } from 'react'
import api  from '../utils/api'

class Home extends Component {

	state = {
		routes: [
			{title: '', 
			startPosition: {
				lat: Number,
				long: Number
			},
			endPosition: {
				lat: Number,
				long: Number
			}}
		] 
	}

	componentDidMount(){
	 api.get('/routes')
		.then(res => {
			this.setState({routes: res.data})
		});
	}
	render(){

		const {routes} = this.state;
		return(
			<div>
				<h1> Imersão FullCycle - Desafio 2 </h1>
				<table>
					<thead>
						<tr>
							<th>Rota</th>
							<th>Início da corrida (Lat/Lon)</th>
							<th>Fim da corrida (Lat/Lon)</th>
						</tr>
					</thead>
					<tbody>
						{routes.map(dado => 
							<tr>
								<td>{dado.title}</td>
								<td>{dado.startPosition.lat} / {dado.startPosition.long}</td>
								<td>{dado.endPosition.lat} / {dado.endPosition.long}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Home