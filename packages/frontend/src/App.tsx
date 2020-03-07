import React from 'react'

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({ title }) => {
  return (
    <h1 data-test='app-title'>{title} is work!</h1>
  )
}

export default App
