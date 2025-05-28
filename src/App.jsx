import '/src/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Main">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
