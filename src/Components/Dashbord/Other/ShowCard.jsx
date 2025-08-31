import React from 'react';
import Active from '../../Tasklist/Activve';
import Failed from '../../Tasklist/Failed';
import NewTask from '../../Tasklist/Newtask';
import Completed from '../../Tasklist/Completed';

const ShowCard = ({ data }) => {
  if (!data?.tasks?.length) return null;

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-10 px-6 py-4 min-w-fit">
        {data.tasks.flatMap((task, idx) => {
          const items = [];

          // ✅ Har flag alag se check karo
          if (task.active === true) {
            items.push(<Active key={`active-${idx}`} data={task} />);
          }
          if (task.complete === true) {
            items.push(<Completed key={`complete-${idx}`} data={task} />);
          }
          if (task.failed === true) {
            items.push(<Failed key={`failed-${idx}`} data={task} />);
          }
           if (task.newTask === true) {
            items.push(<NewTask key={`newtask-${idx}`} data={task} />);
          }

          // (Optional) "New" card: aapke data me `new` field nahi hai.
          // Agar "new" ka matlab hai "koi bhi status true nahi", to:
          // const isNew = !task.active && !task.complete && !task.failed;
          // if (isNew) items.push(<NewTask key={`new-${idx}`} data={task} />);

          return items;
        })}
      </div>
    </div>
  );
};

export default ShowCard;
