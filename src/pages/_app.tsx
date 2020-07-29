import React, { FC } from 'react'
import { AppProps } from 'next/app'
import '../../public/styles/index.css'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
)

export default WrappedApp