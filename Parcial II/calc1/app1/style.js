import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  displayText: {
    fontSize: 70,
    color: '#fff',
    fontWeight: '300',
  },
  buttonsContainer: {
    flex: 3,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 3,
  },
  buttonZero: {
    flex: 2,
    backgroundColor: '#333',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 35,
    marginHorizontal: 5,
    elevation: 3,
  },
  buttonFunction: {
    flex: 1,
    backgroundColor: '#a5a5a5',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 3,
  },
  buttonOperator: {
    flex: 1,
    backgroundColor: '#ff9500',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '400',
  },
  buttonTextFunction: {
    fontSize: 28,
    color: '#000',
    fontWeight: '500',
  },
  buttonTextOperator: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '400',
  },
});

export default styles;