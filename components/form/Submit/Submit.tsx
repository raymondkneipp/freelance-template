import { NextPage } from 'next';

const Submit: NextPage = ({ children }) => {
  const base =
    'font-bold inline-block text-center rounded-xl transition-colors';
  const theme = 'bg-sky-700 text-white hover:bg-sky-500';
  const size = 'py-2 px-4';

  const styles = base + ' ' + theme + ' ' + size;
  return (
    <button type="submit" className={styles}>
      {children}
    </button>
  );
};

export default Submit;
