import { useState } from 'react'
import type { Movie } from '../data/movies'
import type { PlannedDates } from '../App'

interface CalendarProps {
  movies: Movie[];
  plannedDates: PlannedDates;
  onAssign: (movieId: string, date: string) => void;
  onRemove: (movieId: string) => void;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default function Calendar({ movies, plannedDates, onAssign, onRemove }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

  const handleDayClick = (day: number) => {
    setSelectedDay(day)
  }

  const getMoviesForDate = (dateStr: string) => {
    return movies.filter(m => plannedDates[m.id] === dateStr)
  }

  const formatDate = (day: number) => {
    const d = new Date(year, month, day)
    return d.toISOString().split('T')[0]
  }

  // Movies that are NOT planned yet
  const availableMovies = movies.filter(m => !plannedDates[m.id])

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{MONTHS[month]} {year}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      <div className="calendar-grid">
        {DAYS.map(day => <div key={day} className="day-name">{day}</div>)}
        
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="day-cell empty"></div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const dateStr = formatDate(day)
          const dayMovies = getMoviesForDate(dateStr)
          
          return (
            <div 
              key={day} 
              className={`day-cell ${selectedDay === day ? 'selected' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              <span className="day-number">{day}</span>
              <div className="day-movies">
                {dayMovies.map(movie => (
                  <div key={movie.id} className="planned-movie-tag" title={movie.title}>
                    <span className="mini-icon">{movie.icon}</span>
                    <span className="tag-text">{movie.title.split(':')[0]}</span>
                    <button 
                      className="remove-btn" 
                      onClick={(e) => {
                        e.stopPropagation()
                        onRemove(movie.id)
                      }}
                    >×</button>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {selectedDay && (
        <div className="modal-overlay" onClick={() => setSelectedDay(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Plan for {MONTHS[month]} {selectedDay}</h3>
            
            {getMoviesForDate(formatDate(selectedDay)).length > 0 && (
              <div className="current-planned-section">
                <h4>Planned for this day:</h4>
                <div className="movie-selector">
                  {getMoviesForDate(formatDate(selectedDay)).map(movie => (
                    <div key={movie.id} className="planned-item-row">
                      <span>{movie.icon} {movie.title}</span>
                      <button 
                        className="remove-planned-btn"
                        onClick={() => onRemove(movie.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <h4>Add Movie:</h4>
            <div className="movie-selector">
              {availableMovies.length > 0 ? (
                availableMovies.map(movie => (
                  <button 
                    key={movie.id}
                    onClick={() => {
                      onAssign(movie.id, formatDate(selectedDay))
                      setSelectedDay(null)
                    }}
                  >
                    <span className="movie-icon">{movie.icon}</span>
                    {movie.title}
                  </button>
                ))
              ) : (
                <p>No more movies to plan!</p>
              )}
            </div>
            <button className="close-modal" onClick={() => setSelectedDay(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}
