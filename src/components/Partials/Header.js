import React from 'react';

function Header(props) {
    return (
        <div style={{width: '100%', background: 'white', position: 'fixed', zIndex: 999}}>
        <div className="p-1 bg-white" style={{width: '100%', height: '45px'}}>
          <p className="float-left font-weight-bold mb-0" style={{color: 'black', fontSize: '135%'}}>GAME</p>
          <p className="float-left font-weight-bold mb-0" style={{color: '#f94b2f', fontSize: '100%', marginTop: '6px'}}>&nbsp;MARKET</p>
          <p className="float-right pt-2 mb-0 mr-2"><i className="fa fa-search" aria-hidden="true" /></p>
          <div style={{clear: 'both'}} />
        </div>
        <div className="p-0" style={{width: '100%', height: '40px'}}>
          <div className="pl-1" style={{overflowX: 'auto', display: 'flex', width: '100%'}}>
            <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
              <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-2px'}} />
              <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>Market</p>
            </div>
            <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
              <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-2px'}} />
              <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>New</p>
            </div>
            <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
              <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-2px'}} />
              <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>Sale</p>
            </div>
            <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
              <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-2px'}} />
              <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>Contact</p>
            </div>
            <div className="btn btn-white mr-2" style={{borderRadius: '50px', height: '28px', display: 'flex', border: '1px solid #ccc', color: 'black'}}>
              <i className="fa fa-home" aria-hidden="true" style={{marginTop: '-2px'}} />
              <p className="ml-2" style={{marginTop: '-2px', color: 'black', fontSize: '80%'}}>Info&nbsp;NTF</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;