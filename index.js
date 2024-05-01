/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
// import { faMugEmpty } from '@fortawesome/free-solid-svg-icons/faMugEmpty'

// library.add(fab, faSquareCheck, faMugSaucer, faMugEmpty)

AppRegistry.registerComponent(appName, () => App);
