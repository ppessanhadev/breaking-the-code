import figmaLandLogo from '../../assets/figmaland-header.png';
import styles from './styles.module.scss';

export default function HeroSection() {
  return (
    <>
      <section className={styles.backgroundImage} />
      <section className={styles.hero}>
        <header className={styles.heroHeader}>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>
              <img src={figmaLandLogo} alt="logo da figmaland" />
            </li>
          </ul>
        </header>

        <h1>The best products start with Figma</h1>
        <h2>Most calendars are designed for teams. Slate is designed for freelancers</h2>
        <button type="button">Try for free</button>
      </section>
    </>
  );
}
