import { Bars } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="Loader">
      <Bars
        height={80}
        width={80}
        color="#3f51b5"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
