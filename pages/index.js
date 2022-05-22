import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const Homepage = () => {

  const router = useRouter()
  const { t } = useTranslation('common')

  const getNextLocale = () => {
    let nextLocaleIndex = (router.locales.indexOf(router.locale) + 1) % router.locales.length

    // Avoiding the locale to be set to 'default' which is only a technical locale value for explicit locale prefixing
    if (nextLocaleIndex === 0) {
      nextLocaleIndex++;
    }
    return router.locales[nextLocaleIndex]
  }

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link
            href='/'
            locale={getNextLocale()}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage
