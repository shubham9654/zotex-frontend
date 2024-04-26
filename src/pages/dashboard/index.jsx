import Sidebar from "../../components/sidebar/Sidebar"


const Dashboard = () => {
  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900`}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        Hello world
      </div>
    </div>
  )
}

export default Dashboard