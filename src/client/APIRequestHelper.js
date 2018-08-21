import Axios from 'axios';


const APIRequestHelper = {
  getRequest: ({
    url,
    config,
  }) =>
    Axios.get(url, config),

  postRequest: ({
    url,
    body,
    config,
  }) =>
    Axios.post(url, body, config),

  putRequest: ({
    url,
    body,
    config,
  }) =>
    Axios.put(url, body, config),

  patchRequest: ({
    url,
    body,
    config,
  }) =>
    Axios.patch(url, body, config),

  deleteRequest: ({
    url,
    config,
  }) =>
    Axios.delete(url, config),
  // Below helpers are used only in UI, hence LogEntires is used to log the failed apis.
  // These are helpful in Promise.all, where we want the results from every api,
  // irrespective of resolved or rejected
  postRequestWithCatch: ({
    url,
    body,
    config,
  }) =>
    Axios.post(url, body, config).catch((e) => {
      LE.log('Api failed:', url, e);
      return null;
    }),
  putRequestWithCatch: ({
    url,
    body,
    config,
  }) =>
    Axios.put(url, body, config).catch((e) => {
      LE.log('Api failed:', url, e);
      return null;
    }),
  getRequestWithCatch: ({
    url,
    body,
    config,
  }) =>
    Axios.get(url, body, config).catch((e) => {
      LE.log('Api failed:', url, e);
      return null;
    }),
};

export default APIRequestHelper;
