import * as React from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import PropTypes from 'prop-types';
import theme from '../../../styles/theme';
import {Paragraph, Loader} from '../../../components';
import {useEffect} from 'react';

const getRoutesAndScenes = (tabConfig, loading) => {
  let scenes = {};
  const routes = [];

  tabConfig.forEach(tabData => {
    const {title, key, tabToRender} = tabData;

    scenes = {
      ...scenes,
      [key]: loading ? () => <Loader styles={styles.loader} /> : tabToRender,
    };
    routes.push({key: key, title});
  });

  return {scenes, tabRoutes: routes};
};

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      renderLabel={({route, focused}) => (
        <Paragraph
          textColor={theme.palette.neutral.black}
          styles={[focused ? styles.tabBarLabel : {}]}>
          {route.title}
        </Paragraph>
      )}
      indicatorStyle={styles.tabIndicator}
      style={styles.tabBar}
    />
  );
};

export const Tab = props => {
  const {tabConfig, customStyles, onTabChange, loading = false} = props;

  const layout = useWindowDimensions();

  const {scenes, tabRoutes} = getRoutesAndScenes(tabConfig, loading);

  const renderScene = SceneMap(scenes);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(tabRoutes);

  useEffect(() => {
    onTabChange(routes[index].key);
  }, [index]);

  if (tabConfig.length <= 0) {
    return null;
  }

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={[customStyles]}
      renderTabBar={renderTabBar}
    />
  );
};

Tab.propTypes = {
  tabConfig: PropTypes.arrayOf(
    PropTypes.objectOf({
      key: PropTypes.string,
      title: PropTypes.string,
      tabToRender: PropTypes.func,
    }),
  ),
  customStyles: PropTypes.object,
  onTabChange: PropTypes.func,
  loading: PropTypes.bool,
};

const styles = StyleSheet.create({
  tabBar: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: theme.palette.neutral.white,
    borderColor: theme.palette.borderColors.border01,
  },
  tabIndicator: {
    backgroundColor: theme.palette.primary.primary01,
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
});
