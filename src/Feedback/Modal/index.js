import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Header from './components/Header';

import { paperProps, Wrapper } from './style';
import { size } from 'styles/media-query';

const Modal = ({
  id,
  onClose,
  isOpen,
  title,
  children,
  titleIcon,
  hasDivider,
}) => {
  const theme = useTheme();

  const mobileSize = Number(size.mobileL.replace('px', ''));
  const fullScreen = useMediaQuery(theme.breakpoints.down(mobileSize));

  return (
    <div>
      <Dialog
        className={`id-${id}`}
        fullScreen={fullScreen}
        open={isOpen}
        onClose={onClose}
        aria-labelledby={`${id}-title`}
        PaperProps={paperProps}
      >
        <Wrapper>
          {(title || titleIcon) && (
            <Header
              id={`${id}-title`}
              titleIcon={titleIcon}
              title={title}
              hasDivider={hasDivider}
            />
          )}
          {children}
        </Wrapper>
      </Dialog>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  titleIcon: PropTypes.string,
  children: PropTypes.object,
  hasDivider: PropTypes.bool,
};

export default Modal;
