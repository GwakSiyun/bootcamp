import React from 'react';
import postAPI from '../api/postAPI';

function PostList({ posts, setSelectedPost, setPosts }) {
  const handlePostClick = async (e) => {
    // 특정 게시글 한 개(자원) 조회 (GET) 요청
    // 현재 조회할 게시글의 고유 ID
    const postId = e.target.dataset.postId;
    // fetch(`http://localhost:3000/posts/${postId}`)
    //   // 정상적으로 동작한다는 가정 하에 then메소드 바로 사용
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setSelectedPost(data);
    //   })
    try {
      const post = await postAPI.getPostById(postId);
      setSelectedPost(post);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlePostDeleteClick = async (e) => {
    e.stopPropagation(); // 이벤트 전파 막기 (부모이벤트 동작 막기) 안하면 버블링돼서 undifined 뜸
    const postId = e.target.closest('li').dataset.postId;

    try {
      await postAPI.deletePost(postId);
      setPosts(posts.filter((post) => post.id != postId));
      setSelectedPost(null);
    } catch (error) {
      console.log(error.message);
    }
  };
  // 특정 게시글 (자원) 삭제 (DELETE) 요청

  //   const postId = e.target.closest('li').dataset.postId;
  //   fetch(`http://localhost:3000/posts/${postId}`, {
  //     method: 'DELETE',
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 게시글 목록 갱신
  //       setPosts(posts.filter((post) => post.id !== postId));
  //       // 선택된 게시글 null
  //       setSelectedPost(null);
  //     })
  //     .catch((error) => console.log(error.message));
  // };

  if (posts.length === 0) return <div>게시글이 없습니다.</div>;
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} data-post-id={post.id} onClick={handlePostClick}>
            {post.title}
            <button onClick={handlePostDeleteClick}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
