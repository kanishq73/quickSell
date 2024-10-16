import React from "react";
import Card from "./Card"; // Import Card component
import "./Column.css"; // Import column-specific styles
import plus from "../assets/add.svg";
import threedot from "../assets/3dotmenu.svg";



const Column = ({ title, tickets, count }) => {
  return (
    <div className="column">
      {/* Display the title along with the count */}
      <h3 className="column-title ">
        <div className="leftBox" >
            {title} 
            <span>  </span>
            {count}
        </div>
        <div className="rightBox">
            <img src={plus} ></img>
            <img src={threedot} ></img>

        </div>

        
      </h3>

      <div className="card-list">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

    </div>
  );
};

export default Column;


// import React from "react";
// import UserCard from "./UserCard"; // Import UserCard
// import PriorityCard from "./PriorityCard"; // Import PriorityCard
// import "./Column.css"; // Column-specific CSS

// const Column = ({ title, tickets, count, grouping }) => {
//   return (
//     <div className="column">
//       <h3 className="column-title">
//         {title} ({count})
//       </h3>
//       <div className="card-list">
//         {tickets.map((ticket) => {
//           // Render UserCard if grouping by user, otherwise render PriorityCard
//           return grouping === "user" ? (
//             <UserCard key={ticket.id} ticket={ticket} />
//           ) : (
//             <PriorityCard key={ticket.id} ticket={ticket} />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Column;