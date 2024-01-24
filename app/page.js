import styles from './page.module.css'
import './home.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='createNote'>
        <textarea className='createTitle' placeholder='Título'></textarea>
        <textarea className='createDesc' placeholder='Anotar'></textarea>
      </div>
    </main>
  )
}