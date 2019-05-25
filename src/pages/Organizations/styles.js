import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  columnWrapper: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
  },
  withoutOrganizationView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  withoutOrganizationText: {
    fontWeight: 'bold',
  },
});

export default styles;
