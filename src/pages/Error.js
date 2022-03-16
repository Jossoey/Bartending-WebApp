import { Link } from "react-router-dom";

import "../components/layout/Layout.scss";

function ErrorPage() {
  return (
    <section className="error-section">
      <div>
        <h1 className="section-title">Sorry, this page does not exist!</h1>
        <Link to="/" className="btn-primary">
          HOME
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
