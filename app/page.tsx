export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 100%)',
      color: '#FFF',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>

      {/* LOGO */}
      <h1 style={{
        fontSize: '64px',
        fontWeight: 900,
        color: '#FF6B00',
        margin: 0,
        letterSpacing: '-2px'
      }}>
        Chijoh 🔥
      </h1>

      {/* TAGLINE */}
      <p style={{
        fontSize: '22px',
        opacity: 0.8,
        marginTop: '8px',
        marginBottom: '40px'
      }}>
        Where Africa Connects
      </p>

      {/* CARD */}
      <div style={{
        width: '100%',
        maxWidth: '500px',
        padding: '32px',
        background: 'rgba(26, 26, 26, 0.8)',
        borderRadius: '20px',
        border: '1px solid #FF6B00',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
        boxShadow: '0 0 40px rgba(255, 107, 0, 0.2)'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h2 style={{ fontSize: '24px', margin: '0 0 8px 0' }}>
          Firebase Connected
        </h2>
        <p style={{ fontSize: '14px', opacity: 0.7, margin: '0 0 20px 0' }}>
          Project: chijoh-40ab7
        </p>
        <p style={{ fontSize: '16px', opacity: 0.9 }}>
          Building the future of African social 🚀
        </p>
      </div>

      {/* FOOTER */}
      <p style={{
        marginTop: '40px',
        fontSize: '14px',
        opacity: 0.5
      }}>
        Chijoh © 2026
      </p>
    </main>
  )
}
