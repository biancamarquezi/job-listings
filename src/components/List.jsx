import React from "react";
import "./list.css";

export function List({ jobListing }) {
  return (
    <>
      {jobListing.map((listing) => {
        const {
          id,
          company,
          logo,
          newListing = listing.new,
          featured,
          position,
          role,
          level,
          postedAt,
          contract,
          location,
          languages,
        } = listing;
        return (
          <div key={id} className="listings">
            <div className="img">
              <img src={logo} alt={company} />
            </div>

            <div className="listingContainer">
              <div className="listingContainer1">
                <p className="company" key={id}>
                  {company}
                </p>
                {newListing === true && <p className="new">NEW!</p>}
                {featured === true && <p className="featured">FEATURED</p>}
                <h4>{position}</h4>
                <p className="listingInfo">{postedAt}</p>
                <p className="listingInfo">{contract}</p>
                <p className="listingInfo">{location}</p>
              </div>
              <div className="listingContainer2">
                <p>{role}</p>
                <p>{level} </p>
                {languages.map((language) => (
                  <p>{language} </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
