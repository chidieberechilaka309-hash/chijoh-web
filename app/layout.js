export const metadata = {
  title: 'Chijoh Web',
  description: 'My site on Vercel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
