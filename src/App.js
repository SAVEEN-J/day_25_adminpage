

// to install bootstrap 4.6.0
// npm i bootstrap@4.6.0

// to import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import './App2.css';
 import { Dashbordhtml ,Footer,Topnav,Contentpage,Navtop } from './component/dashbord';


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

// To install fontawesome
// npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

function App({data}) {


  return (
    <>
      <div id="page-top">
    <div id='wrapper'>
  
    <Dashbordhtml />
    <div id="content-wrapper" className="d-flex flex-column">

    {/* <!-- Main Content --> */}
    <div id="content">
    <Topnav/>
    <Contentpage dataearning={data}/>
    {/* <Buttons/> */}
    {/* <Buttons/> */}

    </div>
    <Footer />
    </div>

    </div>
    {/* <Navtop />    */}
     </div>
  

   
 
    </>
  );
}

export default App;
