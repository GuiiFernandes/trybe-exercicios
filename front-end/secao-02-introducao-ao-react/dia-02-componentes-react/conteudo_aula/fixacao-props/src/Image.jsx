import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { source = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg', alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired,
};

export default Image;
