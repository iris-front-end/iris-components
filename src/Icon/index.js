/*
  Try to keep icon list in alphabetical order when adding your icons
*/
import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Add,
  Email,
  FiberManualRecord,
  Clear,
  PlayCircleFilled,
  PlaylistAdd,
  AccountBalance,
  AccountCircle,
  Home,
  Done,
  PermIdentity,
  Group,
  Person,
  Settings,
  CreditCard,
  BarChart,
  LockOutlined,
  ListAlt,
  ShoppingCart,
  Autorenew,
  HighlightOff,
  Visibility,
  NotificationsActive,
  Dashboard,
  Equalizer,
  Assignment,
  ArrowBack,
  WarningRounded,
  Update,
  PauseCircleOutline,
  Star,
  VisibilityOff,
  ArrowRight,
  Check,
  PanoramaFishEye,
  ChevronLeft,
  MoreVert,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox,
  CloudDownload,
  ExpandMore,
  RemoveCircleOutline,
  KeyboardArrowDown,
} from '@material-ui/icons';

import { CircularProgress } from '@material-ui/core';
import { ArrowDown } from './components/ArrowDown';
import { ArrowRightStroke } from './components/ArrowRightStroke';
import { Config } from './components/Config';
import { Copy } from './components/Copy';
import { Details } from './components/Details';
import { Edit } from './components/Edit';
import { Graphic } from './components/Graphic';
import { Help } from './components/Help';
import { Logout } from './components/Logout';
import { Mail } from './components/Mail';
import { Message } from './components/Message';
import { New } from './components/New';
import { Search } from './components/Search';
import { Push } from './components/Push';
import { Stop } from './components/Stop';
import { Text } from './components/Text';
import { Trash } from './components/Trash';
import { Users } from './components/Users';
import { Members } from './components/Members';
import { Clock } from './components/Clock';
import { NoInformation } from './components/NoInformation';
import { Upload } from './components/Upload';
import { Cancel } from './components/Cancel';
import { CheckCircle } from './components/CheckCircle';
import { FlagBrazil } from './components/FlagBrazil';
import { FlagUnitedStates } from './components/FlagUnitedStates';

import colors from 'styles/colors';

const Icon = ({ type, ...rest }) => {
  switch (type) {
    case 'flag-brazil':
      return <FlagBrazil {...rest} />;

    case 'remove-circle-outline':
      return <RemoveCircleOutline {...rest} />;

    case 'flag-united-states':
      return <FlagUnitedStates {...rest} />;

    case 'arrow-down':
      return <KeyboardArrowDown {...rest} />;

    case 'arrow-down-stroke':
      return <ArrowDown stroke="true" {...rest} />;

    case 'arrow-right':
      return <ArrowRight {...rest} />;

    case 'arrow-right-stroke':
      return <ArrowRightStroke {...rest} />;

    case 'arrow-left-stroke':
      return <ArrowRightStroke {...rest} rotate="true" />;

    case 'config':
      return <Config {...rest} />;

    case 'checkbox-blank':
      return <CheckBoxOutlineBlank {...rest} />;

    case 'chebkox-indeterminate':
      return <IndeterminateCheckBox {...rest} />;

    case 'copy':
      return <Copy {...rest} />;

    case 'cloud-download':
      return <CloudDownload {...rest} />;

    case 'cancel':
      return <Cancel {...rest} />;

    case 'check':
      return <Check style={{ fontSize: 50 }} {...rest} />;

    case 'details':
      return <Details {...rest} />;

    case 'edit':
      return <Edit {...rest} />;

    case 'expand-more':
      return <ExpandMore {...rest} />;
    case 'edit-stroke':
      return <Edit {...rest} stroke={colors.black} width={'0.86em'} />;

    case 'graphic':
      return <Graphic {...rest} />;

    case 'help':
      return <Help {...rest} />;

    case 'logout':
      return <Logout {...rest} />;

    case 'mail':
      return <Mail {...rest} />;

    case 'message':
      return <Message {...rest} />;

    case 'new':
      return <New />;

    case 'new-stroke':
      return <New stroke="true" {...rest} />;

    case 'search':
      return <Search {...rest} />;

    case 'push':
      return <Push {...rest} />;

    case 'stop':
      return <Stop {...rest} />;

    case 'text':
      return <Text {...rest} />;

    case 'trash':
      return <Trash {...rest} />;

    case 'users':
      return <Users {...rest} />;

    case 'members':
      return <Members {...rest} />;

    case 'arrow-back':
      return <ArrowBack {...rest} />;

    case 'cog':
      return <Settings {...rest} />;

    case 'credit-card':
      return <CreditCard {...rest} />;

    case 'bar-graph':
      return <BarChart {...rest} />;

    case 'bulleted-list':
      return <ListAlt {...rest} />;

    case 'bust':
      return <PermIdentity {...rest} />;

    case 'double-bust':
      return <Group {...rest} />;

    case 'menu':
      return <Menu {...rest} />;

    case 'record':
      return <FiberManualRecord {...rest} />;

    case 'done':
      return <Done {...rest} />;

    case 'user':
      return <Person {...rest} />;

    case 'lock':
      return <LockOutlined {...rest} />;

    case 'eye':
      return <Visibility {...rest} />;

    case 'eye-slash':
      return <VisibilityOff {...rest} />;

    case 'play-circle':
      return <PlayCircleFilled {...rest} />;

    case 'list-add':
      return <PlaylistAdd {...rest} />;

    case 'clear':
      return <Clear {...rest} />;

    case 'add':
      return <Add {...rest} />;

    case 'email':
      return <Email {...rest} />;

    case 'bank':
      return <AccountBalance {...rest} />;

    case 'account':
      return <AccountCircle {...rest} />;

    case 'home':
      return <Home {...rest} />;

    case 'shopping':
      return <ShoppingCart {...rest} />;

    case 'refresh':
      return <Autorenew {...rest} />;

    case 'highlight-off':
      return <HighlightOff {...rest} />;

    case 'notifications':
      return <NotificationsActive {...rest} />;

    case 'dashboard':
      return <Dashboard {...rest} />;

    case 'equalizer':
      return <Equalizer {...rest} />;

    case 'assignment':
      return <Assignment {...rest} />;

    case 'circular-loader':
      return <CircularProgress {...rest} />;

    case 'warning':
      return <WarningRounded {...rest} />;

    case 'update':
      return <Update {...rest} />;

    case 'hold':
      return <PauseCircleOutline {...rest} />;

    case 'circle':
      return <PanoramaFishEye {...rest} />;

    case 'star':
      return <Star {...rest} />;

    case 'chevron-left':
      return <ChevronLeft {...rest} />;

    case 'more-vert':
      return <MoreVert {...rest} />;

    case 'clock':
      return <Clock {...rest} />;

    case 'no-information':
      return <NoInformation {...rest} />;

    case 'upload':
      return <Upload {...rest} />;

    case 'check-circle':
      return <CheckCircle {...rest} />;

    default:
      return null;
  }
};

Icon.defaultProps = {
  stroke: colors.white,
};

Icon.propTypes = {
  type: PropTypes.string,
};

export default Icon;
