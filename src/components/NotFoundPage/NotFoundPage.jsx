import NavLinkButton from "../ui/NavLinkButton/NavLinkButton";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="not-found-page__container">
        <div className="not-found-page__wrapper">
          <h1 className="not-found-page__title">404</h1>
          <span className="not-found-page__subtitle">Страница не найдена</span>
        </div>
        <NavLinkButton
          link="/"
          text="Назад"
          place="not-found"
          type="link"
          color="blue"
        />
      </section>
    </main>
  );
}

export default NotFoundPage;
