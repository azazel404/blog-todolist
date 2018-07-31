import React from 'react';//react
//component child input label dan error validasi 
//component ini adalah component form dalam pembuatan new blog

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className={input.name}>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
