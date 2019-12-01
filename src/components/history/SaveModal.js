import React from 'react'

export default props => {
  return (
    <div className={`${props.saveModalOpen ? 'active-modal' : 'inactive-modal'} modal-wrapper`}>
      <div className="modal-container bg-white shadow-2xl">
        <i
          className="fal fa-times font-xl text-gray-6 hover:text-red-4 transition-all transition-200 cursor-pointer"
          onClick={props.toggleSaveModal}
        ></i>
        <div className="modal-content">
          <h3 className="text-center font-head text-blue-4 mb-5 cursor-default">
            Save Game With A Name!
          </h3>
          <input type="text" name="gameName" className="basic-input mt-5 mb-5" />
          <button type="button" onClick={props.saveGame} className="basic-button mt-5">
            Save Game
          </button>
        </div>
      </div>
    </div>
  )
}
