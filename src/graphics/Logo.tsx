export function Logo() {
  return (
    <div className="flex flex-col">
      <img
        src="/logo-3.png"
        alt="logo"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '100px',
          margin: '0 auto',
        }}
      />
      <h1
        style={{
          fontSize: '3rem',
          textAlign: 'center',
          margin: '1rem 0',
        }}
      >
        Kelurahan Sungai Beringin
      </h1>
    </div>
  )
}
