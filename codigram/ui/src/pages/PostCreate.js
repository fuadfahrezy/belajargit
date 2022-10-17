import React from 'react'

const PostCreate = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="text-center">
            <h3>Create Post</h3>
          </div>
          <hr/>
          <form>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input className="form-control" type="file"/>
              <div className="mb-3">
                <label className="form-label">Caption</label>
                <textarea
                className="form-control"
                rows="5"
                placeholder="Masukkan Caption"
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default PostCreate