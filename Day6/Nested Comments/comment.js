const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [] 
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    }
  ];

  function createCommentElement(comment) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.textContent = comment.text;

    if (comment.replies.length > 0) {
      const repliesContainer = document.createElement('div');
      comment.replies.forEach(reply => {
        const replyElement = createCommentElement(reply);
        repliesContainer.appendChild(replyElement);
      });
      commentElement.appendChild(repliesContainer);
    }

    return commentElement;
  }

  function displayComments() {
    const commentsContainer = document.getElementById('comments-container');

    comments.forEach(comment => {
      const commentElement = createCommentElement(comment);
      commentsContainer.appendChild(commentElement);
    });
  }
  displayComments();