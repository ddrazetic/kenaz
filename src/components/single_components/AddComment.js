import React from "react";

const AddComment = () => {
  return (
    <div className="addComment">
      <h3>Add Your Comment</h3>
      <p>
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla non netus. Placerat vehicula donec non suscipit
        egestas, augue vel suspendisse. Et felis venenatis blandit sed est
        ultrices, adipiscing urna.
      </p>
      <input type="text" className="nameEmail" placeholder="Name" />
      <input type="text" className="nameEmail" placeholder="Email Address" />
      <input type="text" className="inputComment" placeholder="Comment" />
      <button>Submit</button>
    </div>
  );
};

export default AddComment;
