import React from 'react';

class Card extends React.Component {
	render() {
    const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} alt=''/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
          <div className="location">{profile.location}</div>
          <div className="bio">{profile.bio}</div>
          <div className="mainUrl">{profile.html_url}</div>
          <div className="publicRepos">{profile.public_repos} public repos</div>
        </div>
    	</div>
    );
  }
}

export default Card; 