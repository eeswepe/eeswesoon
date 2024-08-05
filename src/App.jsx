import './App.css'
import Header from './components/Header.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Project from './components/Project.jsx';
import Profile from './components/Profile.jsx';
import Desktop from './components/Desktop.jsx';

export default function App() {
  return (
    <main>
      <div className="App">
        <Desktop/>
        <Header />
        <Jumbotron />
        <Project />
        <Profile />
      </div>
    </main>
  )
}
