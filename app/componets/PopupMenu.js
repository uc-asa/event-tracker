import React from "react";

import { View } from "react-native";
import Menu, { MenuItem } from "react-native-material-menu";
import {Icon, Item} from 'native-base';
import styles from '@styles';


class App extends React.Component {
  _menu = null;

  state = { filter: null };

  setMenuRef = ref => {
    
    this._menu = ref;
  };

  sort(value) {
    this.props.onPress && this.props.onPress(value);
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    const { options } = this.props;
    return (
      <View style={{ alignItems: "center", justifyContent: "center", paddingHorizontal: 10 }}>
        <Menu
          ref={(refs) => this.setMenuRef(refs)}
          button={
            <Icon
              onPress={this.showMenu}
              type={'MaterialCommunityIcons'}
              name="filter-outline"
              style={[styles['sp.header.txt'], { fontSize: 24 }]}
              ref="menu"
            />
          }
        >
          {options.map((item) => {
            return (
              <MenuFilterItem onPress={() => this.sort(item.value)} filter="name">
                {item.name}
              </MenuFilterItem>
            )
          })}
        </Menu>
      </View>
    );
  }
}

class MenuFilterItem extends React.PureComponent {

  render() {
    return <MenuItem onPress={this.props.onPress.bind(this)}>{this.props.children}</MenuItem>;
  }
}

export default App;