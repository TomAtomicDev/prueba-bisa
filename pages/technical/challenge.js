import styles from "../../styles/challenge.module.css";
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Section from '../../components/Section';

export default function Challenge() {
  return (
    <>
      <div className={styles.container}>
        <Header className={styles.header}/>
        <Navbar className={styles.navbar}/>
        <main className={styles.main}>
            <Aside className={styles.aside}/>
            <Section className={styles.section}/>
        </main>
        <Footer className={styles.footer}/>
      </div>
    </>
  );
}
