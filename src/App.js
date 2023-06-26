

// to install bootstrap 4.6.0
// npm i bootstrap@4.6.0

// to import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import './App2.css';
 import { Dashbordhtml, LeftNavbar, TopNavbar,Contentpage1,Contentpage2,Navtop, Footer } from './component/oldbord';



 import { Buttons } from './component/Buttons';
 import{ Tables } from './component/tables' 




// following three imports for specific import of an fontawesome icon 
// for ex: <FontAwesomeIcon icon={faLaughWink} />
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faLaughWink } from '@fortawesome/free-regular-svg-icons';
import { faChartArea, faCog, faTable, faTachometerAlt, faWrench } from '@fortawesome/free-solid-svg-icons';

// for using default way of including fontawesome icon 
// for ex: <i className="fas fa-laugh-wink"></i>
  import '@fortawesome/fontawesome-free/css/all.min.css';
import Wrapperpage from './component/pagewrapper';


// To install fontawesome
// npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

function App({EarningsDAta}) {


  return (
    <>
      <div id="page-top">
       <Wrapperpage EarningsDAta={EarningsDAta}/>

      

      </div>
  
  

   
 
    </>
  );
}

export default App;
