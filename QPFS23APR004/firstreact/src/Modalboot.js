import React from 'react'

export default function Modalboot(){
  return (
  <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
       Login
      </button>
    <div className="modal" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="myModalLabel">Login Here</h3>
          </div>
          <div className="modal-body">
            ex:forms,alerts
          </div>
          <div className="modal-footer">
           <button type="button" className="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
  }