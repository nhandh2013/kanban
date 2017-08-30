import React from 'react';
import PropTypes from 'prop-types';

class CheckList extends React.Component {
    render() {
        let tasks = this.props.tasks.map( (task) => (
            <li className="checklist__task" key={task.id}>
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className="checklist__task--remove" />
            </li>
        ));
        return (
           <div className="checklist">
               <ul>
                   {tasks}
               </ul>
               <input type="text"
                      className="checklist--add-task"
                      placeholder="Type then hit Enter to add a task"/>
           </div>
        )
    }
}
CheckList.PropTypes = {
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(PropTypes.object)
}


export default CheckList;
