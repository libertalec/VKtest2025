import { FC, ReactNode } from 'react';
import styles from './Layout.module.css';
import { RepositoriesHeader } from '../../components/RepositoriesHeader.tsx';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <RepositoriesHeader />
      <div className={styles.default}>{children}</div>
    </div>
  );
};

export { Layout };
