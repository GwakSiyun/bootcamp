const BASE_URL = 'http://localhost:3000';
// post 쓰면 유지보수 힘듦 =>  도메인만 작성하는 것 추천

const postAPI = {
  // 전체게시글 조회용
  getAllPosts: async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    // 위에 처럼 사용하면 .then 대체 가능
    const data = await response.json();
    return data;
  },
  // 특정 게시글 조회용
  getPostById: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await response.json();
    return data;
  },
  // 게시글 생성
  addPost: async (postData) => {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    return data;
  },
  // 게시글 수정
  updatePost: async (id, postData) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    return data;
  },
  // 게시글 삭제
  deletePost: async (id) => {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default postAPI;
