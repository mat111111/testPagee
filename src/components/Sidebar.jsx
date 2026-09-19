// Barra lateral izquierda con los botones de navegación.
// "sections" es un array de { id, label, icon } definido en App.jsx
export default function Sidebar({ sections, active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <p>~/portfolio</p>
      </div>

      <nav className="sidebar-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-btn ${active === section.id ? 'active' : ''}`}
            onClick={() => onNavigate(section.id)}
          >
            <span className="nav-icon">{section.icon}</span>
            <span>{section.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>status: <span className="status-ok">online</span></p>
      </div>
    </aside>
  )
}
