import React from 'react';
import PropTypes from 'prop-types';
import {Column, Table, AutoSizer} from 'react-virtualized';

import styles from './styles';

function ListingTable({data, sortOptions, handleOnSort}) {
  const rowHeight = 75;
  const headerHeight = 55;
  const rowGetter = ({index}) => data[index];
  const defaultCell = ({cellData}) => <span>{cellData}</span>;
  const sortData = ({sortBy, sortDirection}) => handleOnSort({sortBy, sortDirection});

  return (
    <div style={styles.tableStyles}>
      <AutoSizer disableHeight>
        {({width}) => (
          <Table
            width={width}
            height={data.length * rowHeight + headerHeight}
            sort={sortData}
            sortBy={sortOptions.sortBy}
            sortDirection={sortOptions.sortDirection}
            headerHeight={headerHeight}
            headerStyle={styles.headerStyles}
            headerClassName="header-style-override"
            rowHeight={rowHeight}
            rowGetter={rowGetter}
            rowCount={data.length}
            rowStyle={styles.rowStyles}
            cellRenderer={defaultCell}
          >
            <Column
              label="id"
              dataKey="id"
              width={50}
              flexGrow={1}
              style={styles.columnStyles}
            />
            <Column
              label="title"
              dataKey="title"
              width={500}
              flexGrow={5}
              style={styles.columnStyles}
            />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
}

ListingTable.propTypes = {
  data: PropTypes.array,
  sortOptions: PropTypes.object,
  handleOnSort: PropTypes.func,
  cellData: PropTypes.object,
  rowData: PropTypes.object
};

export default ListingTable;
