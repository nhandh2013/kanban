import React from "react";
import "./App.css";
//import "./ContactsApp";
import KanbanBoardContainer from "./KanbanBoardContainer";
import AnimatedShoppingList from "./AnimatedShoppingList";

// let cardsList = [
//     {
//         id: 1,
//         title: "Read the Book",
//         description: "I should read the **whole** book",
//         color: '#BD8D31',
//         status: "in-progress",
//         tasks: []
//     },
//     {
//         id: 2,
//         title: "Write some code",
//         description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
//         color: '#3A7E28',
//         status: "todo",
//         tasks: [
//             {
//                 id: 1,
//                 name: "ContactList Example",
//                 done: true
//             },
//             {
//                 id: 2,
//                 name: "Kanban Example",
//                 done: false
//             },
//             {
//                 id: 3,
//                 name: "My own experiments",
//                 done: false
//             },
//         ]
//     },
//     {
//         id: 3,
//         title: "This is a new card with a very, very long title, this having more than 80 charactersThis is a new card with a very, very long title, this having more than 80 charactersThis is a new card with a very, very long title, this having more than 80 characters",
//         description: "I should read the **whole** book",
//         color: '#408fe1',
//         status: "done",
//         tasks: []
//     }
// ]
class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <KanbanBoardContainer/>
                <AnimatedShoppingList />
            </div>
        )
    }
}
export default HelloMessage;