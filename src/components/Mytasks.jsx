const Mytasks=({tasks,remove})=>{
    return <>
       <div className="mt-6 grid grid-cols-1 gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex justify-between bg-gray-500 p-4 items-center rounded text-white"
        >
          <div>
            <h5 className="font-semibold">{task.title}</h5>
            <p>{task.status}</p>
            <small>{task.date}</small>
          </div>
          <button
            onClick={() => remove(task.id)}
            className="bg-red-500 px-3 py-1 rounded-xl"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
    </>
}

export default Mytasks