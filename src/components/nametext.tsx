// 'use client'
import { TypeAnimation } from 'react-type-animation';
function Nametextanimation() {
  return (
    <div>
        
        <TypeAnimation
         sequence={[
          'Muhammad Moeen',
          500,
          'Muhammad Moeen',
          1000,
          'Fronted Development',
          1000
        ]}
        wrapper="div"
        speed={50}
        repeat={Infinity}
      />
        
    </div>
  )
}

export default Nametextanimation