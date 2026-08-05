export default function Home() {
  return (
    <main style={{ 
      padding: 24, 
      fontFamily: 'system-ui', 
      background: '#0B0B0B', 
      color: '#FFF', 
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: 40, color: '#FF6B00', marginBottom: 8 }}>Chijoh 🔥</h1>
      <p style={{ fontSize: 18, opacity: 0.8 }}>Where Africa Connects</p>
      
      <div style={{ 
        marginTop: 40, 
        padding: 20, 
        background: '#1A1A1A', 
        borderRadius: 16,
        border: '1px solid #FF6B00'
      }}>
        <p style={{ fontSize: 16 }}>Firebase is connected ✅</p>
        <p style={{ fontSize: 14, opacity: 0.7 }}>Ready to build the future</p>
      </div>
    </main>
  )
}
