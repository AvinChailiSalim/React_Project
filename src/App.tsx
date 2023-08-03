import './App.css';
import image from '../src/components/profile/ensupreneur.png'
import BackgroudImage from './components/img/bg.png';
import Header from './components/Project/header';
import Body from './components/Project/body';
import Copyright from './components/Project/copyright';
import OnlineCard from './components/Project/card/onlineCard';


function App() {
  
  const imageUrl = image;

  return (
    <>    
    <div style={{
      backgroundImage: `url(${BackgroudImage})`,
      backgroundRepeat:'no-repeat',
      backgroundPosition: 'center',
      backgroundSize:'100% 100%',
      height:'min-h-screen',
      width:'min-w-screen' }}
      className='px-[100px] py-10 gap-10 items-center flex-col xs:px-3 xs:py-3'>
      <div>
        <Header />
      </div>
      <div>
       <Body />
      </div>
      <div>
        <Copyright />
      </div>
      <div>
        <OnlineCard />
      </div>
    </div>
    </>
      
  );
}

export default App;
