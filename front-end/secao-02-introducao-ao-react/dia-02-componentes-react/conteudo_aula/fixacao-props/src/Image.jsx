import React from 'react';

class Image extends React.Component {
  static propTypes = {
    source: this.propTypes.string.isRequired,
    alternativeText: this.propTypes.string.isRequired,
  }
  render() {
    const { source = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg', alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;