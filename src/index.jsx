import ReactDOM from 'react-dom/client'
import Profile from './components/profile'
import MainContent from './components/mainContent'
import Footer from './components/footer'
import './style.css'

function Card() {
  return (
      <div className="card-container">
          <Profile />
          <MainContent />
          <Footer />
      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Card />
)