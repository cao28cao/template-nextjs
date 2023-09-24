// app/providers.tsx
'use client'
import {NextUIProvider} from '@nextui-org/react'

export function Providers(props) {
    const { children } = props;
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}