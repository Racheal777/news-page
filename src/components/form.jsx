import React, { useState } from "react";
import "../App.css";

export default function Form() {
  const [show, setShow] = useState(false);
  const [close, setClose] = useState(true);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const added = (e) => {
    e.preventDefault();
    const lists = {
      id: comments.length + 1,
      Name: name,
      Message: comment,
    };
    setComments([...comments, lists]);
    setName("");
    setComment("");

    console.log(lists);

    console.log(comments);
  };

  // const formshow = () => {
  //   if (show === true) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }

  //   console.log(show);
  // };

  // const closing = () => {
  //   if (close === true) {
  //     setClose(false);
  //   } else {
  //     setClose(true);
  //   }
  //   console.log(close);
  // };
  return (
    <div>
      <div className="hearts" title="show comments">
        <button onClick={() => setShow(!show)}>
          <i class="fa-solid fa-comment"></i>
        </button>
        <p></p>
      </div>

      <div>
        {show && (
            
          <div>
            
              <>
                <div className="but">
                  <p>Response({comments.length})</p>
                  <button onClick={() => setShow(!show)}>
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>

                <form className="formz" onSubmit={added}>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <textarea
                      type="text"
                      placeholder="What are your thoughts ?"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>

                  <button className="btns" disabled={!comment || !name}>
                    Submit
                  </button>
                </form>

                <section className="reviews">
                  <h2>Top Reviews</h2>
                  <div className="cardss">
                    {comments.map((items, i) => (
                      <div key={i} className="com">
                        <h3>{items.Name}</h3>
                        <p>{items.Message}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            
          </div>
        )}
      </div>

     
    </div>
  );
}


