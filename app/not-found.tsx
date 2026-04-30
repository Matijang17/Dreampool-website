import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-pool-navy flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="font-display text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-pool-white mb-4">Stran ni najdena</h1>
        <p className="text-pool-white/60 mb-10">
          Stran, ki jo iščete, ne obstaja ali je bila premaknjena.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Domov</Link>
          <Link href="/ponudba" className="btn-outline">Brezplačna ponudba</Link>
        </div>
      </div>
    </div>
  )
}
