import School from './School'
import Footer from '../Footer'

import FFMSImage from '../SchoolLists/Images/FFMS.jpg';
import PakturkImage from '../SchoolLists/Images/Pakturk/Pakturk.jpg';



export default function SchoolList() {
  return (
    <div >
      <div className='Schoollist'>


      <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '10px',
        
          // Media query for screens smaller than 600px
          '@media (min-width: 500px)': {
            flexDirection: 'column',
          }
      }}>
      <School name="Pakturk International Marif" img={PakturkImage} color="red" rating='4.5/5'/>
      <School name="Fauji Foundation Model School" img={FFMSImage} color="purple" rating='4/5'/>
      <School name="Beacon House Schools" img={PakturkImage} color="green" rating='3.3/5'/>
      <School name="Islamia Model High School" img={FFMSImage} color="red" rating='4/5'/>
      <School name="St Francis Schooling System" img={PakturkImage}color="purple" rating='3/5'/>
      <School name="Pakturk International Marif" img={FFMSImage} color="green" rating='3.5/5'/>

      
        </div>




      </div>
      <Footer/>
    </div>
  )
}





