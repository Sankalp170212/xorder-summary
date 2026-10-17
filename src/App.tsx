import './App.css'

function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="hero-img-container">
          <img
            src="/illustration-hero.svg"
            alt="Hero illustration of a person listening to music"
            className="hero-image"
          />
        </div>
        <div className="content">
          <h1 className="heading">Order Summary</h1>
          <p className="summary-para">
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>

          <div className="plan-box">
            <div className="plan-icon">
              <img src="/icon-music.svg" alt="Music icon" />
            </div>
            <div className="plan-text">
              <h3>Annual Plan</h3>
              <p>$59.99/year</p>
            </div>
            <div className="change-link">
              <a href="#">Change</a>
            </div>
          </div>

          <button type="button" className="proceed-btn">
            Proceed to Payment
          </button>
          <a href="#" className="cancel-order">
            Cancel Order
          </a>
        </div>
      </div>
    </main>
  )
}

export default App
