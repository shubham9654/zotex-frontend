import Sidebar from "../../components/sidebar/Sidebar"
import ProductList from "./productList"


const Dashboard = () => {
  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900`}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full overflow-y-auto">
          <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
            <ProductList />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard