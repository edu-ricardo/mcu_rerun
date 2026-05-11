import { useState, useEffect } from 'react'
import { mcuMovies } from './data/movies'
import Calendar from './components/Calendar'
import './index.css'

export type PlannedDates = Record<string, string>;

function App() {
  const [currentView, setCurrentView] = useState<'list' | 'calendar'>('list')
  const [watched, setWatched] = useState<string[]>(() => {
    const saved = localStorage.getItem('mcu-watched')
    return saved ? JSON.parse(saved) : []
  })

  const [plannedDates, setPlannedDates] = useState<PlannedDates>(() => {
    const saved = localStorage.getItem('mcu-planned')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('mcu-watched', JSON.stringify(watched))
  }, [watched])

  useEffect(() => {
    localStorage.setItem('mcu-planned', JSON.stringify(plannedDates))
  }, [plannedDates])

  const toggleMovie = (id: string) => {
    setWatched(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    )
  }

  const assignMovieToDate = (movieId: string, date: string) => {
    setPlannedDates(prev => ({ ...prev, [movieId]: date }))
  }

  const removeMovieFromDate = (movieId: string) => {
    setPlannedDates(prev => {
      const next = { ...prev }
      delete next[movieId]
      return next
    })
  }

  const progress = Math.round((watched.length / mcuMovies.length) * 100)

  return (
    <div className="container">
      <header>
        <h1>MCU Rerun Tracker</h1>
        <p className="subtitle">Prepare for <span>Avengers: Doomsday</span></p>
        
        <div className="view-toggle">
          <button 
            className={currentView === 'list' ? 'active' : ''} 
            onClick={() => setCurrentView('list')}
          >
            Lista
          </button>
          <button 
            className={currentView === 'calendar' ? 'active' : ''} 
            onClick={() => setCurrentView('calendar')}
          >
            Calendário
          </button>
        </div>
      </header>

      <section className="progress-section">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{watched.length} of {mcuMovies.length} movies watched ({progress}%)</p>
      </section>

      {currentView === 'list' ? (
        <main className="movie-list">
          {mcuMovies.map(movie => {
            const plannedDate = plannedDates[movie.id]
            return (
              <div 
                key={movie.id} 
                className={`movie-card ${watched.includes(movie.id) ? 'watched' : ''}`}
                onClick={() => toggleMovie(movie.id)}
              >
                <div className="movie-checkbox">
                  {watched.includes(movie.id) && <span className="check-icon">✓</span>}
                </div>
                <div className="movie-info">
                  <div className="movie-header">
                    <span className="phase-badge">Phase {movie.phase}</span>
                    {plannedDate && <span className="planned-badge">Planned: {new Date(plannedDate).toLocaleDateString()}</span>}
                  </div>
                  <h3>{movie.title}</h3>
                  <p className="release-date">Release: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                </div>
              </div>
            )
          })}
        </main>
      ) : (
        <Calendar 
          movies={mcuMovies} 
          plannedDates={plannedDates} 
          onAssign={assignMovieToDate}
          onRemove={removeMovieFromDate}
        />
      )}

      <footer>
        <p>Road to Endgame &copy; 2026</p>
      </footer>
    </div>
  )
}

export default App
