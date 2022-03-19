import React, { useEffect, useState } from 'react';
import Sc from './Sc';

const Keys = () => {
    const [prd, Setp] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => Setp(json))
    }, [prd])
    const [cn, Setcn] = useState(0)
    const p = () => {
        let k = cn + 1;
        Setcn(k);
    }
    return (
        <div>
            <h1 className='text-info fw-bold'>Hello ReactJs Bootstrap <sub>{cn}</sub></h1>

            <div className='row g-4'>
                {
                    prd.map(k => <Sc c={k} cl={p} key={k.id}></Sc>)
                }
            </div>
        </div>
    );
};

export default Keys;