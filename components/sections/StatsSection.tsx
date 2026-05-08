export function StatsSection() {
  const stats = [
    { value: '50+', label: 'Dokončanih projektov' },
    { value: '8', label: 'Let izkušenj' },
    { value: '100%', label: 'Zadovoljstvo strank' },
    { value: '2', label: 'Leti garancija' },
  ]

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-pool-navy/50 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
