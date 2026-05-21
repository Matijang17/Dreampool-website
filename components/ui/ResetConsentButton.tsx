'use client'

export function ResetConsentButton() {
  const reset = () => {
    localStorage.removeItem('dp-cookie-consent')
    window.location.reload()
  }

  return (
    <button onClick={reset} className="text-pool-accent hover:underline cursor-pointer">
      nastavitev piškotkov
    </button>
  )
}
