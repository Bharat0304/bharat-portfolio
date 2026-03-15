"use client"

import React, { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface FallbackImageProps extends Omit<ImageProps, "onError"> {
    fallbackText?: string
    fallbackEmoji?: string
}

export default function FallbackImage({
    fallbackText,
    fallbackEmoji,
    alt,
    className,
    ...props
}: FallbackImageProps) {
    const [hasError, setHasError] = useState(false)

    if (hasError) {
        const letter = fallbackText || alt?.charAt(0)?.toUpperCase() || "?"
        return (
            <div
                className={`flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-50 text-zinc-400 font-semibold ${className || ""}`}
                style={{
                    width: typeof props.width === "number" ? props.width : undefined,
                    height: typeof props.height === "number" ? props.height : undefined,
                }}
            >
                {fallbackEmoji || letter}
            </div>
        )
    }

    return (
        <Image
            alt={alt}
            className={className}
            onError={() => setHasError(true)}
            {...props}
        />
    )
}
