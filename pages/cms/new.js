import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { Button, Loading, Container } from "@nextui-org/react";
import Spinner from "../../components/spinner";

const NewNote = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    distance: "",
    img: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
        console.log("Submitting...");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    try {
      const res = await fetch("https://runners-clan.vercel.app/api/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
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

  const changes = (e) => {
    setImgchange(e.target.value);
  };
  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is required";
    }
    if (!form.description) {
      err.description = "Description is required";
    }

    if (!form.distance) {
      err.distance = "Distance is required";
    }
    if (!form.img) {
      err.img = "Image is required";
    }
    return err;
  };

  return (
    <div className="m-2">
      <Link href={"/cms"}>
        <button className=" p-2 mx-5 border-0 bg-[#2E3192] my-5 text-white rounded-md focus:outline-none">
          Back
        </button>
      </Link>
      <div>
        {isSubmitting ? (
          <Spinner/>
        ) : (
          <div>
            <div className="flex flex-col text-center w-full mb-12">
              <h1>Create New Event</h1>
              <br />
              <Container fluid>
                <form onSubmit={handleSubmit}>
                  <br />
                  <input
                    className="w-full p-2 border-0 bg-[#F1F3F5] rounded-md focus:outline-none"
                    placeholder="Image Link"
                    name="img"
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <input
                    className="w-full p-2 border-0 bg-[#F1F3F5] rounded-md focus:outline-none"
                    placeholder="Event Title"
                    name="title"
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <textarea
                    className="w-full p-2 border-0 bg-[#F1F3F5] rounded-md focus:outline-none"
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                  />
                  <br />
                  <br />

                  <input
                    className="w-full p-2 border-0 bg-[#F1F3F5] rounded-md focus:outline-none"
                    placeholder="distance"
                    name="distance"
                    onChange={handleChange}
                  />
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

export default NewNote;
