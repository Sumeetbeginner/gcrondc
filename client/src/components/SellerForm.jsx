import React, { useState } from 'react'
import SingleUpload from './SingleUpload'
import BulkUpload from './BulkUpload'

export default function SellerForm({activeSingle, setActiveSingle, sid}) {

  // let sid = localStorage.getItem('sid') || "677bdf07dd9457b5d727c6cf";

  
  return (
    <div className='sellerForm'>
      <div className="s-tabs">
        <li className={!activeSingle?'s-t-active':''} onClick={()=>setActiveSingle(true)}> <i className='fas fa-upload'></i> Single Product Upload</li>
        <li className={activeSingle?'s-t-active':''} onClick={()=>{setActiveSingle(false),console.log("activeSingle is setted to false");
        }}> <i className='fas fa-file'></i> Multiple Product Upload</li>
      </div>
      {
        activeSingle 
        ? (<SingleUpload sid={sid}/>)
        :(<BulkUpload sid={sid}/>)
      }
    </div>
  )
}
