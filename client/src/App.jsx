import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute'
import LayoutLoader from './components/layout/Loaders'
// import AdminLogin from './pages/admin/AdminLogin'
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))
const NotFound = lazy(() => import('./pages/NotFound'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'))
const Dashboard = lazy(() => import('./pages/admin/Dashboard'))
const UserManagement = lazy(() => import('./pages/admin/UserManagement'))
const ChatManagement = lazy(() => import('./pages/admin/ChatManagement'))
const MessageManagement = lazy(() => import('./pages/admin/MessageManagement'))


function App() {
  let user = true

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<LayoutLoader />}>
          <Routes>
            <Route element={<ProtectRoute user={user} />} >
              <Route path="/" element={<Home />} />
              <Route path="/chat/:chatId" element={<Chat />} />
              <Route path="/groups" element={<Groups />} />
            </Route>
            <Route path="/login" element={<ProtectRoute user={!user} redirect="/"> <Login /></ProtectRoute>} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/admin/Dashboard' element={<Dashboard />} />
            <Route path='/admin/users' element={<UserManagement />} />
            <Route path='/admin/chats' element={<ChatManagement />} />
            <Route path='/admin/messages' element={<MessageManagement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
