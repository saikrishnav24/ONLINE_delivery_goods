import { Steps } from 'rsuite';
import axios from 'axios';
import {useState,useEffect} from 'react'
import 'rsuite/dist/rsuite.min.css';
import Navbar from './Navbar';


 const VerticalStepper = () => {
  // const [activeStep, setActiveStep] = useState(0);
  const [APIResponse, setAPIResponse] = useState([]);
  
  useEffect(()=>{
          axios.get('http://ec2-13-235-67-132.ap-south-1.compute.amazonaws.com:8001/DUMMY_INFO/').then((response)=>{
            setAPIResponse(response.data)
          })
        },[])
    
    // APIResponse.map((i) => {
    //   if (i["status_code"] === 200) {
    //     count += 1;
    //   }
    // });

    let count = 0;
    APIResponse.map((i) => {
      if (i["status_code"] === 0) {
        count += 1;
      }
    });


    // APIResponse.map((i)=>{
    //   if (i['status_code']== 200){
    //     setActiveStep(()=>activeStep+1)
    //   }
    // })

  // console.log(APIResponse)
  //   useEffect(()=>{
  //     APIResponse.map((i)=>{
  //       if(i['status_code']==200){
  //         setActiveStep(activeStep+1);
  //       }
  //     })
      
  //   },[]);
   
    
  return (
    <>
    <Navbar/>
<div className='ee'>
    
    <div className='steps'>

      <Steps vertical current={count}>

        <Steps.Item description=<h6 style={{ color: "white"}}>Order confirmed</h6>/>

        <Steps.Item description=<h6 style={{ color: "white"}}>Awaiting for Agent</h6>/>

        <Steps.Item description=<h6 style={{ color: "white"}}>Agent confirmed</h6>/>

        <Steps.Item description= <h6 style={{ color: "white"}}>Order delivered</h6>/>

      </Steps>

    </div>
    </div>
    </>
  )

}
export default VerticalStepper;