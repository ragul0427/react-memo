import React from 'react'
import './App.css'
import { useState,useRef } from 'react'
import ReactImageMagnify from 'react-image-magnify'

function Zoom() {
    
    const images=[
        './assets/download.jpg',
        './assets/download (1).jpg',
        './assets/download (2).jpg',
        './assets/download (1).jpg',
        './assets/download (2).jpg',
    ]
    const [img,setImg]=useState(images[0])

    const hoverhandler=(image,i)=>{
        setImg(image)
        refs.current[i].classList.add('active')
        for(var j=0;j<images.length;j++){
            if(i!==j){
                refs.current[j].classList.remove('active')
            }
        }
    }

    const refs=useRef([])
    refs.current=[]

    const addref=(el)=>{
        if(el && !refs.current.includes(el)){
            refs.current.push(el)
        }
    }
  return (
    <div className='container'>

<div className='left_2'>
<ReactImageMagnify
{...{
    smallImage:{
        alt:'not',
        isFluidWidth:true,
        src:img,
    },
    largeImage:{
        src:img,
        width:1200,
        height:1800,
    }    
}} className='img'/>
    </div>

<div className='left'>
    <div className='left_1'>
{
    images.map((image,i)=>{
        return(
        <div className={i===0?'img_wrap active':'img_wrap'} key={i} onClick={()=>hoverhandler(image,i)} ref={addref}>
            <img src={image} alt='not found'/>
           
            </div>
        )
    })
}
    </div>

</div>
    </div>
  )
}

export default Zoom