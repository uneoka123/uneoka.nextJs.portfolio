import { Spinner } from '@/components/spinner/spinner';

const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}>
      <Spinner />
    </div>
  );
};

export default Loading;