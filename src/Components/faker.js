import React from 'react';
import faker from 'faker';

function UserProfile() {
  const fakeName = faker.name.findName();
  const fakeEmail = faker.internet.email();
  const fakeAddress = faker.address.streetAddress();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {fakeName}</p>
      <p>Email: {fakeEmail}</p>
      <p>Address: {fakeAddress}</p>
    </div>
  );
}

export default UserProfile;