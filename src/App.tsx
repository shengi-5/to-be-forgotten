import { reviews } from './data/reviews'
import './index.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>ZayedReviews</h1>
        <p className="subtitle">My personal corner for thoughts on shows, games, and more.</p>
      </header>

      <main>
        <div className="review-list">
          {reviews.map((review) => (
            <article key={review.id} className={`review-card ${review.category.toLowerCase()}`}>
              <div className="review-header">
                <span className="category">{review.category}</span>
                <span className="date">{review.date}</span>
              </div>
              <h2>{review.title}</h2>
              {review.rating !== undefined && (
                <div className="rating" title={`${review.rating}/5`}>
                  {'★'.repeat(Math.max(0, Math.min(5, Math.floor(review.rating))))}
                  {'☆'.repeat(Math.max(0, Math.min(5, 5 - Math.floor(review.rating))))}
                </div>
              )}
              <p className="content">{review.content}</p>
              <div className="tags">
                {review.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Zayed - Built with Gemini CLI</p>
      </footer>
    </div>
  )
}

export default App
