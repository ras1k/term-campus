import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Blog from './components/Blog/Blog';

function App() {

  return (
    <div className='container'>
      <Header></Header>
      <Body></Body>
      <hr />
      <div className='mt-3'>
        <Blog></Blog>
      </div>
    </div>
  )
}

export default App
