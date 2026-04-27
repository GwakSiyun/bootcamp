import React from 'react';

function PostForm({ formData, onChange, onSubmit }) {
  return (
    <>
      {/* 재사용성 높이기 위해 value, onChange는 부모쪽에서 선언하고 props로 내려주기! */}
      <h2>게시글 등록 및 수정 폼</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="title"
          placeholder="제목"
          value={formData.title}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          id="content"
          placeholder="내용"
          value={formData.content}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          id="author"
          placeholder="작성자명"
          value={formData.author}
          onChange={onChange}
        />
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

export default PostForm;
