import {isTablet} from 'react-native-device-info';

function useIsLargeDevice() {

  return isTablet();
}

export default useIsLargeDevice;
