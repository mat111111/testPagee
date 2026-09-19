import { useState } from 'react'
import CodeRainBackground from './components/CodeRainBackground.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Home, About, Projects, Contact } from './components/Sections.jsx'
import './App.css'

// Definí acá tus secciones: id, texto del botón, ícono y el componente a renderizar.
const SECTIONS = [
  { id: 'home', label: 'inicio', icon: '⌂', Component: Home },
  { id: 'about', label: 'sobre mí', icon: '★', Component: About },
  { id: 'projects', label: 'proyectos', icon: '▣', Component: Projects },
  { id: 'contact', label: 'contacto', icon: '✎', Component: Contact },
]

export default function App() {
  const [active, setActive] = useState('home')
  const ActiveComponent =
    SECTIONS.find((s) => s.id === active)?.Component ?? Home

  return (
    <div className="app-shell">
      <CodeRainBackground />

      <div className="layout">
        <Sidebar
          sections={SECTIONS}
          active={active}
          onNavigate={setActive}
        />
        <main className="content">
          <ActiveComponent />
        </main>
      </div>
    </div>
  )
}
