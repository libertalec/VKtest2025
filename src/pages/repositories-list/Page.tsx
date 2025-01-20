import { FC, useEffect } from 'react';
import { List } from '@mui/material';
import { RepositoryCard } from './components/Card.tsx';
import repositoriesStore from '../../stores/repositories-store.tsx';
import { observer } from 'mobx-react-lite';
import { RepositoriesLoader } from '../../components/Loader.tsx';

const RepositoriesList: FC = observer(() => {
  const { repositories, getRepositoriesAction, isLoading } = repositoriesStore;

  useEffect(() => {
    if (repositories.length === 0) {
      getRepositoriesAction();
    }
  }, []);

  const handleScroll = () => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      getRepositoriesAction();
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <List>
      {repositories.map(item => {
        return (
          <RepositoryCard key={item.id} repository={item}></RepositoryCard>
        );
      })}
      {isLoading && <RepositoriesLoader />}
    </List>
  );
});

export { RepositoriesList };
