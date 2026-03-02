import Working from '../assets/illustration-working.svg'

function Hero() {
  return(
    <section id="hero" className="container">
        <div className="hero-content">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-cyan btn-large">Get Started</button>
        </div>
        <div className="hero-image">
          <img
            src={Working}
            alt="Person working at a desk"
          />
        </div>
      </section>
  )
}

export default Hero;