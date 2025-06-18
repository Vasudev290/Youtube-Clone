import { UserRound } from "lucide-react";

const commentsData = [
  {
    name: "Vasu Dev",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vasu Dev",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Vasu Dev",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Vasu Dev",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Vasu Dev",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Vasu Dev",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Vasu Dev",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Vasu Dev",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
              {
                name: "Vasu Dev",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vasu Dev",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vasu Dev",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vasu Dev",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vasu Dev",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vasu Dev",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="p-2 my-2 flex shadow-sm bg-gray-100 rounded-lg">
      <UserRound className="h-12 w-12 cursor-pointer text-black hover:text-blue-700 transition duration-200" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="font-thin">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-5">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
