import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const TeamPage = () => (
  <div>
    <h2>Our Team</h2>
    <Link to="/team-members">
      <button>Show Team Members</button>
    </Link>
  </div>
);

const TeamMembersPage = () => (
  <div>
    <h2>Team Members</h2>
    {/* Display team members here */}
    <Link to="/team">
      <button>Back to Our Team</button>
    </Link>
  </div>
);

const PersonalInfoPage = () => (
  <div>
    <h2>Our Team</h2>
    {/* Display personal information here */}
    <Link to="/team-members">
      <button>Show Team Members</button>
    </Link>
  </div>
);

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    // Your team members' data goes here
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Doe', position: 'Designer' },
    // Add more team members as needed
  ]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/team-members">
            <TeamMembersPage teamMembers={teamMembers} />
          </Route>
          <Route path="/personal-info">
            <PersonalInfoPage />
          </Route>
          <Route path="/">
            <TeamPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
