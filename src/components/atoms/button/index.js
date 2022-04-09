import React, {useState} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import theme from '../../../styles/theme';
import {Paragraph} from '../text/paragraph';
import {ResponsiveSize} from '../../../utility';

const Button = props => {
  const {buttonText, buttonType, onPress} = props;
  const [loading, setLoading] = useState(false);

  const {text, background} = theme.button[buttonType];

  const isLinearGradient = typeof background === 'string' ? false : true;

  const Container = isLinearGradient ? LinearGradient : View;
  const containerProps = isLinearGradient
    ? {color: background, useAngle: true}
    : {};

  const styles = getStyles(isLinearGradient, buttonType);

  const onButtonPress = () => {
    setLoading(true);
    onPress();
    setLoading(false);
  };

  return (
    <TouchableOpacity onPress={onButtonPress} disabled={loading}>
      <Container style={styles.continueContainer} {...containerProps}>
        {loading ? (
          <ActivityIndicator color={theme.palette.neutral.white} />
        ) : (
          <Paragraph fontWeight="medium" textColor={text}>
            {buttonText}
          </Paragraph>
        )}
      </Container>
    </TouchableOpacity>
  );
};

const getStyles = (isLinearGradient, buttonType) =>
  StyleSheet.create({
    container: {
      ...(isLinearGradient
        ? {}
        : {backgroundColor: theme.button[buttonType].background}),
      height: ResponsiveSize(40),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: ResponsiveSize(20),
    },
  });

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonType: PropTypes.oneOfType([
    'primary',
    'secondary',
    'light',
    'disabled',
  ]),
  onPress: PropTypes.func,
};
