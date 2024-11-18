import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Slice/counterSlice'

const Maincom = () => {
    const sliceData = useSelector((state) =>state.storeData.value)

    const dispatch = useDispatch()
    const handleAdd = () =>{
        dispatch(increment())
    }
    const handleRemove = () =>{
        dispatch(decrement())
    }
    
  return (
    <>
     <div className='text-7xl font-bold text-black'>{sliceData}</div>

     <div>
        <button onClick={handleAdd} className='w-[45px] h-[35px] rounded-[15px] bg-red-400 text-white text-[20px] mr-2 font-bold'>+</button>
        <button onClick={handleRemove} className='w-[45px] h-[35px] rounded-[15px] bg-green-400 text-white text-[20px] font-bold'>-</button>
     </div>
    </>
  )
}

export default Maincom
