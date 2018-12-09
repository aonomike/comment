import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning</h4>
                <div>Are you sure you want this</div>
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author="Nalah" 
                    timeAgo="Today at 6:00pm" 
                    content="Sleepy sleepy" 
                    avatar={faker.image.avatar()} 
                />
             </ApprovalCard>
             <ApprovalCard> 
                <CommentDetail 
                    author="Lyra" 
                    timeAgo="Today at 5:00pm" 
                    content="First born" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail 
                    author="Cess" 
                    timeAgo="Yesterday at 2:00pm" 
                    content="Hacktoberfest" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
           
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"));