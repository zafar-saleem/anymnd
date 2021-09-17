import {
  createContext,
  useEffect,
  useContext,
  useState
} from 'react';
import {
  useQuery,
  gql,
  useMutation,
} from '@apollo/client';
import { useParams } from 'react-router-dom';

const FETCH_LATEST_MESSAGES = gql`
  {
    fetchLatestMessages(channelId: 1) {
      text
    }
  }
`;

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
  const { channelId } = useParams();
  let { loading, error, data } = useQuery(FETCH_LATEST_MESSAGES, {
    variables: { 'channelId': channelId },
  });
  const [postMessage, info] = useMutation(POST_MESSAGE);

  error = info.error || error;
  loading = info.loading || loading;
  data = info.data || data;

  useEffect(() => {
    if (error) {
      return;
    }
  }, [error, data])

  const postMessageHere = (event) => {
    event.preventDefault();
    const data = JSON.stringify({
      text: event.target.message.value,
      channelId: channelId,
      userId: '1'
    });
    console.log(data);
    postMessage({
      variables: data
    });
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
