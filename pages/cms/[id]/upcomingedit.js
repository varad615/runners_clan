import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import Spinner from "../../../components/spinner";
import Link from "next/link";

const UpcomingEdit = ({ upcoming }) => {
  const [form, setForm] = useState({
    title: upcoming.title,
    description: upcoming.description,
    date: upcoming.date
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
        `https://runners-clan.vercel.app/api/upcoming/${router.query.id}`,
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
  const datecheck = () => {
    console.log(eventdate);
  };
  return (
    <div className="form-container">
      <div>
        {isSubmitting ? (
          <Spinner />
        ) : (
          <div>
            <Link href={"/cms"}>
              <button className=" p-2 mx-5 border-0 bg-[#2E3192] my-5 text-white rounded-md focus:outline-none">
                Back
              </button>
            </Link>
            <div className="flex flex-col my-3 text-center w-full mb-12">
              <h1>Update upcoming event</h1>
              <br />
              <Container fluid>
                <form onSubmit={handleSubmit}>
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
                    required
                    onChange={handleChange}
                    datepicker-format="dd/mm/yyyy"
                    type="datetime-local"
                    name="date"
                    className="bg-[#F1F3F5] border focus:border-gray-300 border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-fit p-2 "
                    placeholder="Select date"
                  />

                  <button onClick={datecheck}>date</button>
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

UpcomingEdit.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://runners-clan.vercel.app/api/upcoming/${id}`);
  const { data } = await res.json();

  return { upcoming: data };
};

export default UpcomingEdit;
