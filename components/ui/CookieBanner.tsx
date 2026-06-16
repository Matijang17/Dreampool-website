'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Consent = { necessary: true; analytics: boolean; marketing: boolean }

const STORAGE_KEY = 'dp-cookie-consent'

function getStored(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

function saveConsent(c: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(c))
  // Google Consent Mode v2
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('consent', 'update', {
      analytics_storage: c.analytics ? 'granted' : 'denied',
      ad_storage: c.marketing ? 'granted' : 'denied',
      ad_user_data: c.marketing ? 'granted' : 'denied',
      ad_personalization: c.marketing ? 'granted' : 'denied',
    })
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(true)

  useEffect(() => {
    const stored = getStored()
    if (!stored) {
      setVisible(true)
    } else {
      // Restore consent state to gtag on every mount for returning users
      saveConsent(stored)
    }
  }, [])

  if (!visible) return null

  const accept = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
    setVisible(false)
  }

  const reject = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false })
    setVisible(false)
  }

  const save = () => {
    saveConsent({ necessary: true, analytics, marketing })
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-black/15 border border-gray-100 p-5 md:p-6">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-pool-navy text-sm mb-1">Ta stran uporablja piškotke 🍪</p>
              <p className="text-pool-navy/55 text-xs leading-relaxed">
                Nujne piškotke vedno aktiviramo. Analitične in marketinške piškotke aktiviramo samo z vašo privolitvijo.{' '}
                <Link href="/piskotki" className="text-pool-accent hover:underline">Več o piškotkih</Link>
                {' · '}
                <Link href="/zasebnost" className="text-pool-accent hover:underline">Politika zasebnosti</Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="text-xs text-pool-navy/50 hover:text-pool-navy px-3 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              >
                Nastavitve
              </button>
              <button
                onClick={reject}
                className="text-xs text-pool-navy/70 hover:text-pool-navy px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              >
                Zavrni
              </button>
              <button
                onClick={accept}
                className="text-xs font-semibold bg-pool-accent hover:bg-pool-blue text-white px-5 py-2 rounded-full transition-colors"
              >
                Sprejmi vse
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-semibold text-pool-navy text-sm mb-4">Nastavitve piškotkov</p>
            <div className="space-y-3 mb-5">
              {[
                { label: 'Nujni piškotki', desc: 'Potrebni za delovanje strani. Vedno aktivni.', checked: true, disabled: true, onChange: () => {} },
                { label: 'Analitični piškotki', desc: 'Google Analytics — statistika obiskov in vedenja.', checked: analytics, disabled: false, onChange: setAnalytics },
                { label: 'Marketinški piškotki', desc: 'Google Ads, Meta, TikTok, LinkedIn — remarketing in personalizirani oglasi.', checked: marketing, disabled: false, onChange: setMarketing },
              ].map((item) => (
                <label key={item.label} className={`flex items-start gap-3 p-3 rounded-xl border ${item.disabled ? 'border-gray-100 bg-gray-50' : 'border-gray-100 cursor-pointer hover:bg-gray-50'} transition-colors`}>
                  <div className="mt-0.5 flex-shrink-0">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      disabled={item.disabled}
                      onChange={(e) => item.onChange(e.target.checked)}
                      className="w-4 h-4 rounded accent-pool-accent"
                    />
                  </div>
                  <div>
                    <p className="text-pool-navy font-medium text-xs">{item.label}</p>
                    <p className="text-pool-navy/50 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setShowSettings(false)} className="text-xs text-pool-navy/50 hover:text-pool-navy px-4 py-2 rounded-full border border-gray-200 transition-colors">
                Nazaj
              </button>
              <button onClick={save} className="text-xs font-semibold bg-pool-accent hover:bg-pool-blue text-white px-5 py-2 rounded-full transition-colors">
                Shrani nastavitve
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
