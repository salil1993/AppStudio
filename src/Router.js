import {Scene, Router, Tabs} from 'react-native-router-flux';

import {
  Welcome,
  Login,
  Forgot,
  Home,
  Menu,
  Categories,
  Settings,
  CategoriesMenu,
  Cart,
  URLScreen
} from './components/screens/index';

import {Images, Colors} from './theme/';
import {TabIcon} from './components/common/TabIcon';

import React, {Component} from 'react';

export default class Routers extends Component {
  render() {
    return (
      <Router
        // onStateChange={onRouterChanged}
        navigationBarStyle={{
          backgroundColor: 'grey',
          borderBottomWidth: 0,
        }}
        hideNavBar={false}
        leftButtonIconStyle={{width: 21, height: 18}}
        titleStyle={{color: '#333'}}>
        <Scene key="root" hideNavBar>
          <Scene
            key="Welcome"
            hideNavBar={true}
            component={Welcome}
            gestureEnable={false}
            panHandlers={null}
          />

          <Scene
            key="Login"
            hideNavBar={true}
            component={Login}
            gestureEnable={false}
            panHandlers={null}
          />

          <Scene
            key="Forgot"
            hideNavBar={true}
            component={Forgot}
            gestureEnable={false}
            panHandlers={null}
          />

          <Scene
            key="CategoriesMenu"
            hideNavBar={true}
            component={CategoriesMenu}
            gestureEnable={false}
            panHandlers={null}
          />

          <Scene
            key="URLScreen"
            hideNavBar={true}
            component={URLScreen}
            gestureEnable={false}
            panHandlers={null}
          />

         <Scene
            key="Cart"
            hideNavBar={true}
            component={Cart}
            gestureEnable={false}
            panHandlers={null}
          />



          <Scene key="Main" hideNavBar initial>
            <Tabs
              showLabel={false}
              lazy={true}
              swipeEnabled={false}
              gestureEnable={true}
              panHandlers={null}
              tabBarStyle={{
                bottom: 0,
                backgroundColor: 'grey',
                paddingTop: 3,
                paddingBottom: 3,
                borderColor: '#000',
                shadowColor: 'rgba(0,0,0,0.06)',
              }}

              // type="reset"
            >
              <Scene
                hideNavBar={true}
                key="Home"
                component={Home}
                gestureEnable={true}
                panHandlers={null}
                icon={({focused}) => (
                  <TabIcon
                    focused={focused}
                    title={'Home'}
                    ImgSize={{width: 22, height: 22}}
                    activeImg={Images.home}
                    defaultImg={Images.home}
                  />
                )}
              />
              <Scene
                hideNavBar={true}
                key="Menu"
                component={Menu}
                gestureEnable={true}
                panHandlers={null}
                icon={({focused}) => (
                  <TabIcon
                    focused={focused}
                    title={'Menu'}
                    ImgSize={{width: 22, height: 22}}
                    activeImg={Images.menu}
                    defaultImg={Images.menu}
                  />
                )}
              />
              <Scene
                hideNavBar={true}
                key="Categories"
                component={Categories}
                gestureEnable={true}
                panHandlers={null}
                icon={({focused}) => (
                  <TabIcon
                    focused={focused}
                    title={'Categories'}
                    ImgSize={{width: 22, height: 22}}
                    activeImg={Images.categories}
                    defaultImg={Images.categories}
                  />
                )}
              />
              <Scene
                hideNavBar={true}
                key="Settings"
                component={Settings}
                gestureEnable={true}
                panHandlers={null}
                icon={({focused}) => (
                  <TabIcon
                    focused={focused}
                    title={'Settings'}
                    ImgSize={{width: 22, height: 22}}
                    activeImg={Images.setting}
                    defaultImg={Images.setting}
                  />
                )}
              />
            </Tabs>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
