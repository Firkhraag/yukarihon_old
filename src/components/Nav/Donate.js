import React, { useState } from 'react';

import DonateIcon from './DonateIcon';

const Donate = ({ setDonateDrawerOpen, isDesktop }) => {

    const [donateIconHoverd, setDonateIconHovered] = useState(false);

    return <div onClick={ () => setDonateDrawerOpen(true) } 
        className="pointer" 
        onMouseEnter={() => setDonateIconHovered(true)}
        onMouseLeave={() => setDonateIconHovered(false)}>
            { isDesktop ? <DonateIcon fill={donateIconHoverd ? '#7e4399' : '#000'} className="donate-icon" />
            : <DonateIcon fill={'#000'} className="donate-icon" /> }
    </div>
}

export default Donate;