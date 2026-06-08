import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />

      <section className="features">

        <div className="feature">

          <h3>Top Companies</h3>

          <p>
            Apply to leading companies.
          </p>

        </div>

        <div className="feature">

          <h3>Quick Hiring</h3>

          <p>
            Connect with recruiters.
          </p>

        </div>

        <div className="feature">

          <h3>Career Growth</h3>

          <p>
            Build your future.
          </p>

        </div>

      </section>
    </>
  );
}

export default Home;