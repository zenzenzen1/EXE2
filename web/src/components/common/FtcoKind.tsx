import React from 'react'
import { images } from '../../include/images'

type Props = {}

function FtcoKind({ }: Props) {
    return (
        <>
            {images.ftcoKinks.map((image, index) => (
                <div className="col-lg-2 col-md-4" key={index}>
                    <div className="sort w-100 text-center ftco-animate">
                        <div
                            className="img"
                            style={{ backgroundImage: `url(${image.url})` }}
                        />
                        <h3>{image.name}</h3>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FtcoKind