import React from 'react';

interface Repository {
  id: number;
  name: string;
}

interface Props {
  repositories: Repository[];
}

const RepositoryList: React.FC<Props> = props => (
  <div>
    <h1>Hello world</h1>
  </div>
);

export default RepositoryList;
