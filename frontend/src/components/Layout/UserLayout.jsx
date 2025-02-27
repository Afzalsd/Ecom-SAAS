import { Outlet } from "react-router-dom"
import Footer from "../Common/Footer"
import Header from "../Common/Header"

const UserLayout = () => {
  return (
    <>
        {/* Header Component */}
        <Header />
        {/* Main Component */}
        <main>
          <Outlet />
        </main>
        {/* Footer Component */}
        <Footer />
    </>
  )
}

export default UserLayout