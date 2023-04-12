import React from 'react';

import { Pagination } from '@mantine/core';

const Page = ({ totalPage, onChangePage }) => {
  return (
    <div className="pagination_container">
      <div className="pagination">
        <Pagination
          total={totalPage}
          size="lg" radius="lg"
          siblings={1}
          withEdges
          onChange={onChangePage}
        />
      </div>
    </div>
  );
};

export default Page;
