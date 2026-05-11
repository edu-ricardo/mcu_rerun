import { useState, useEffect } from 'react'
import { mcuMovies } from './data/movies'
import './index.css'

function App() {
  const [watched, setWatched] = useState<string[]>(() => {
    const saved = localStorage.getItem('mcu-watched')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('mcu-watched', JSON.stringify(watched))
  }, [watched])

  const toggleMovie = (id: string) => {
    setWatched(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    )
  }

  const progress = Math.round((watched.length / mcuMovies.length) * 100)

  return (
    <div className="container">
      <header>
        <h1>MCU Rerun Tracker</h1>
        <p className="subtitle">Prepare for <span>Avengers: Doomsday</span></p>
      </header>

      <section className="progress-section">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{watched.length} of {mcuMovies.length} movies watched ({progress}%)</p>
      </section>

      <main className="movie-list">
        {mcuMovies.map(movie => (
          <div 
            key={movie.id} 
            className={`movie-card ${watched.includes(movie.id) ? 'watched' : ''}`}
            onClick={() => toggleMovie(movie.id)}
          >
            <div className="movie-checkbox">
              {watched.includes(movie.id) && <span className="check-icon">✓</span>}
            </div>
            <div className="movie-info">
              <span className="phase-badge">Phase {movie.phase}</span>
              <h3>{movie.title}</h3>
              <p className="release-date">{new Date(movie.releaseDate).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <p>Road to Endgame &copy; 2026</p>
      </footer>
    </div>
  )
}

export default App
