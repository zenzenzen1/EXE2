import React from 'react'

type Props = {}

const OwlCarousel = (props: Props) => {
    return (
        <>
            <iframe
                src="/owl.html"
                title="Embedded HTML"
                width="100%"
                height="700px"
                style={{ border: 'none' }}
            />
        </>
    )
}

export default OwlCarousel