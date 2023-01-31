import { useState } from "react";
import githubLogo from "../assets/logo-github.svg";
import SearchBar from "../components/SearchBar";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import { api } from "../services/api";


function App() {

	const [currentRepo, setCurrentRepo] = useState('');
	const [reposList, setReposList] = useState([]);

	const handleSearchRepo = async () => {
		try {

			if (currentRepo === '') {
				alert('insira um repositório');
				return;
			}

			const { data } = await api.get(`repos/${currentRepo}`);

			if (data.id) {
				const isAdd = reposList.find(repo => repo.id === data.id);

				if (isAdd) {
					alert('este repositório já existe na lista');
					return;
				}
				setReposList(prev => [...prev, data]);
				setCurrentRepo('');
				return;
			}

		} catch (error) {
			alert('repositório não encontrado');
		}
	};

	const handleRemoveRepo = (id) => {
		const atualizaRepos = reposList.filter(repo => repo.id !== id);
		setReposList(atualizaRepos);
	};


	return (
		<div className="App">
			<Container>

				<img width={64} height={64} src={githubLogo} alt="github logo" />
				<SearchBar
					onClick={handleSearchRepo}
					value={currentRepo}
					onChange={(e) => setCurrentRepo(e.target.value)}
				/>

				{reposList.map(repo =>
					<ItemRepo
						key={repo.id}
						fullName={repo.full_name}
						onClick={() => handleRemoveRepo(repo.id)}
						title={repo.name}
						url={repo.html_url}
					/>
				)}

			</Container>
		</div>
	);
}

export default App;
