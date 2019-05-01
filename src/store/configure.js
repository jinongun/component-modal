    
import modules from './modules';
import { createStore, compose } from 'redux';


// Development Mode ONLY.
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;


const configureStore = () => {
  const store = createStore(
    modules, /* preloadedState, */
    composeEnhancers()

  );
  return store;
}
export default configureStore;