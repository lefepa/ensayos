import React, {useState} from 'react'

const  Rectangulo = () =>  {
  
    
    const [isHover, setIsHover] = useState(false);
    const [color, setColor] = useState([]);

    const getRGB = () => {
        return Math.floor(Math.random () * 256 );
    }

    const rgbTohex = (r, g, b) => {

        '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            
        })

    }

        
    
    const handleMouseEnter = () => {
       setIsHover(true)
       

       const color = {

        r: getRGB(),
        g: getRGB(),
        b: getRGB(),

        



       };

       setColor(color.r, color.g, color.b)
       console.log(color);
       
       
       
    };

 
    const handleMouseLeave = () => {
       setIsHover(false);
    };
 
       
         
    const recStyle = {
        height: '250px',
        width: '220px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
        cursor: 'pointer',
        
        
     };       
    
  


    return (
    
    <div style={{height: '250px', width: '250px',  backgroundColor: isHover ? color : 'blue'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         
    </div>
  )
}

export default Rectangulo