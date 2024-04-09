export default function Dashboard() {
    return (
      <main className="flex min-h-screen">
        {/* Left sidebar */}
        <div className="flex-shrink-0 w-64 bg-white flex flex-col relative">
          {/* Navigation buttons */}
          <nav className="flex flex-col items-center space-y-4">
            <a href="/dashboard" className="btn">Dashboard</a>
            {/* Add more navigation buttons as needed */}
          </nav>
        </div>
        
        {/* "Analytics Dashboard" text */}
        <div className="flex-1 bg-gray-100">
          <h1 className="text-2xl font-bold mt-4 ml-4">Analytics Dashboard</h1> {/* Adjust size */}
          <div className="flex justify-center">
            {/* Content for the main section */}
          </div>
        </div>
      </main>
    );
  }
  