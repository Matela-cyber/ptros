import { useState } from 'react'
import { User } from 'firebase/auth'
import Dashboard from './Dashboard'
import AvailableTasks from './AvailableTasks'
import MyDeliveries from './MyDeliveries'

interface AppRouterProps {
  user: User
}

export default function AppRouter({ user }: AppRouterProps) {
  // Update the state type to include 'deliveries'
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'tasks' | 'deliveries'>('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard user={user} onNavigate={setCurrentPage} />
      case 'tasks':
        return <AvailableTasks />
      case 'deliveries':
        return <MyDeliveries />
      default:
        return <Dashboard user={user} onNavigate={setCurrentPage} />
    }
  }

  return (
    <div>
      {renderPage()}
      
      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="max-w-full mx-auto flex justify-around">
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`flex-1 py-3 text-center text-sm font-medium transition ${
              currentPage === 'dashboard'
                ? 'text-blue-600 border-t-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setCurrentPage('deliveries')}
            className={`flex-1 py-3 text-center text-sm font-medium transition ${
              currentPage === 'deliveries'
                ? 'text-blue-600 border-t-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            📦 My Deliveries
          </button>
          <button
            onClick={() => setCurrentPage('tasks')}
            className={`flex-1 py-3 text-center text-sm font-medium transition ${
              currentPage === 'tasks'
                ? 'text-blue-600 border-t-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            📋 Available Tasks
          </button>
        </div>
      </nav>
    </div>
  )
} 