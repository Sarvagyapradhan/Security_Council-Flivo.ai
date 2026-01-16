import { useEffect } from 'react'

interface SeoProps {
  title: string
  description?: string
}

const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    if (title) {
      document.title = title
    }
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = description
    }

    // Canonical link to current location (helps SPA SEO)
    const href = typeof window !== 'undefined' ? window.location.href : undefined
    if (href) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = href
    }

    // Basic social meta for sharing
    const ensureMeta = (name: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        if (property) el.setAttribute('property', name)
        else el.name = name
        document.head.appendChild(el)
      }
      return el
    }

    ensureMeta('og:title', true).content = title
    if (description) ensureMeta('og:description', true).content = description
    ensureMeta('og:type', true).content = 'website'
    ensureMeta('twitter:card').content = 'summary'
    ensureMeta('twitter:title').content = title
    if (description) ensureMeta('twitter:description').content = description
  }, [title, description])

  return null
}

export default Seo


