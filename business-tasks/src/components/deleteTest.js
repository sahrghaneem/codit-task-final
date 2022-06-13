
import React from 'react';
import Popup from 'reactjs-popup';
import swal from 'sweetalert';
const axios = require('axios');
// import{deleteUser,getUser} from './'

//
const DeleteEmployee = (id) => { 
<Popup trigger={<button className="button"> Delete </button>} modal nested >
   {close => ( <div className="modal">
   <button className="close" onClick={close}> &times; </button> 
   <span className="content"> {' '} You Sure You Want To Delete This Employee? </span>
   <div className="actions">
                <button
                  className="btn confirmDelete"
                  onClick={() => {
                    // deleteUser({ empId: id })
                    //   .then((res) => {
                    //     return getUser();
                    //   })
                    //   .catch((e) => {
                    //     console.log(e);
                    //   });
                   
                  }}
                >
                  YES!
                </button>
                <button className="close" onClick={close}>NO </button> 
              </div>
  
    </div>)} 
    </Popup>
    }; 

export default DeleteEmployee;