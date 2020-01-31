import React from "react";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_USER_BOARDS } from "../../graphql/queries";
import { Link } from "react-router-dom";


function BoardList() {
  //const id = ({properties: { token }}) => {[convertToken] = useMutation(CONVERT_TOKEN)}
  const id = localStorage.getItem("id");
  const { loading, data } = useQuery(GET_USER_BOARDS, { variables: { id } });
debugger
  if (loading){
    return null;
  } else {
    return(
      <div className="board-list">
        {data.user.boards.map(board => (
          <Link to={`/boards/${board.id}`}>
            {board.title}
          </Link>
        ))}
      </div>
    )
  }
}

// class BoardList extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       selected: null
//     }
//   }

//   render(){
//     return (
//       <Query query={FETCH_BOARDS}>
//         {
//           ({ loading, error, data }) => {
//             if (loading) return <div>Loading boards ...</div>;
//             if (error) return `Error! ${error.message}`;
//             return (
//              <div>
//                 {data.boards.map(board => (
//                   <div className="card">
//                 <span  className="deleteBtn">
//                       <DeleteBoard id={board.id} />
//                 </span>
//                   <br></br>
//                    <Link to={`/boards/${board.id}`} key={board.id}>
//                       <div className="container" >
//                         <span className="board-tile-details">
//                           {board.title}
//                         </span>
//                       </div>
//                   </Link>
//                   </div>
//                 ))}
//               </div>
//             );
//           }
//         }
//       </Query>
//     );
//  }
// };

export default BoardList;