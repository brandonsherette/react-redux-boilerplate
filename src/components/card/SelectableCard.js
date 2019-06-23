import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import IconCheckBox from '~components/icon/IconCheckBox';
import classNames from 'classnames';

export const SelectableCard = ({ isSelected, children, title, footer, onClick }) => (
  <Card
    className={classNames('selectableCard', {
      'selectableCard--selected': isSelected
    })}
    onClick={e => onClick({ isSelected, title, event: e })}
  >
    <CardHeader>
      <h2 className="selectableCard__header">
        <div className="title">{title}</div>
        <div className="checkbox"><IconCheckBox isChecked={isSelected} /></div>
      </h2>
    </CardHeader>
    <CardBody>
      {children}
    </CardBody>
    {footer !== undefined && (
      <CardFooter>
        {footer}
      </CardFooter>
    )}
  </Card>
);

SelectableCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node), PropTypes.string]),
};

export default SelectableCard;