import { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { IRepositories } from '../types.ts';

const RepositoryCard: FC<{ repository: IRepositories }> = ({ repository }) => {
  const { description, name, html_url } = repository;

  return (
    <Card sx={{ border: '1px solid #1e1e1e', marginBottom: '16px' }}>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' component='a' href={html_url} target='_blank'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export { RepositoryCard };
