import {action} from './app';

const endpointweatherbi = `http://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=8ecd20f53453441b9064673acf586e0e`;
action(endpointweatherbi);
