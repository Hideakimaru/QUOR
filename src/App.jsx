import './output.css';
import WatchList from './components/WatchList.jsx';
import MainWrapper from './components/MainWrapper.jsx';
import Footer from './components/Footer.jsx';

function App() {
	return (
		<MainWrapper>
			<WatchList />
			<Footer />
		</MainWrapper>
	);
}

export default App;
