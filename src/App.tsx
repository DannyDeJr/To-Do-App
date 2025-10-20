
function App() {
 
  
  return (
    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center m-24 w-3xl">
        <div className="text-2xl">TODO LIST</div>
        <div className="flex w-full justify-between">
          <div>
            <button className="bg-blue-400 p-2 rounded-full hover:bg-black text-white cursor-pointer">Add Task</button>
          </div>
          <div>
            <select name="filter" id="filterList" className="bg-stone-400 p-2 rounded-full hover:bg-stone-200 text-wite cursor-pointer">
              <option value="all">All</option>
              <option value="done">YA DONE</option>
              <option value="unfinished">YA NEED TO COMPLETE</option>
            </select>
          </div>
        </div>
        {/* end btns  */}
        <div>list</div>
        {/* end list  */}
      </div>
      
    </div>
  )
}

export default App
