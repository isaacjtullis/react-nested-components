import React from 'react';
import IconReferenceList from './IconReference'
class IconGuide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>Launch Academy Guide</h2>
        <p>Here are all the symbols you need to know to understand our curriculum!</p>
        <IconReferenceList />
      </div>
    )
  }
};

export default IconGuide;
