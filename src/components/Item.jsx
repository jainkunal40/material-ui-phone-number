import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import RootRef from '@material-ui/core/RootRef';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class Item extends React.PureComponent {
  render() {
    const {
      name, iso2, dialCode, localization, itemRef, ...restProps
    } = this.props;

    return (
      <RootRef rootRef={(node) => itemRef(node)}>
        <MenuItem
          className="country"
          data-dial-code="1"
          data-country-code={iso2}
          {...restProps}
        >
          <ListItemIcon>
            <div className={`flag ${iso2} margin`} />
          </ListItemIcon>
          <ListItemText primary={`${localization || name} +${dialCode}`} />
        </MenuItem>
      </RootRef>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  iso2: PropTypes.string.isRequired,
  dialCode: PropTypes.string.isRequired,
  itemRef: PropTypes.func.isRequired,
  localization: PropTypes.string,
};

Item.defaultProps = {
  localization: null,
};

export default Item;
