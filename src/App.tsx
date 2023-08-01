import './App.css';
import Buttons from "./components/button/BetaButtons";
import MyAccordion from './components/accordion/MyAccordion';
import MyInput from './components/input/MyInput';
import Profile from './components/profile/profile';
import image from '../src/components/profile/ensupreneur.png'
import TextArea from './components/textArea';
import MyLabels from './components/tagLabel/MyLabels';
import BackgroudImage from './components/img/bg.png';
import Header from './components/Project/header';
import Card from './components/Project/card';
import Body from './components/Project/body';
import Countdown from './components/Project/countdown';
import Copyright from './components/Project/copyright';


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
      width:'100vw' }}
      className='px-[100px] py-10 gap-10 items-center flex-col'>
      <div>
        <Header />
      </div>
      <div>
       <Body />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
    </>
      
  );
}

export default App;
