import './App.css'
import Header from './components/Header.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Project from './components/Project.jsx';
import Profile from './components/Profile.jsx';

export default function App() {
  return (
    <main>
      <div className="App">
        <Header />
        <Jumbotron />
        <Project />
        <Profile />
      </div>
    </main>
  )
}
