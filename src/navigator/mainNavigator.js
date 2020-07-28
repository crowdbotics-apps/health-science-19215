import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps85152Navigator from '../features/Maps85152/navigator';
import ArticleList85147Navigator from '../features/ArticleList85147/navigator';
import Maps85134Navigator from '../features/Maps85134/navigator';
import ArticleList85113Navigator from '../features/ArticleList85113/navigator';
import ArticleList85112Navigator from '../features/ArticleList85112/navigator';
import ArticleList85111Navigator from '../features/ArticleList85111/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps85152: { screen: Maps85152Navigator },
ArticleList85147: { screen: ArticleList85147Navigator },
Maps85134: { screen: Maps85134Navigator },
ArticleList85113: { screen: ArticleList85113Navigator },
ArticleList85112: { screen: ArticleList85112Navigator },
ArticleList85111: { screen: ArticleList85111Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
