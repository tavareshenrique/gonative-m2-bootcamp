import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';

import {
  View, Text, FlatList, ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';
import { isEmptyStatement } from '@babel/types';
import OrganizationItem from './OrganizationItem';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/orgs`);

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    if (data.length !== 0) {
      return (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          onRefresh={this.loadOrganizations}
          refreshing={refreshing}
        />
      );
    }
    return (
      <View style={styles.withoutOrganizationView}>
        <Text style={styles.withoutOrganizationText}>Usuário não possui organizações</Text>
      </View>
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
