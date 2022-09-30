import styles from './App.module.scss'
import { Header } from '../components/Modules/Header'
import { AllLinks } from '../components/Modules/AllLinks'
import { ActionPanel } from '../components/Modules/ActionPanel'
import { MyLinks } from '../components/Modules/MyLinks'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ActionPanel />
      <MyLinks />
      <AllLinks />
    </div>
  )
}

export default App
