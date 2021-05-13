import React from 'react';

function Home_Banner(props) {
    return (
        <div className="box-slide pl-1 pt-1"> 
            <div className="div_to_hold_images">
              <div style={{width: '100%', height: '100%', paddingTop: '280px', backgroundImage: 'url(images/1.JPG)', backgroundSize: '100%'}}>
                <div className="box-slide-title p-2">
                  <p className="text-white font-weight-bold mb-0">Gunny mobile</p>
                  <p className="text-white" style={{fontSize: '90%'}}>Up to 2500 sale per day</p>
                </div>
              </div>
            </div>
            <div className="div_to_hold_images">
              <div style={{width: '100%', height: '100%', paddingTop: '280px', backgroundImage: 'url(images/2.JPG)', backgroundSize: '100%'}}>
                <div className="box-slide-title p-2">
                  <p className="text-white font-weight-bold mb-0">Gunny mobile</p>
                  <p className="text-white" style={{fontSize: '90%'}}>Up to 2500 sale per day</p>
                </div>
              </div>
            </div>
            <div className="div_to_hold_images">
              <div style={{width: '100%', height: '100%', paddingTop: '280px', backgroundImage: 'url(images/3.JPG)', backgroundSize: '100%'}}>
                <div className="box-slide-title p-2">
                  <p className="text-white font-weight-bold mb-0">Gunny mobile</p>
                  <p className="text-white" style={{fontSize: '90%'}}>Up to 2500 sale per day</p>
                </div>
              </div>
            </div>
            <div className="div_to_hold_images">
              <div style={{width: '100%', height: '100%', paddingTop: '280px', backgroundImage: 'url(images/4.JPG)', backgroundSize: '100%'}}>
                <div className="box-slide-title p-2">
                  <p className="text-white font-weight-bold mb-0">Gunny mobile</p>
                  <p className="text-white" style={{fontSize: '90%'}}>Up to 2500 sale per day</p>
                </div>
              </div>
            </div>
          </div>
    );
}

export default Home_Banner;