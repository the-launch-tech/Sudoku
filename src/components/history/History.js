import React from 'react'

export default ({ history }) => {
  return (
    <section className="w-4/12 p-5 rounded-lg shadow border border-gray-1 border-solid h-full bg-white p-5">
      <h3 className="font-head mt-5 mb-5 text-center text-gray-6">Game History</h3>
      <div className="h-full flex justify-center items-center">
        {history ? (
          <React.Fragment />
        ) : (
          <div className="mt-5 mb-5">
            <h6 className="text-center font-head text-gray-6">No Game History Exists Yet!</h6>
          </div>
        )}
      </div>
    </section>
  )
}
