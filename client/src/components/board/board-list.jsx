import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_BOARDS } from "../../graphql/queries";
import { Link } from "react-router-dom";
import DeleteBoard from "./delete-board";
import NavBar from "../nav/nav_bar";
import AddBoard from "./new-board";
import "./board.css";

function BoardList() {
  const id = localStorage.getItem("id");
  const { loading, data } = useQuery(GET_USER_BOARDS, { variables: { id } });

  if (loading) {
    return null;
  } else {
    return (
      <div>
        {data.user.boards.length === 0 ? (
          <div id="no-boards"> No Boards Found</div>
        ) : (
          <div>
            {data.user.boards.map(board => (
              <Link
                className="link-board"
                to={`/boards/${board.id}`}
                key={board.id}
              >
                <div
                  id="imgCard"
                  className="card"
                  key={board.id}
                  style={{
                    backgroundImage:
                      "url(" +
                      require(`../../assets/images/${
                        board.image ? board.image : "1.jpeg"
                      }`) +
                      ")"
                  }}
                >
                  <span className="deleteBtn">
                    <DeleteBoard id={board.id} />
                  </span>
                  <br></br>

                  <div className="container">
                    <span className="board-tile-details">{board.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default BoardList;
