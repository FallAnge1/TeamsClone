import React, { useState } from 'react'

const Question = ({ id, text1, options }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false) // Создаем массив для отслеживания состояний чекбоксов
  )

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    )
    setCheckedState(updatedCheckedState)
  }
  return (
    <div className="mt-16">
      <div className="bg-[#f6f4f7] p-5">
        <div className=" text-white p-2 px-4 mb-2 bg-[#01787a] text-center inline-block">
          {id}
        </div>
        <div>
          <p>{text1}</p>
          <span className="text-[#227a84] font-medium">{'(Баллов: 4)'}</span>
        </div>
      </div>
      <div className="space-y-4 px-3 py-6 bg-[#f3f9f9]">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 text-gray-700">
            <input
              type="checkbox"
              className="h-5 w-5 rounded-sm bg-white border-gray-300 text-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              checked={checkedState[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className="text-sm font-medium">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Question
