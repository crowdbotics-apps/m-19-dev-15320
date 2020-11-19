import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014706Navigator from '../features/BlankScreen014706/navigator';
import CopyOfBlankScreen114699Navigator from '../features/CopyOfBlankScreen114699/navigator';
import CopyOfBlankScreen114698Navigator from '../features/CopyOfBlankScreen114698/navigator';
import CopyOfBlankScreen014697Navigator from '../features/CopyOfBlankScreen014697/navigator';
import BlankScreen014694Navigator from '../features/BlankScreen014694/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen014706: { screen: BlankScreen014706Navigator },
CopyOfBlankScreen114699: { screen: CopyOfBlankScreen114699Navigator },
CopyOfBlankScreen114698: { screen: CopyOfBlankScreen114698Navigator },
CopyOfBlankScreen014697: { screen: CopyOfBlankScreen014697Navigator },
BlankScreen014694: { screen: BlankScreen014694Navigator },

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
