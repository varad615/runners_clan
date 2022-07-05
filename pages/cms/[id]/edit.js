import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import Spinner from "../../../components/spinner";

const EditNote = ({ note }) => {
  const [form, setForm] = useState({
    title: note.title,
    description: note.description,
    distance: note.distance
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updateNote = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/notes/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }

    return err;
  };

  return (
    <div className="form-container">
      <h1>Update Note</h1>
      <div>
        {isSubmitting ? (
          <Spinner />
        ) : (
          <div>
            <div className="flex flex-col text-center w-full mb-12">
              <h1>Create New Event</h1>
              <br />
              <Container fluid>
                <form onSubmit={handleSubmit}>
                  <input
                    className="w-full p-2 border-0 bg-[#F1F3F5] rounded-md focus:outline-none"
                    placeholder="Image Link"
                    name="img"
                    defaultValue={note.img}
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <input
                    className="w-full p-2 border-0 bg-[#F1F3F5] rounded-md focus:outline-none"
                    placeholder="Event Title"
                    name="title"
                    defaultValue={form.title}
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <textarea
                    className="w-full p-2 border-0 bg-[#F1F3F5] rounded-md focus:outline-none"
                    placeholder="Description"
                    name="description"
                    defaultValue={form.description}
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <input
                    className="w-full p-2 border-0 bg-[#F1F3F5] rounded-md focus:outline-none"
                    placeholder="Ethadd"
                    name="distance"
                    error={
                      errors.description
                        ? {
                            content: "Please enter a description",
                            pointing: "below"
                          }
                        : null
                    }
                    defaultValue={form.ethadd}
                    onChange={handleChange}
                  />
                  <br />
                  <button
                    className="w-full p-2 border-0 bg-[#2E3192] my-5 text-white rounded-md focus:outline-none"
                    type="submit"
                  >
                    Create
                  </button>
                </form>
              </Container>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

EditNote.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  const { data } = await res.json();

  return { note: data };
};

export default EditNote;
