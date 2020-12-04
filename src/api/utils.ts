import Axios, { CancelTokenSource } from 'axios';
import API from 'api/client';
import { AutocompleteDto } from 'api/transform';

const resources: { [query: string]: AutocompleteDto[] } = {};

const makeCancelableRequest = () => {
  let cancel: CancelTokenSource;

  return async (query: string) => {
    if (cancel) {
      cancel.cancel();
    }

    cancel = Axios.CancelToken.source();
    try {
      if (resources[query]) {
        return resources[query];
      }
      const result = await API.autocomplete(query, {
        cancelToken: cancel.token,
      });
      resources[query] = result;

      return result;
    } catch (error) {
      if (!Axios.isCancel(error)) {
        throw error;
      }
      return null;
    }
  };
};

export const autocomplete = makeCancelableRequest();
