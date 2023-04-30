import { Provider } from 'react-redux';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './components/App/App';
import { initStore } from './store/store';
import { cardsApi } from './services/cardsApi';

export const render = async (url: string, options?: RenderToPipeableStreamOptions) => {
  const store = initStore();

  store.dispatch(cardsApi.endpoints.getCards.initiate(''));
  await Promise.all(store.dispatch(cardsApi.util.getRunningQueriesThunk()));

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );

  return { stream };
};