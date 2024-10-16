

import React, { useState, useEffect } from "react";
import { fetchTickets } from "../Api"; // Mock API call to fetch tickets
import Column from "./Column"; // Import Column component
import "./Board.css"; // Import board-specific styles


import TopBar from './Topbar'; // Import the TopBar component
import './Board.css'; // For custom CSS

// Priority labels mapping
const priorityLabels = {
  "1": "Urgent",
  "2": "High",
  "3": "Medium",
  "4": "Low",
  "5": "No priority",
};

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("priority");
  const [sorting, setSorting] = useState("priority");
  const [users, setUsers] = useState([]);

  // Fetch tickets from an API
  useEffect(() => {
    const getTickets = async () => {
      const data = await fetchTickets(); // Replace with actual API call
      setTickets(data.tickets);
      setUsers(data.users);
    };
    getTickets();
  }, []);

  // Group tickets by a specific key (e.g., priority)
  const groupBy = (arr, key) => {
    const grouped = arr.reduce((acc, curr) => {
      (acc[curr[key]] = acc[curr[key]] || []).push(curr);
      return acc;
    }, {});
    return Object.keys(grouped).map((key) => ({
      title: key,
      tickets: grouped[key],
    }));
  };

  const findUsername = (userId) => {
        const user = users.find((user) => user.id === userId);
        return user ? user.name : "Unknown User";
      };

  const groupTickets = () => {
    let groupedTickets = groupBy(tickets, grouping);

    // Apply the priority labels if grouping by priority
    if (grouping === "user") {
      groupedTickets = groupBy(tickets, "userId");

      // Replace userId with the actual username for display
      groupedTickets = groupedTickets.map((group) => ({
        ...group,
        title: findUsername(group.title),
      }));
    }
    else if (grouping === "priority") {
      groupedTickets = groupedTickets.map((group) => ({
        ...group,
        title: priorityLabels[group.title] || "No priority",
      }));
    }
    else {
            // Default behavior: grouping by priority or another field
            groupedTickets = groupBy(tickets, grouping);
          }

    // Sort tickets within each group
    groupedTickets.forEach((group) => {
      if (sorting === "priority") {
        group.tickets.sort((a, b) => b.priority - a.priority);
      } else {
        group.tickets.sort((a, b) => a.title.localeCompare(b.title));
      }
    });

    return groupedTickets;
  };

  return (
    <div className="board-container">
       <TopBar setGrouping={setGrouping} setSorting={setSorting} />
      <div className="kanban-board">
        {groupTickets().map((group) => (
          <Column 
          key={group.title} 
          title={group.title} 
          tickets={group.tickets} 
          count={group.tickets.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;

