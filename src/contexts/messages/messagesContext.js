import {
  createContext,
  useEffect,
  useContext,
} from 'react';
import {
  useQuery,
  gql,
  useMutation,
} from '@apollo/client';
import { useParams } from 'react-router-dom';
// Fetch latest message query
const FETCH_LATEST_MESSAGES = gql`
  {
    fetchLatestMessages(channelId: 1) {
      text
    }
  }
`;
// post message query.
const POST_MESSAGE = gql`
  mutation PostMessage($channelId: String! $text: String! $userId: String!) {
    postMessage(channelId: $channelId text: $text userId: $userId) {
      channelId
      text
      userId
    }
  }
`;

// Declare messages context with createContext method
export const MessagesContext = createContext({
});

// export context to reuse
export const useMessages = () => useContext(MessagesContext);

// Main messages provider.
const MessagesProvider = ({ children }) => {
  /**
   * Declare 'channelId' variable that destructures channelId from
   * parameters.
   * 
   * @type {number}
   */
  const { channelId } = useParams();
  /**
   * Declare 'loading, error, data' variable to destructure these
   * properties from useQuery hook.
   * 
   * @type {boolean, object, object}
   */
  let { loading, error, data } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { 'channelId': channelId },
  });
  /**
   * Declare 'postMessage and info' variables to destructure it from
   * useMutation hook.
   * 
   * @type {function, object}
   */
  const [postMessage, info] = useMutation(POST_MESSAGE);
  // set error, loading, data variables.
  error = info.error || error;
  loading = info.loading || loading;
  data = info.data || data;

  /**
  * postMessageHere function to post a message.
  */
  const postMessageHere = (event) => {
    event.preventDefault();
    /*
    const data = JSON.stringify({
      text: event.target.message.value,
      channelId: channelId,
      userId: '1'
    });

    postMessage({
      variables: data
    });
    */
    event.target.message.value = '';
  };

  return (
    <MessagesContext.Provider
      value={{
        loading,
        error,
        data,
        postMessageHere,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
