import React from 'react';
import './Details.css';

const Details = () => {
  return (
    <section id="details" className="section section-light details">
      <div className="container">
        <h2 className="section-title">Project Overview</h2>
        
        <div className="details-wrapper">
          <div className="table-responsive">
            <table className="overview-table">
              <tbody>
                <tr>
                  <th>Features</th>
                  <th>Specification</th>
                </tr>
                <tr>
                  <td>Total Project Area</td>
                  <td>20 Acres of Lush Greenery</td>
                </tr>
                <tr>
                  <td>Plot Sizes</td>
                  <td>Available in 6000 Sqft to 20000 Sqft</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>Rs.350 to Rs.1000 Per Sqft</td>
                </tr>
                <tr>
                  <td>Ownership</td>
                  <td>100% Clear Title & Freehold Land</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="infrastructure">
            <h3 className="text-primary">Infrastructure & Accessibility</h3>
            <div className="infra-items">
              <div className="infra-item">
                <h4>Internal Roads</h4>
                <p>Wide, well-paved internal roads lined with avenue trees for seamless navigation throughout the estate.</p>
              </div>
              <div className="infra-item">
                <h4>Access Roads</h4>
                <p>Direct access via a multi-lane highway, ensuring smooth driveability from the city center.</p>
              </div>
              <div className="infra-item">
                <h4>Utilities</h4>
                <p>On-site electricity connections, abundant groundwater sources, and high-speed fiber-optic network readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
