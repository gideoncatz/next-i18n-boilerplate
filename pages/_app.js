import { appWithTranslation, useTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }) => {
    const { t, i18n } = useTranslation();
    return (
        <div className='mainWrapper' dir={i18n.dir()}>
            <Component {...pageProps} />
        </div>
    )
}

export default appWithTranslation(MyApp)
