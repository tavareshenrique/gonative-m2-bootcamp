import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const OrganizationItem = ({ organization }) => (
  <View style={styles.container}>
    <View>
      <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
      <Text style={styles.title}>ola</Text>
    </View>
  </View>
);

OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationItem;
