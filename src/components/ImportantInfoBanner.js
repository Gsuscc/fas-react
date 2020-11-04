import React from 'react';
import Popper from '@material-ui/core/Popper';


export default function ImportantInfoBanner() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

    return (
        <React.Fragment>
                 <img className="info-icon" src="/info-icon.png" alt="info-img" onClick={handleClick}></img>
            <Popper id={id} open={open} anchorEl={anchorEl} placement='right' className="info-container">
             <div>
                 <span>COVID-19: Where can I travel safely ? Find the latest information on border status and travel restrictions on the
                   <a target="_blank" rel="noopener noreferrer" href="https://www.gov.uk/foreign-travel-advice"> Foreign & Commonwealth Office’s website.</a>
                 </span>
             </div>
            </Popper>
        </React.Fragment>
    )
}
