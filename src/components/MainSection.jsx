import React from 'react'

const MainSection = () => {
  return (
    <main className='' style={{margin:'auto',height:'auto'}}>
       <div className='row container' style={{marginTop:'5rem',marginLeft:'auto'}}>
        <div className='  col-6'>
            <img className='image' src="src/components/75924b24-48e6-4a87-ab77-a9d722ad6f80.jpg" alt="Hel" width={'320px'} />
        </div>
        <div className='Main d-flex flex-column justify-content-start col-6'>
            <h1>VIJAYAKANTH M</h1>
          
            <hr />
            <h3>Full Stack Developer</h3>
            <h4>BSC computerscience</h4>
            <p>Contact:+91 8807911676</p>
            <p>Email: vijayakanthmurugan03@gmail.com</p>
            <p>Address: north street,
              theni,tamilnadu</p>
              
            
        </div>
        </div> 
        
    </main>
    
  )
}

export default MainSection