import React from 'react'

import Topnavbar from './topnavbar'

import Dashbord from './dashbord';
import Card from './pageContent/pagecontentcard';
import Chart from './chart';
import Container from './container';

function Contentwrapper({EarningsDAta}) {
  console.log(EarningsDAta);
  let Currentyear=new Date().getFullYear();
  let userName="Saveen"
  return (
    <>
       {/* <!-- Content Wrapper --> */}
       <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
        <div id="content">
               <Topnavbar/>
    
                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">
                  <Dashbord  />

                   {/* <!-- Content Row --> */}
                   <div className="row">
                    {EarningsDAta.map((value,index)=>{
                      return <Card key={index} data={value}/>
                    })}
                

                </div>
                
                    {/* <!-- Content Row --> */}

                    <div className="row">

                      {/* <Chart /> */}

                    </div>
                     {/* <!-- Content Row --> */}
                 <div className="row">
                  {/* <Container/> */}

                    </div>
   


                </div>
   
    



    </div>

      {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; {userName} Website {Currentyear}</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}
    </div>
    
    </>
   
  )
}

export default Contentwrapper