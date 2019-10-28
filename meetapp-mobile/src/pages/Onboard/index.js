import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';

import { Background } from '~/components';
import i18n from '~/i18n';

import { Slide, Title, Image, Message, RoundButton } from './styles';

const SLIDES = [
  {
    key: 'slide1',
    title: 'Faça conexões',
    text: 'Conheça novas pessoas e amplie sua rede de amizades.',
    image: require('~/assets/images/collaboration.png'),
  },
  {
    key: 'slide2',
    title: 'Ganhe conhecimento',
    text: 'Aprenda novas tecnologias e recursos.',
    image: require('~/assets/images/development.png'),
  },
  {
    key: 'slide3',
    title: 'Colabore',
    text: 'Compartilhe o seu conhecimento com outras pessoas.',
    image: require('~/assets/images/presentation.png'),
  },
];

function Onboard({ navigation }) {
  function renderItem({ item }) {
    return (
      <Slide>
        <Title>{item.title}</Title>
        <Image source={item.image} resizeMode="contain" />
        <Message>{item.text}</Message>
      </Slide>
    );
  }

  function renderNextButton() {
    return (
      <RoundButton>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </RoundButton>
    );
  }

  function renderDoneButton() {
    return (
      <RoundButton>
        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </RoundButton>
    );
  }

  async function handleDone() {
    await AsyncStorage.setItem('@meetapp/first_open', String(false));
    navigation.navigate('SignIn');
  }

  return (
    <Background>
      <AppIntroSlider
        renderItem={renderItem}
        slides={SLIDES}
        // showSkipButton
        skipLabel={i18n.t('button.skip')}
        // doneLabel={i18n.t('button.done')}
        // nextLabel={i18n.t('button.next')}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onDone={handleDone}
      />
    </Background>
  );
}

Onboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Onboard;
