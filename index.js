/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Layout from './app/_layout.jsx'; // Ensure Layout is used instead of App
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Layout);
