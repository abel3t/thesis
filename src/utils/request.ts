import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
  200: 'The request has succeeded.',
  201: 'The request has been fulfilled and has resulted in one or more new resources being created.',
  202: 'The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.',
  204: 'The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.',
  400: 'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
  401: 'The request has not been applied because it lacks valid authentication credentials for the target resource.',
  403: 'The server understood the request but refuses to authorize it.',
  404: 'The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
  406: 'The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.',
  410: 'The target resource is no longer available at the origin server and that this condition is likely to be permanent.',
  422: 'The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was unable to process the contained instructions.',
  500: 'The server encountered an unexpected condition that prevented it from fulfilling the request.',
  502: 'The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.',
  503: 'The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.',
  504: 'The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.',
};

/**
 * Handle Exception
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `Request Error ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'Your network is abnormal and you cannot connect to the server',
      message: 'network anomaly',
    });
  }
  return response;
};

/**
 * Configure the default parameters for request
 */
const request = extend({
  errorHandler, // Default error handling
  credentials: 'include', // Does the default request bring cookie
});

export default request;
