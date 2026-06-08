import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Find Your Dream Job Today
        </h1>

        <p>
          Discover opportunities from
          thousands of companies.
        </p>

        <div className="hero-buttons">

          <Link to="/register">
            <button>
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button>
              Login
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;