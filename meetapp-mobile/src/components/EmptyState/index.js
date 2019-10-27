import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';

import i18n from '~/i18n';

import { Container, Title, Message } from './styles';

function EmptyState({ image, title, message }) {
  const [fade] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 500,
    }).start();
  });

  return (
    <Container style={{ opacity: fade }}>
      {image}
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Container>
  );
}

EmptyState.propTypes = {
  image: PropTypes.element,
  title: PropTypes.string,
  message: PropTypes.string,
};

EmptyState.defaultProps = {
  image: <Icon name="block" size={100} color="#999" />,
  title: i18n.t('empty.default.title'),
  message: i18n.t('empty.default.description'),
};

export default EmptyState;
