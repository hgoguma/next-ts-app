import Header from '@/components/layouts/Header'
import ObjectExplorer from '@/components/layouts/ObjectExplorer'

const AppLayout = ({ children }) => {
  return (
    <div className='app-body'>
        <Header />
      <main className='main'>
        <ObjectExplorer />
        <div className='main-container'>
          {/* <Component /> */}
          { children }
        </div>  
      </main>
    </div>
  )
}

export default AppLayout