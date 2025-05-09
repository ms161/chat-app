import React from 'react'
import { transformImage } from '../../lib/features';

const RenderAttachment = (file, url) => {
    switch (file) {
        case 'video':
           return  <video src={url} preload='none' width={'200px'} controls></video>
            
        case 'image':
          return  <img
                src={transformImage(url, 200)}
                width={'200px'}
                height={'150px'}
                alt="Attachment"
                style={{ objectFit: 'contain' }}

            />
      
        case 'audio':
          return  <audio src={url} preload='none' controls></audio>
           
        default:
            break;
    }
   
}

export default RenderAttachment
