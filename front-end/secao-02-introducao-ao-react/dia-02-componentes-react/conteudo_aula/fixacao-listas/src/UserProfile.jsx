import { Component } from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    const {name, email, avatar} = user;
    return (
      <div>
        <p> { name } </p>
        <p> { email } </p>
        <Image source={ avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default UserProfile;