import React from 'react';
import PropTypes from 'prop-types';
import WorkerItem from './workerItem';

function WorkerList({data}) {

  return (
    <div className='worker-list'>
      {
        data.map((d) => (
          <WorkerItem 
          key={d.id}
          id={d.id}
          {...d} />
        ))
      }
    </div>
  );
}

// WorkerList.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   unArchive: PropTypes.func,
//   onArchive: PropTypes.func,
//   onDelete: PropTypes.func.isRequired,
// }

export default WorkerList;