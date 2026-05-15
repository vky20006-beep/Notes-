import React from 'react'
import { useState } from 'react'

const App = () => {
 
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    const copytask=[...task]
    copytask.push({title,details})
    settask(copytask)
    console.log(task)
    settitle('')
    setdetails('')
  }
  const deleteNote = (idx) => {
  const copyTask = [...task];
  copyTask.splice(idx, 1);
  settask(copyTask); 

}
  return (
    <div className='bg-black w-full min-h-screen text-white lg:flex justify-around '>
       <div className='p-5 border-r-[5px] border-white px-10' >
         <form className='flex flex-col gap-6 '
          onSubmit={(e)=>{
              submitHandler(e);
          }}>
          <h1 className='px-2 text-2xl'>Notes</h1>
           <input type="text" placeholder='Heading'
            className='bg-gray-600 rounded-full px-3 py-2 w-full lg:w-[500px]'
            value={title}
            onChange={(e)=>{
                 settitle(e.target.value)
            }}/>
            
            <textarea type='text'
             className='bg-gray-600 rounded-2xl h-30 w-full lg:w-[500px] px-3'
             placeholder='write your notes here'
             value={details}
                onChange={(e)=>{
                  setdetails(e.target.value)
                }} >
            </textarea>
            <button className='bg-gray-400 rounded-2xl p-4 mt-2 w-fit px-10'>Submit notes</button>
          </form>      
       </div>       
  <div className='lg:w-1/2 p-5 gap-6 '>
    <h1 className=' px-2 text-2xl mb-4'>Recent Notes</h1>
    <div className='flex flex-row gap-10 '>
       {task.map(function(elem,idx){
        return  <div key={idx} className='w-40 h-40 bg-amber-50 text-black bg-cover
         p-3 rounded-2xl bg-[url(https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg)]'>
          <h1 className='text-xl font-bold mb-4'>{elem.title}</h1>
          <h5>{elem.details}</h5>
          <button onClick={() => {
         deleteNote(idx)
          }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>
  Delete
</button>
        </div>
       
       })}
    </div>
  </div>
      
    </div>
  )
}

export default App


